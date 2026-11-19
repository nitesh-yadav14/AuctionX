// Smoke tests: verify the HTTP wiring without needing MongoDB.
// Run with: npm test
import { test, before, after } from "node:test";
import assert from "node:assert/strict";
import http from "node:http";

process.env.MONGO_URL = "mongodb://127.0.0.1:27017/auctionx-test";
process.env.JWT_SECRET = "test-secret";
process.env.ORIGIN = "http://localhost:5173";
process.env.NODE_ENV = "test";

let server;
let base;

before(async () => {
  const { app } = await import("../app.js");
  server = http.createServer(app);
  await new Promise((resolve) => server.listen(0, resolve));
  base = `http://127.0.0.1:${server.address().port}`;
});

after(async () => {
  await new Promise((resolve) => server.close(resolve));
});

test("GET /api/health returns ok", async () => {
  const res = await fetch(`${base}/api/health`);
  assert.equal(res.status, 200);
  assert.equal((await res.json()).status, "ok");
});

test("protected routes reject requests without a cookie", async () => {
  for (const path of ["/api/user", "/api/auction", "/api/auction/stats", "/api/upload/signature", "/api/admin/dashboard"]) {
    const res = await fetch(`${base}${path}`);
    assert.equal(res.status, 401, `${path} should be 401`);
  }
});

test("signup validates required fields and password length", async () => {
  const post = (body) =>
    fetch(`${base}/api/auth/signup`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

  assert.equal((await post({})).status, 400);
  assert.equal(
    (await post({ name: "A", email: "a@b.co", password: "short" })).status,
    400,
  );
});

test("login validates required fields", async () => {
  const res = await fetch(`${base}/api/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({}),
  });
  assert.equal(res.status, 400);
});

test("unknown API route returns JSON 404", async () => {
  const res = await fetch(`${base}/api/does-not-exist`);
  assert.equal(res.status, 404);
  assert.equal((await res.json()).message, "Route not found");
});

test("malformed JSON body returns 400, not a crash", async () => {
  const res = await fetch(`${base}/api/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: "{not json",
  });
  assert.equal(res.status, 400);
});
