# Jeffrey Boersma - Portfolio Website

This is the source code for my personal portfolio website.

## Development

This project uses [Vite](https://vitejs.dev/) for building and development.

### Prerequisites

- Node.js (v18 or higher recommended)
- npm

### Setup

1. Install dependencies:
   ```bash
   npm install
   ```

### Commands

- **Start Dev Server**: `npm run dev`
  - Starts a local development server with hot reload.
- **Build**: `npm run build`
  - Builds the production-ready site to the `dist/` folder.
- **Preview**: `npm run preview`
  - Preview the production build locally.
- **Format**: `npx prettier --write .`
  - Formats code using Prettier.

## Project Structure

- `src/`: Source code (HTML, SCSS, JS).
  - `styles/`: SCSS stylesheets.
  - `scripts/`: JavaScript files.
- `public/`: Static assets (images, PDFs, CNAME) served as-is.
- `dist/`: Output directory for production build (generated).

## Deployment

The site is deployed via GitHub Pages. The `dist/` folder should be deployed.
(Note: You may need to configure a GitHub Action to build and deploy this repo).