const http = require('http');
const fs = r

const server = http.createServer((request, response) => {
  console.log("Bir istek bulunuldu");
  console.log(request.url);
  response.writeHead(200, { "content-type": 'text/html; charset=utf-8' })
  response.write("<b>Merhaba</b> Dünya");
  response.end();
});

server.listen(3000);