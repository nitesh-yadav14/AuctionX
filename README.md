# AuctionX

**Bid smarter. Win bigger.**

AuctionX is a full-stack, real-time online auction marketplace built with the MERN stack. Users can discover auctions, create listings, place live bids, and manage their activity. The application uses Socket.IO to broadcast bidding activity and MongoDB to persist auction data.

> **Project attribution:** AuctionX is an extended and rebranded derivative of the open-source [Online Auction System](https://github.com/theavnishkumar/online-auction-system), originally developed by [Avnish Kumar](https://github.com/theavnishkumar). The original MIT license and copyright notice are retained. Extensions and maintenance by Nitesh Yadav. Please keep this attribution when forking or reusing the project.

## Technology

| Layer | Technologies |
|---|---|
| Frontend | React 19, Vite, Tailwind CSS v4, React Router, Redux Toolkit, TanStack Query |
| Backend | Node.js, Express 5, MongoDB, Mongoose |
| Real time | Socket.IO |
| Authentication | JWT, httpOnly cookies, bcrypt |
| Media and email | Cloudinary, Resend |
| Delivery | Vercel configuration, GitHub Actions deployment workflow |

## Implemented capabilities

- User registration, login, and protected routes
- Role-based user and administrator experiences
- Auction creation and listing management
- Paginated auction discovery and category filtering
- Real-time auction room updates and bid broadcasts
- Server-side bid validation, including seller self-bid prevention and auction-expiry checks
- MongoDB conditional bid updates to reduce race conditions
- User dashboard, bid history, and auction management views
- Admin dashboard and user-management views
- Cloudinary image upload workflow
- Contact form email integration (requires Resend configuration)
- Login history and account profile features

The list above describes the codebase as inspected; planned or future enhancements are not presented as completed features.

## Repository layout

```text
.
├── client/       # React + Vite frontend
├── server/       # Express API and Socket.IO server
├── screenshots/  # Existing project screenshots
├── ARCHITECTURE.md
├── LEARNING_GUIDE.md
└── package.json  # Convenience scripts
```

## Requirements

- Node.js 20 or newer
- npm
- MongoDB local instance or MongoDB Atlas database
- Cloudinary account for image uploads
- (Optional) Resend account and a verified sender domain for contact emails

## Local setup

### 1. Install dependencies

From the repository root:

```bash
npm run install:all
```

Or install separately:

```bash
cd client && npm install
cd ../server && npm install
```

### 2. Configure environment variables

Create `server/.env` from `server/.env.example` and `client/.env` from `client/.env.example`.

Set real values for MongoDB, JWT, Cloudinary, and Resend. Use a long, random JWT secret. `ORIGIN` should match the frontend origin (for local development, `http://localhost:5173`). `RESEND_FROM_EMAIL` must be an address on a domain verified with Resend. Do not commit `.env` files or paste secrets into public repositories.

### 3. Run the application

Open two terminals at the repository root.

Terminal 1 — frontend:

```bash
npm run dev
```

Terminal 2 — backend:

```bash
npm run dev:server
```

The frontend uses `VITE_API` from `client/.env` (the backend origin, default `http://localhost:3000`); the backend listens on `PORT` (default `3000`). The API is served under `/api` - check it at <http://localhost:3000/api/health>.

### 4. Production build

```bash
npm run build
```

## Useful scripts

| Command | Purpose |
|---|---|
| `npm run install:all` | Install client and server dependencies |
| `npm run dev` | Start the Vite frontend |
| `npm run dev:server` | Start the Express / Socket.IO backend |
| `npm run build` | Build the frontend |
| `npm run lint` | Run frontend ESLint |
| `npm test` | Run the backend smoke tests (no database needed) |
| `npm start` | Start the backend in production mode |

## Configuration notes

- Frontend API URL: `client/.env` → `VITE_API` (backend origin only, without `/api`)
- Backend configuration: `server/.env.example`
- For cross-origin cookie authentication in production, configure the frontend origin, backend CORS origin, cookie domain, and HTTPS settings consistently.
- The contact form is optional and needs `RESEND_API_KEY`, `CONTACT_EMAIL`, and `RESEND_FROM_EMAIL`; without them the rest of the app runs normally and the form returns a 503.

## Attribution and license

This project is distributed under the MIT License. See [LICENSE](./LICENSE) for the original copyright and license terms. The upstream copyright notice must remain in copies or substantial portions of the original work.

## Continuous integration

`.github/workflows/ci.yml` lints and builds the client and runs the backend smoke tests on every push and pull request. `.github/workflows/deploy.yml` is a manual (`workflow_dispatch`) EC2 deployment that needs the secrets listed in `server/README.md` plus `EC2_HOST`, `EC2_USERNAME` and `EC2_SSH_KEY`.
