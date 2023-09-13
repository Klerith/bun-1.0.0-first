import { renderToString } from 'react-dom/server';


const router = new Bun.FileSystemRouter({
  style: "nextjs",
  dir: "./pages"
});



Bun.serve({
  port: 3000,
  async fetch(req) {
    console.log(req.url);
    const match = router.match(req)
    
    if (match) {
      const Component = (await import(match.filePath)).default;
      return new Response(renderToString(<Component message="World!!" />))
    }

    return new Response("Not found", {status: 404})
  }
});

console.log('Server running at http://localhost:3000/');



const match = router.match("/");


// console.log('filePath',match?.filePath); // "/path/to/pages/blog/[slug].tsx",
// console.log('kind',match?.kind); // "dynamic"
// console.log('params',match?.params); // { slug: "my-cool-post" }
