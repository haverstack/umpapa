# umpapa

An app for creating avatars with swappable components. A similar idea to [Picrew](https://picrew.me) but a little simpler and with the ability to draw character parts directly in the app.

This app is designed to be "serverless" and consists of two parts:
  * `app`: The frontend user interface for the app. Built with [Preact](https://preactjs.com/) and served using [Cloudflare Pages](https://pages.cloudflare.com/)
  * `api`: The backend application that serves resources. Built with [TypeScript](https://www.typescriptlang.org/) and served using [Cloudflare Workers](https://workers.cloudflare.com/)

## Project Status
This is a hobby project in active development for the [Cloudflare Developer Summer Challenge](https://challenge.developers.cloudflare.com/) (2021).

## Getting Started
The `app` is the most visible part of the application, so we'll focus on that. To get a version of it running in your local environment, clone this repo and then run:

```bash
cd app
npm install
npm run start
```

You should see a message saying you have a server running at http://localhost:8000. Navigate to that URL in your browser to check out the app!

## Development Scripts
Besides running a development server, there are other useful scripts that can aid in development.

```bash
# Running tests
npm run test

# Linting
npm run lint

# Formatting
npm run format

# Building a production version of the site
npm run build

# Previewing a pre-built production site
npm run serve
```

## Author
This app was written by [@cuibonobo](https://github.com/cuibonobo/).

## License
[CC0-1.0](https://github.com/cuibonobo/umpapa/blob/main/LICENSE.txt)
