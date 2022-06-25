import robot from 'robotjs'
import {drawCircle, drawRectangle} from "./draw";

export const commander = async (action: string, payload:string[]):Promise<void | string> => {
  const { x, y } = robot.getMousePos();
  const coords = payload.map(payload => !!Number(payload) ? Number(payload) : 0);

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
  }
}