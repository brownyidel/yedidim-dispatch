// Standalone Yedidim Dispatch privacy policy worker.
// Keeps the public URL at /privacypolicy without needing a trailing slash.
export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (url.pathname === "/" || url.pathname === "/privacy-policy") {
      return Response.redirect(new URL("/privacypolicy", url).toString(), 302);
    }

    if (url.pathname !== "/privacypolicy" && url.pathname !== "/privacypolicy/") {
      return new Response("Not found", { status: 404 });
    }

    if (request.method !== "GET" && request.method !== "HEAD") {
      return new Response("Method not allowed", { status: 405, headers: { Allow: "GET, HEAD" } });
    }

    const assetUrl = new URL("/privacypolicy.html", url);
    const response = await env.ASSETS.fetch(new Request(assetUrl.toString(), request));
    const headers = new Headers(response.headers);
    headers.set("Content-Type", "text/html; charset=utf-8");
    headers.set("X-Content-Type-Options", "nosniff");

    return new Response(response.body, { status: response.status, headers });
  },
};
