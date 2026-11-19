import dotenv from "dotenv";
dotenv.config();

export const env = {
  port: process.env.PORT || 3000,
  origin: process.env.ORIGIN,
  node_env: process.env.NODE_ENV || "development",
  mongo_uri: process.env.MONGO_URL,
  jwt_secret: process.env.JWT_SECRET,
  jwt_expires_in: process.env.JWT_EXPIRES_IN || "7d",
  cookie_domain: process.env.COOKIE_DOMAIN, // Optional parent domain for cross-subdomain cookies
  cloudinary_cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  cloudinary_api_key: process.env.CLOUDINARY_API_KEY,
  cloudinary_api_secret: process.env.CLOUDINARY_API_SECRET,
  cloudinary_url: process.env.CLOUDINARY_URL,
  resend_api_key: process.env.RESEND_API_KEY,
  contact_email: process.env.CONTACT_EMAIL,
  resend_from_email: process.env.RESEND_FROM_EMAIL,
};

// Validate critical environment variables at startup
const requiredVars = ["mongo_uri", "jwt_secret", "origin"];
for (const key of requiredVars) {
  if (!env[key]) {
    console.error(
      `FATAL: Missing required environment variable: ${key.toUpperCase()}`,
    );
    process.exit(1);
  }
}
