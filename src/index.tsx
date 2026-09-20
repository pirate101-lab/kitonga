import { Hono } from 'hono'

/*
  KITONGA-ICT — edge entry point.
  All pages are static documents in /public, served by the Pages asset layer
  (clean URLs: /  /services  /portfolio). The worker handles the API,
  then defers to the asset layer and finally renders a branded 404.
*/
type Bindings = { ASSETS: { fetch: (req: Request) => Promise<Response> } }
const app = new Hono<{ Bindings: Bindings }>()

app.get('/api/health', (c) => c.json({ ok: true, service: 'kitonga-ict', ts: Date.now() }))

app.get('/api/directory', (c) =>
  c.json({ note: 'Catalogue is authored in /static/js/data.js and rendered client-side.', ts: Date.now() })
)

app.notFound(async (c) => {
  // Defer to the static asset layer: clean URLs, /static/* and public/404.html
  if (c.env?.ASSETS) return c.env.ASSETS.fetch(c.req.raw)
  return c.text('Not found', 404)
})

export default app
