# umpapa

An app for creating avatars with swappable components. A similar idea to [Picrew](https://picrew.me) but a little simpler and with the ability to draw character parts directly in the app.

This app is designed to be "serverless" and consists of two parts:
  * `app`: The frontend user interface for the app. Built with [Preact](https://preactjs.com/) and served using [Cloudflare Pages](https://pages.cloudflare.com/)
  * `api`: The backend application that serves resources. Built with [TypeScript](https://www.typescriptlang.org/) and served using [Cloudflare Workers](https://workers.cloudflare.com/)

## Project Status
This is a hobby project in active development for the [Cloudflare Developer Summer Challenge](https://challenge.developers.cloudflare.com/) (2021).

## Getting Started
To get the **umpapa** application running in your local environment, clone this repo and run:

```bash
npm install
npm run start
```

This will build and run both the `app` and `api` development servers at the same. Once both parts are built and ready, navigate to http://localhost:8000 in your browser to check out the app! You will also notice that any changes you make to the code will kick off a new rebuild. Refresh the browser to see the new changes.

## Development Scripts
Besides running a development server, there are other useful scripts that can aid in development. Check the `scripts` section of the `package.json` in both the `app` and `api` directories to see the full list of scripts. Scripts that are common to both include:

```bash
# Running tests
npm run test

# Linting
npm run lint

# Formatting
npm run format

# Building a production version of the site
npm run build
```

## Additional Documentation
Documentation related to the design and development of **umpapa** can be found in the [`docs`](./docs/README.md) directory.

## Author
This app was written by [@cuibonobo](https://github.com/cuibonobo/).

## License
[CC0-1.0](https://github.com/cuibonobo/umpapa/blob/main/LICENSE.txt)
