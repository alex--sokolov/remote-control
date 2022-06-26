import { WebSocket } from 'ws';

export interface ExtWebSocket extends WebSocket {
  isAlive: boolean;
}

export interface IError {
  code: number;
  text?: string;
  contentType?: string;
}

export interface IApiErrors {
  [key: string]: IError;
}
