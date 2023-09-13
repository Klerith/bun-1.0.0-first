

export const server = Bun.serve({
  port: 3000,
  fetch(request) {

    const url = new URL(request.url);
    console.log(url.pathname);

    // const html = `
    //   <html>
    //     <head>
    //       <title>Bun</title>
    //     </head>
    //     <body>
    //       <h1>Hello, Bun!</h1>
    //     </body>
    //   </html>
    // `;
    const file = Bun.file('./public/index.html');
    console.log(__dirname);
    console.log(import.meta.dir);

    return new Response(file, {
      headers: { "content-type": "text/html" },
    });
  },
});

console.log(`Listening on localhost:${server.port}`);