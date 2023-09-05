# Base Framework

A monolith framework used by [automix.ai learning](https://automix.ai/app/learning) for building web applications using the following technologies:

- [TypeScript](https://www.typescriptlang.org/)
- [Node.js](https://nodejs.org/en/)
- [Express](https://expressjs.com/)
- [Vite](https://vitejs.dev/)
- [React](https://reactjs.org/)

## Components

- api/
- web/

## Development

### web

1. Install dependencies

    ```bash
    cd web
    yarn install
    ```

2. Build the CSS

    ```bash
    yarn tailwind -w
    ```

3. Start the development server

    ```bash
    yarn dev
    ```

### api

1. Install dependencies

    ```bash
    cd api
    yarn install
    ```

2. Build

    ```bash
    yarn build -w
    ```

3. Start the development server

    ```bash
    yarn dev
    ```
