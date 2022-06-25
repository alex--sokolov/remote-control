import robot from 'robotjs'

export const commander = async (action: string, payload:string[]):Promise<void | string> => {
  const { x, y } = robot.getMousePos();
  const coords = payload.map(payload => !!Number(payload) ? Number(payload) : 0);

  console.log('Data');
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
  }



}