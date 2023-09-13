const proc = Bun.spawn(["bun", "my-app"], {
  cwd: "../05-bundler", // specify a working direcory
  env: { ...process.env, FOO: "bar" }, // specify environment variables
  onExit(proc, exitCode, signalCode, error) {
    // exit handler
    console.log('done');
  },
});

const text = await new Response(proc.stdout).text();
console.log(text); // => "hello"