# Setting up Workers
## Install with `npm`
```bash
npm i @cloudflare/wrangler -g
```

## Log in to `wrangler` CLI
Run `wrangler login` on the command line to log in to your Cloudflare account with the CLI tool. A configuration file with your API token will be generated and stored in a `~/.wrangler` directory.

## Update `wrangler.toml` with account ID
The account ID can be found by selecting the Workers product on the [Cloudflare Dashboard](https://dash.cloudflare.com). Copy the account ID from there to the `wrangler.toml` file.

## Publish your worker
Once you are logged in to the `wrangler` CLI and have updated your account ID, publish your worker with:
```bash
wrangler publish
```

The worker will be published at `https://<worker_name>.<account_name>.workers.dev`. For this project, the worker is published at https://umpapa-api.haverstack.workers.dev.

## Worker development
To preview your worker locally without needing to have it published to production, you can run:
```bash
wrangler dev
```

This will open a browser window with your worker running on `localhost` (usually at http://127.0.0.1:8787/) and it will re-build automatically if any changes are made to the code.

To deploy a preview of your worker alongside a testing workbench and the Cloudflare documentation, run:
```bash
wrangler preview
```

## Create a KV namespace
Before we can use [KV](https://developers.cloudflare.com/workers/runtime-apis/kv) in our app for storing data, we must first register a namespace. For **umpapa** we create an `UMPAPA` namespace:
```bash
wrangler kv:namespace create "UMPAPA"
```

The CLI will output a `kv_namespaces` configuration that needs to be added to the `wrangler.toml` file. For this app, it looks like this:

```toml
kv_namespaces = [
    { binding = "UMPAPA", id = "c0cddc7e307c4deb8974fd12b047519c" }
]
```

Whenever we want to use this KV namespace in our code, we must first declare it as a namespace at the top of the file, like this:
```typescript
declare const UMPAPA: KVNamespace
```

Once the namespace has been declared, we can then use the `get`, `put`, `delete`, etc. methods on that namespace. For example:
```typescript
await UMPAPA.put("key", "value");
```

### Namespace previews
If you run a worker in development mode that has KV namespaces enabled, you may encounter the following error:
```text
Error: In order to preview a worker with KV namespaces, you must designate a preview_id in your configuration file for each KV namespace you'd like to preview.
```

To fix the error, create a preview ID for the same namespace, like this:
```bash
wrangler kv:namespace create "UMPAPA" --preview
```

The CLI will then direct you to update the `wrangler.toml` file with the new preview ID. For this app it looks like:
```toml
kv_namespaces = [
    { binding = "UMPAPA", preview_id = "6689ec97d2e34468930e092c7ac517d0", id = "c0cddc7e307c4deb8974fd12b047519c" }
]
```

## Deploying workers to production
**TODO**
