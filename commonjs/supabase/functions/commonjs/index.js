const http = require("http");
const cowsay = require("cowsay");

const server = http.createServer((_, resp) => {
  resp.writeHead(200, {
    "content-type": "text-plain",
  });
  resp.write(`${cowsay.say({ text: "meow?" })}\n`);
  resp.end();
});

server.listen();
