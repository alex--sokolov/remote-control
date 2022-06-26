import * as fs from 'fs';
import * as path from 'path';
import * as http from 'http';
import { apiErrors } from '../components/errors';

export const httpServer = http.createServer(async function (req, res): Promise<void> {
  const __dirname = path.resolve(path.dirname(''));
  const file_path = __dirname + (req.url === '/' ? '/front/index.html' : '/front' + req.url);
  try {
    const readStream = fs.createReadStream(file_path, { encoding: 'utf8' });
    const content: string[] = [];
    readStream.on('data', function (data: string): void {
      content.push(data);
    });
    readStream.on('end', function (data: string): void {
      content.push(data);
      const dataFinal = content.join('');
      res.writeHead(apiErrors.Ok.code, { 'Content-Type': apiErrors.Ok.contentType });
      res.end(dataFinal);
    });
    readStream.on('error', (): void => {
      res.writeHead(apiErrors.NotFound.code, { 'Content-Type': apiErrors.NotFound.contentType });
      res.end(apiErrors.NotFound.text);
      return;
    });
  } catch (err) {
    res.writeHead(apiErrors.ServerError.code, { 'Content-Type': apiErrors.ServerError.contentType });
    res.end(apiErrors.ServerError.text);
    return;
  }
});
