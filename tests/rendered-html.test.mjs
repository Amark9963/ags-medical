import assert from "node:assert/strict";
import test from "node:test";

async function render(path = "/") {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);
  return worker.fetch(new Request(`http://localhost${path}`, { headers: { accept: "text/html" } }), { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } }, { waitUntil() {}, passThroughOnException() {} });
}

test("server-renders AGS Medical source-aligned homepage content", async () => {
  const response = await render("/");
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.match(html, /A reliable and professional source for your medical product needs/);
  assert.match(html, /Our Medical Product Groups/);
  assert.match(html, /Custom Medical Products/);
  assert.doesNotMatch(html, /drawn from AGS Medical|publicly listed|This concept reorganizes/i);
});

test("server-renders every primary journey without prototype narration", async () => {
  const routes = [
    ["/products", /Our Medical Product Groups/],
    ["/products/diagnostic-medical-equipment", /Products include:/],
    ["/custom-medical-products", /Custom Medical Products/],
    ["/contact", /Our Location/],
  ];
  for (const [path, expected] of routes) {
    const response = await render(path);
    assert.equal(response.status, 200, `${path} should render successfully`);
    const html = await response.text();
    assert.match(html, expected);
    assert.doesNotMatch(html, /labels are drawn|publicly presented|website concept/i);
  }
});
