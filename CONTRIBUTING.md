# Contributing Guidelines

Hi there!

Thanks for showing interest in contributing to **AuctionX**. We welcome all kinds of contributions — code, design, documentation, bug reports, or suggestions.

Please also read our [Code of Conduct](CODE_OF_CONDUCT.md) before contributing.

## Project Tech Stack

- **Frontend:** React 19 + Redux Toolkit + Tailwind CSS v4
- **Backend:** Node.js + Express 5 + MongoDB
- **Real-time:** Socket.io (live bidding)
- **State Management:** Redux Toolkit (auth) + TanStack React Query (server state)
- **Routing:** React Router v7+
- **API Handling:** Centralized Axios instance (`src/services/`) + Custom hooks (`src/hooks/`)
- **Authentication:** JWT with `httpOnly` cookies
- **Deployment:** GitHub Actions CI/CD → AWS EC2

---

## Architecture Overview

### Backend Pattern

```text
Route → Controller → Service/Model → Response
```

- **Routes** (`server/routes/`): Define endpoints and apply middleware
- **Controllers** (`server/controllers/`): Handle request/response logic
- **Models** (`server/models/`): Mongoose schemas
- **Middleware** (`server/middleware/`): Auth guards and file upload
- **Services** (`server/services/`): External service integrations (Cloudinary)
- **Socket** (`server/socket/`): Real-time event handlers
- **Utils** (`server/utils/`): Reusable utility functions

### Frontend Pattern

```text
Page → Hook (useQuery/useMutation) → Service (axios) → API
```

- **Services** (`client/src/services/`): Centralized API calls using the shared Axios instance
- **Hooks** (`client/src/hooks/`): React Query wrappers for data fetching and mutations
- **Pages** (`client/src/pages/`): Page components that consume hooks
- **Components** (`client/src/components/`): Reusable UI components
- **Store** (`client/src/store/`): Redux slices for global state (auth)

> **Important:** New API calls should use services (`src/services/`) with the centralized `api` instance, NOT direct Axios imports. Wrap them with React Query hooks in `src/hooks/`.

---

## How to Contribute

### 1. Fork the Repository

Click the **Fork** button on the AuctionX GitHub repository and create your own copy.

### 2. Clone the Repository

```bash
git clone https://github.com/nitesh-yadav14/AuctionX.git
cd AuctionX
```

### 3. Set Up the Project Locally

Install frontend and backend dependencies:

```bash
# Frontend
cd client
npm install

# Backend
cd ../server
npm install
```

Set up the required `.env` files. Refer to the root README for the required environment variables.

### 4. Create a New Branch

```bash
git checkout -b feature/your-feature-name
```

### 5. Make Your Changes

Follow the existing code structure and patterns:

- **ES Modules** (`import`/`export`) everywhere
- **Controller pattern** for API handlers: `async (req, res) => { try {} catch {} }`
- **Service + Hook pattern** for frontend API calls
- **Socket handlers** in `server/socket/` for real-time features

### 6. Commit Your Changes

Use conventional commit messages:

```bash
git add .
git commit -m "feat: add live notification for bid updates"
```

Common prefixes: `feat:`, `fix:`, `docs:`, `refactor:`, `style:`, `test:`, `chore:`

### 7. Push and Create a Pull Request

```bash
git push origin feature/your-feature-name
```

Then go to GitHub and open a Pull Request with a clear explanation of your changes.

---

## Code Style Guidelines

- Use **ES Modules** (`import`/`export`) — no `require()`
- Use consistent 2-space indentation
- Use `const` by default and `let` when reassignment is needed
- Use async/await for asynchronous code
- Include proper error handling in controllers and services
- Use descriptive variable and function names
- Write clear commit messages using conventional commits

---

## Areas for Contribution

- **Bug Fixes:** Help identify and fix issues
- **New Features:** Implement upcoming features from the roadmap
- **Documentation:** Improve README, code comments, and JSDoc
- **UI/UX:** Enhance the user interface and experience
- **Security:** Strengthen security measures
- **Performance:** Optimize queries and reduce bundle size
- **Testing:** Add unit and integration tests
- **Accessibility:** Improve WCAG compliance

---

## Need Help?

Feel free to open an issue for questions, doubts, or suggestions.

Let's make this project better together!

---

## Project Background and Attribution

AuctionX is an extended and customized version of an open-source online auction platform. This repository includes project-specific modifications, documentation, and maintenance by **Nitesh Yadav**.

The original MIT license and required copyright notice are retained in the repository's `LICENSE` file. Please review and preserve the applicable license terms when using, modifying, or redistributing this project.

**Maintainer:** [Nitesh Yadav](https://github.com/nitesh-yadav14)

**Repository:** [AuctionX](https://github.com/nitesh-yadav14/AuctionX)