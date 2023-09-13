const file = Bun.file(import.meta.dir + '/package.json'); // BunFile

const pkg = await file.json(); // BunFile extends Blob

console.log(pkg);

pkg.name = 'my-package';
pkg.version = '1.0.3';


// console.log(pkg.toString());
await Bun.write(file, JSON.stringify( pkg, null, 2));
