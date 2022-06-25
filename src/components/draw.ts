import robot, {mouseToggle} from "robotjs";

export const drawCircle = (curX: number, curY: number, radius: number): void => {
  mouseToggle('down');
  for (let i = 0; i <= Math.PI * 2; i += 0.05) {
    // Convert polar coordinates to cartesian
    const x = curX - (radius * Math.cos(i)) + radius;
    const y = curY - (radius * Math.sin(i));
    robot.dragMouse(x, y);
  }
  mouseToggle('up')
};

export const drawLine = (curX: number, curY: number, x: number, y: number): void => {
  const p = Math.sqrt(x ** 2 + y ** 2);

  for (let i = 0; i <= p; i += 5) {
    const xOffset = Math.sqrt(i ** 2 - (y * i / p) ** 2);
    const yOffset = Math.sqrt(i ** 2 - (x * i / p) ** 2);
    const xDraw = x > 0 ? curX + xOffset : curX - xOffset;
    const yDraw = y > 0 ? curY + yOffset : curY - yOffset;
    robot.dragMouse(xDraw, yDraw);
  }
};

export const drawRectangle = (curX: number, curY: number, x: number, y: number): void => {
  mouseToggle('down');
  drawLine(curX, curY, x, 0);
  drawLine(curX+x, curY, 0, y);
  drawLine(curX+x, curY+y, -x, 0);
  drawLine(curX, curY+y, 0, -y);
  mouseToggle('up');
}
