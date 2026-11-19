// VITE_API is the backend *origin* (no trailing slash, no /api suffix),
// e.g. http://localhost:3000. A trailing "/api" is tolerated and stripped.
const raw = import.meta.env.VITE_API || "http://localhost:3000";

export const API_ORIGIN = raw.replace(/\/+$/, "").replace(/\/api$/, "");
export const API_BASE_URL = `${API_ORIGIN}/api`;
