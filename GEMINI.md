# Project Overview

This project is a statically generated Nuxt.js application, likely serving as a website for "Mascot Gaming". It leverages Nuxt.js for server-side rendering/static generation, Vue.js for the frontend, and includes various modules for enhanced functionality such as internationalization (i18n), dynamic sitemap generation, content management via `@nuxt/content`, and Google Analytics integration.

The application is configured to serve content in English, Spanish, and Portuguese. It dynamically generates routes for games and regulated markets, suggesting a focus on showcasing gaming content and information relevant to different regions. The project also integrates build tools like ESLint and Prettier for code quality and formatting, and Jest for unit testing. Deployment appears to be managed via GitLab CI and Werf, with Helm charts for Kubernetes.

## Technologies Used

*   **Framework:** Nuxt.js (Vue.js)
*   **Languages:** JavaScript, SCSS
*   **Content Management:** `@nuxt/content`
*   **Internationalization:** `@nuxtjs/i18n`
*   **Routing:** Vue Router (automatically configured by Nuxt.js)
*   **State Management:** Vuex (if `store` directory is utilized)
*   **Styling:** SCSS with `@nuxtjs/style-resources`
*   **Linting:** ESLint (`@nuxtjs/eslint-module`, `eslint-config-prettier`)
*   **Formatting:** Prettier
*   **Testing:** Jest (`vue-jest`, `babel-jest`)
*   **HTTP Client:** Axios (`@nuxtjs/axios`)
*   **Other Nuxt Modules:** `@nuxtjs/google-analytics`, `@nuxtjs/sitemap`, `@nuxt/image`, `@nuxtjs/device`, `nuxt-gsap-module`
*   **Deployment Tools:** GitLab CI, Werf, Helm

## Building and Running

The project uses `npm` for dependency management and scripting.

### Setup

```bash
# Install dependencies
$ npm install
```

### Development

Run the application with hot reload for development:

```bash
# Serve with hot reload at localhost:3000
$ npm run dev
```

### Production Build & Serve

Build the project for production and launch a local server:

```bash
# Build for production
$ npm run build

# Launch production server
$ npm run start
```

### Static Generation

Generate a static version of the project:

```bash
# Generate static project
$ npm run generate
```

### Linting & Formatting

Check for linting errors and format code:

```bash
# Check JavaScript and Vue files for linting issues
$ npm run lint:js

# Check code formatting with Prettier
$ npm run lint:prettier

# Run both linting checks
$ npm run lint

# Fix linting and formatting issues
$ npm run lintfix
```

### Testing

Run unit tests using Jest:

```bash
# Run unit tests
$ npm run test
```

## Development Conventions

### Code Style

The project adheres to a code style enforced by ESLint and Prettier. The configuration extends `@nuxtjs` and `prettier` rules. It is recommended to run `npm run lintfix` to automatically format and fix minor linting issues before committing.

### Project Structure

Nuxt.js conventions are followed, with specific directories for:
*   `assets/`: Uncompiled assets like SCSS, images, fonts. Global SCSS variables are defined in `assets/scss/_variables.scss`.
*   `components/`: Reusable Vue.js components.
*   `content/`: Markdown files for articles, managed by `@nuxt/content`.
*   `lang/`: Translation files for i18n.
*   `layouts/`: Vue.js layouts for different page structures.
*   `middleware/`: Nuxt.js middleware, e.g., `validateUrl.js`.
*   `pages/`: Vue.js pages defining application routes.
*   `plugins/`: JavaScript plugins to run before instantiating the root Vue.js application.
*   `static/`: Static files served directly, including `data/` for dynamic route generation.
*   `store/`: Vuex store files (if active).
*   `tests/unit/`: Directory for unit tests using Jest.

### Dynamic Content

Dynamic routes for the sitemap and static generation are created based on `static/data/games-all.json` and `static/data/regulated-markets.json`. Articles are managed via markdown files in the `content/articles` directory.

### Internationalization

The application supports English (`en`), Spanish (`es`), and Portuguese (`pt`), configured via `@nuxtjs/i18n` with locale files in the `lang/` directory.

### External Resources

Videos are stored in MinIO and served via a redirect configured in `.helm/templates/nginx-cm.yaml`.
