
import mongoose from "mongoose";
import { env } from "../config/env.config.js";

let cached = globalThis.mongoose;

if (!cached) {
  cached = globalThis.mongoose = {
    conn: null,
    promise: null,
  };
}

export const connectDB = async () => {
  const MONGO_URL = env.mongo_uri;

  if (!MONGO_URL) {
    throw new Error(
      "MongoDB connection URL is missing. Please configure MONGO_URL in your environment variables."
    );
  }

  // Reuse existing database connection
  if (cached.conn) {
    return cached.conn;
  }

  // Create connection only once
  if (!cached.promise) {
    cached.promise = mongoose
      .connect(MONGO_URL, {
        bufferCommands: false,
      })
      .then((mongooseInstance) => {
        console.log("MongoDB Connected Successfully");
        return mongooseInstance;
      })
      .catch((error) => {
        cached.promise = null;
        console.error("MongoDB Connection Failed:", error.message);
        throw error;
      });
  }

  cached.conn = await cached.promise;
  return cached.conn;
};

export const disconnectDB = async () => {
  try {
    await mongoose.disconnect();

    cached.conn = null;
    cached.promise = null;

    console.log("Disconnected from MongoDB Successfully");
  } catch (error) {
    console.error("Error disconnecting from MongoDB:", error.message);
    throw error;
  }
};
