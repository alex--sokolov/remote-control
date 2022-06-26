import { createWebSocketStream, WebSocket, WebSocketServer } from 'ws';
import { ExtWebSocket } from '../interfaces';
import { Duplex } from 'stream';
import { getData } from '../utils/getData';
import { commander } from '../components/reducer';

export const startWebSocketServer = (port: number) => {
  function heartbeat(wss: ExtWebSocket) {
    wss.isAlive = true;
    console.log('Pong');
  }

  const wss = new WebSocketServer({ port: port });
  wss.on('connection', function connection(ws: ExtWebSocket): void {
    ws.isAlive = true;
    ws.on('pong', () => {
      heartbeat(ws);
    });

    const myStream: Duplex = createWebSocketStream(ws, {
      encoding: 'utf8',
      decodeStrings: false,
    });

    myStream.write('server_started\0');

    myStream.on('readable', async () => {
      const data = await getData(myStream);
      console.log('received:', data);
      const [action, ...payload] = data.split(' ');

      const result = await commander(action, payload);
      myStream.write(`${action} ${result}\0`);
    });

    ws.on('close', () => {
      myStream.destroy();
    });
  });
  const interval = setInterval(() => {
    wss.clients.forEach((ws: WebSocket) => {
      const extWs = ws as ExtWebSocket;

      if (!extWs.isAlive) return ws.terminate();

      extWs.isAlive = false;
      ws.ping(null, undefined);
      console.log('Ping');
    });
  }, 30000);
  wss.on('close', function close() {
    clearInterval(interval);
  });
};
