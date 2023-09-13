

const password = "123456";

const hash = await Bun.password.hash(password);
// => $argon2id$v=19$m=65536,t=2,p=1$tFq+9AVr1bfPxQdh...



console.log({ 
  password: password,
  hash: hash,
  isMatch: await Bun.password.verify('12345', hash)
});