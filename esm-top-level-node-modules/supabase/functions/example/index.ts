import p from "is-positive";
import { createServer } from "node:http";

console.log(p);

const server = createServer((_, resp) => {
  resp.writeHead(200);
  resp.end();
});

server.listen();
