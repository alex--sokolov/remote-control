import robot from 'robotjs';
import { drawCircle, drawRectangle } from './draw';
import { prntScrn } from './prntScrn';

const PRINTSCREEN_WIDTH = 200;
const PRINTSCREEN_HEIGHT = 200;

export const commander = async (action: string, payload: string[]): Promise<void | string> => {
  const { x, y } = robot.getMousePos();
  const [clientX, clientY] = payload.map((payloadItem) => (!Number(payloadItem) ? 0 : Number(payloadItem)));

  switch (action) {
    case 'mouse_up':
      return robot.moveMouse(x, y - clientX);
    case 'mouse_down':
      return robot.moveMouse(x, y + clientX);
    case 'mouse_left':
      return robot.moveMouse(x - clientX, y);
    case 'mouse_right':
      return robot.moveMouse(x + clientX, y);
    case 'mouse_position':
      return `${x},${y}`;
    case 'draw_circle':
      return drawCircle(x, y, clientX);
    case 'draw_rectangle':
      return drawRectangle(x, y, clientX, clientY);
    case 'draw_square':
      return drawRectangle(x, y, clientX, clientX);
    case 'prnt_scrn':
      return prntScrn(x, y, PRINTSCREEN_WIDTH, PRINTSCREEN_HEIGHT);
  }
};
