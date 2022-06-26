import robot from 'robotjs';
import { drawCircle, drawRectangle } from './draw';
import { prntScrn } from './prntScrn';

const PRINTSCREEN_WIDTH = 100;
const PRINTSCREEN_HEIGHT = 100;

export const commander = async (action: string, payload: string[]): Promise<void | string> => {
  const { x, y } = robot.getMousePos();
  const coords = payload.map((payloadItem) => (!Number(payloadItem) ? 0 : Number(payloadItem)));

  console.log('------------');
  console.log('action', action);
  console.log('x', x);
  console.log('y', y);
  console.log('xOffset', coords[0]);
  console.log('yOffset', coords[1]);
  console.log('------------');

  switch (action) {
    case 'mouse_up':
      return robot.moveMouse(x, y - coords[0]);
    case 'mouse_down':
      return robot.moveMouse(x, y + coords[0]);
    case 'mouse_left':
      return robot.moveMouse(x - coords[0], y);
    case 'mouse_right':
      return robot.moveMouse(x + coords[0], y);
    case 'mouse_position':
      return `${x},${y}`;
    case 'draw_circle':
      return drawCircle(x, y, coords[0]);
    case 'draw_rectangle':
      return drawRectangle(x, y, coords[0], coords[1]);
    case 'draw_square':
      return drawRectangle(x, y, coords[0], coords[0]);
    case 'prnt_scrn':
      return prntScrn(x, y, PRINTSCREEN_WIDTH, PRINTSCREEN_HEIGHT);
  }
};
