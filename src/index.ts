import { httpServer } from './http_server';
import { startWebSocketServer } from './wss_server';

const HTTP_PORT = process.env.HTTP_PORT || 4000;
const WSS_PORT = Number(process.env.WSS_PORT) || 8080;
console.log(`🚀 Start static http server on the ${HTTP_PORT} port!`);
httpServer.listen(HTTP_PORT);

startWebSocketServer(WSS_PORT);
console.log(`🚀 Start WebSocketServer on the ${WSS_PORT} port!`);
