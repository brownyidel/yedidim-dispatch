# Yedidim Dispatch — Privacy Policy

Independent Cloudflare Worker for the Yedidim Dispatch public privacy policy.

- Public URL (after Cloudflare configuration): https://yedidimdispatch.yidel.dev/privacypolicy
- Contact for privacy and deletion requests: brownyidel@gmail.com
- Policy HTML: `public/privacypolicy.html`
- Route handler: `src/index.js`

## Deploy with Cloudflare

1. In **Workers & Pages**, choose **Create application** → **Import a repository**.
2. Select GitHub repository `brownyidel/yedidim-dispatch`.
3. Set Worker name to `yedidim-dispatch`. Leave build command blank; deploy command: `npx wrangler deploy`.
4. Deploy, then in Worker **Settings → Domains & Routes**, add custom domain `yedidimdispatch.yidel.dev`.
5. Confirm the public privacy policy URL responds without authentication.

Changes pushed to `main` should trigger Cloudflare deployments after Git integration is connected.

Before publishing to Google Play, the operator should verify that the written policy accurately describes the app's actual collection, sharing, account deletion, and service providers.
