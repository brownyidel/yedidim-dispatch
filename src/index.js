// Public privacy and account-deletion pages for Yedidim Dispatch.
// Serve static HTML from the Assets binding without automatic HTML redirects.
export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (request.method !== "GET" && request.method !== "HEAD") {
      return new Response("Method not allowed", {
        status: 405,
        headers: { Allow: "GET, HEAD" }
      });
    }

    const redirects = {
      "/": "/privacypolicy",
      "/privacy-policy": "/privacypolicy",
      "/deleteaccount": "/delete-account"
    };
    if (redirects[url.pathname]) {
      return Response.redirect(new URL(redirects[url.pathname], url).toString(), 302);
    }

    const assets = {
      "/privacypolicy": "/privacypolicy.html",
      "/privacypolicy/": "/privacypolicy.html",
      "/delete-account": "/delete-account.html",
      "/delete-account/": "/delete-account.html"
    };
    const assetPath = assets[url.pathname];
    if (!assetPath) {
      return new Response("Not found", { status: 404 });
    }

    const assetUrl = new URL(assetPath, url);
    const assetRequest = new Request(assetUrl.toString(), {
      method: request.method,
      headers: { Accept: "text/html" }
    });
    const response = await env.ASSETS.fetch(assetRequest);
    if (!response.ok) {
      return new Response("Page unavailable", { status: response.status });
    }
    const headers = new Headers(response.headers);
    headers.set("Content-Type", "text/html; charset=utf-8");
    headers.set("X-Content-Type-Options", "nosniff");
    headers.set("Cache-Control", "public, max-age=300");

    return new Response(response.body, { status: response.status, headers });
  }
};
