const http = require('http');

const server = http.createServer((request, response) => {
  response.writeHead(200, { 'content-type': 'text/html; charset=utf-8' });
  if (request.method === 'GET') {
    if (request.url === '/') {
      response.write('<b>index sayfasındasınız... </b>')
    }
    else if (request.url === '/iletisim') {
      response.write('<i>iletişim Sayfasındasınız...</i>')
    }
    else {
      response.write('bu sayfa Bulunamadı !!!')
    }
  }
  response.end();
});


server.listen(3000);