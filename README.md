# Travel App

A travel e-commerce web app built with Next.js. The product UI is still early (Create Next App starter), but the repo includes production-oriented tooling: strict linting, unit and E2E tests, Storybook, Docker, and CI on pull requests.

## Stack

| Layer            | Technology                                                                                                                                                           |
| ---------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Framework        | [Next.js 16](https://nextjs.org) (App Router)                                                                                                                        |
| UI               | [React 19](https://react.dev), [Tailwind CSS v4](https://tailwindcss.com)                                                                                            |
| Language         | [TypeScript](https://www.typescriptlang.org) (strict)                                                                                                                |
| Unit tests       | [Vitest](https://vitest.dev), [Testing Library](https://testing-library.com), jsdom                                                                                  |
| E2E tests        | [Playwright](https://playwright.dev) (Chromium, Firefox, WebKit)                                                                                                     |
| Component docs   | [Storybook 10](https://storybook.js.org) (`@storybook/nextjs-vite`)                                                                                                  |
| Lint & format    | [ESLint 9](https://eslint.org) (flat config), [Prettier](https://prettier.io)                                                                                        |
| Git hooks        | [Husky](https://typicode.github.io/husky), [lint-staged](https://github.com/lint-staged/lint-staged), [Commitlint](https://commitlint.js.org) (Conventional Commits) |
| Containers       | Docker (production + dev with Compose Watch)                                                                                                                         |
| CI               | GitHub Actions (lint, format, typecheck, test, build, E2E, commitlint)                                                                                               |
| Storybook deploy | GitHub Pages (on push to `main`)                                                                                                                                     |

## Quick start

**Prerequisites:** Node.js 20+ (CI uses Node 24), npm

```bash
git clone <repo-url>
cd travel-app
npm ci
cp .env.example .env   # optional; defaults work for local dev
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). Edit `app/page.tsx` — the page hot-reloads.

### Docker (optional)

```bash
# Production image
npm run docker:up

# Dev container with file sync + hot reload (uses webpack + polling)
npm run docker:dev
npm run docker:dev:down   # stop dev stack
```

Copy `.env.example` to `.env` before `docker:dev` if you need the polling/HMR settings documented there.

### Storybook

```bash
npm run storybook
```

Opens the component catalog at [http://localhost:6006](http://localhost:6006).

## Commands

### Development

| Command              | Description                                                                        |
| -------------------- | ---------------------------------------------------------------------------------- |
| `npm run dev`        | Start the Next.js dev server (Turbopack by default).                               |
| `npm run dev:docker` | Dev server bound to `0.0.0.0` with webpack — used inside the dev Docker container. |
| `npm run build`      | Production build.                                                                  |
| `npm run start`      | Serve the production build locally.                                                |

### Quality checks

| Command                | Description                                                            |
| ---------------------- | ---------------------------------------------------------------------- |
| `npm run lint`         | Run ESLint on the whole repo (zero warnings allowed).                  |
| `npm run lint:fix`     | ESLint with auto-fix.                                                  |
| `npm run format`       | Format all supported files with Prettier.                              |
| `npm run format:check` | Verify formatting without writing files (used in CI).                  |
| `npm run typecheck`    | TypeScript check with `tsc --noEmit`.                                  |
| `npm run check`        | Full local gate: lint → format check → typecheck → unit tests → build. |

### Testing

| Command               | Description                                                        |
| --------------------- | ------------------------------------------------------------------ |
| `npm run test`        | Vitest in watch mode with coverage.                                |
| `npm run test:run`    | Single Vitest run with coverage (CI and pre-commit related tests). |
| `npm run test:e2e`    | Playwright E2E tests (starts dev server automatically via config). |
| `npm run test:e2e:ui` | Playwright with interactive UI.                                    |

First-time E2E setup:

```bash
npx playwright install
```

### Storybook

| Command                   | Description                                                                         |
| ------------------------- | ----------------------------------------------------------------------------------- |
| `npm run storybook`       | Dev server for stories and component docs.                                          |
| `npm run build-storybook` | Static Storybook build to `storybook-static/` (deployed to GitHub Pages on `main`). |

### Docker

| Command                   | Description                                              |
| ------------------------- | -------------------------------------------------------- |
| `npm run docker:build`    | Build the production Docker image (`travel-app` tag).    |
| `npm run docker:up`       | Build and run the production stack via `docker compose`. |
| `npm run docker:dev`      | Dev stack with Compose Watch for hot reload.             |
| `npm run docker:dev:down` | Stop and remove the dev stack.                           |

## Project layout

```
app/           Next.js App Router pages, layout, and global styles
stories/       Storybook stories and demo components
e2e/           Playwright end-to-end specs
.storybook/    Storybook configuration
.github/       CI and Storybook deploy workflows
```

## Git conventions

- **Commits:** [Conventional Commits](https://www.conventionalcommits.org) (`feat:`, `fix:`, `chore:`, etc.). Enforced locally via Husky and in CI on pull requests.
- **Pre-commit:** lint-staged runs ESLint, Prettier, and related Vitest tests on staged files.

## CI

On every pull request, GitHub Actions runs lint, format check, typecheck, unit tests, production build, Playwright E2E, and commit message validation. Storybook is built and published to GitHub Pages when changes land on `main` (requires Pages source set to **GitHub Actions** in repo settings).
