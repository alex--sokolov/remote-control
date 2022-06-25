import * as fs from 'fs';
import * as path from 'path';
import * as http from 'http';

export const httpServer = http.createServer(async function (req, res) {
  const __dirname = path.resolve(path.dirname(''));
  const file_path = __dirname + (req.url === '/' ? '/front/index.html' : '/front' + req.url);
  try {
    const readStream = fs.createReadStream(file_path, {encoding: 'utf8'});
    const content: string[] = [];
    readStream.on('data', function (data: string) {
      content.push(data);
    });
    readStream.on('end', function (data: string) {
      content.push(data);
      const dataFinal = content.join('');
      res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
      res.end(dataFinal);
    });
    readStream.on('error', (err) => {
      res.writeHead(404, {'Content-Type': 'application/json'});
      res.end("Not found");
      return;
    })
  } catch (err) {
    res.writeHead(500, {'Content-Type': 'application/json'});
    res.end("Server error");
    return;
  }
});
