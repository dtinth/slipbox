import { fromAnyIterable } from "@sec-ant/readable-stream/ponyfill/fromAnyIterable";
import { type Html, html, renderHtmlStream } from "@thai/html";

export async function pageResponse(title: string, body: Html) {
  const stream = renderHtmlStream(html`<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>${title}</title>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH"
          crossorigin="anonymous"
        />
        <script
          defer
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz"
          crossorigin="anonymous"
        ></script>
        <script
          defer
          src="https://cdn.jsdelivr.net/npm/wc-qrcode@0.1.6"
        ></script>
        <script
          defer
          src="https://cdn.jsdelivr.net/npm/iconify-icon@2.2.0/dist/iconify-icon.min.js"
        ></script>
      </head>
      <body>
        <div class="p-4" style="margin: 0 auto; max-width: 480px;">${body}</div>
      </body>
    </html>`);
  return new Response(fromAnyIterable(stream), {
    status: 200,
    headers: { "Content-Type": "text/html" },
  });
}
