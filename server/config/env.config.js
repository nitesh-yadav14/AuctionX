
import dotenv from "dotenv";

dotenv.config();

export const env = {
  port: process.env.PORT || 3000,

  origin: process.env.ORIGIN,

  node_env: process.env.NODE_ENV || "development",

  // MongoDB
  mongo_uri: process.env.MONGO_URL,

  // JWT Authentication
  jwt_secret: process.env.JWT_SECRET,
  jwt_expires_in: process.env.JWT_EXPIRES_IN || "7d",

  // Cookies (optional)
  cookie_domain: process.env.COOKIE_DOMAIN,

  // Cloudinary (optional)
  cloudinary_cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  cloudinary_api_key: process.env.CLOUDINARY_API_KEY,
  cloudinary_api_secret: process.env.CLOUDINARY_API_SECRET,
  cloudinary_url: process.env.CLOUDINARY_URL,

  // Resend Email (optional)
  resend_api_key: process.env.RESEND_API_KEY,
  contact_email: process.env.CONTACT_EMAIL,
  resend_from_email: process.env.RESEND_FROM_EMAIL,
};

// Validate required environment variables
const requiredVars = {
  MONGO_URL: env.mongo_uri,
  JWT_SECRET: env.jwt_secret,
  ORIGIN: env.origin,
};

const missingVars = Object.entries(requiredVars)
  .filter(([, value]) => !value || !value.trim())
  .map(([key]) => key);

if (missingVars.length > 0) {
  console.error(
    `FATAL: Missing required environment variables: ${missingVars.join(", ")}`
  );

  process.exit(1);
}
