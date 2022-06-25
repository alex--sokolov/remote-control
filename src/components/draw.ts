import robot, {mouseToggle} from "robotjs";

export const drawCircle = (curX: number, curY:number, radius:number): void => {
  mouseToggle('down');
  for (let i = 0; i <= Math.PI * 2; i += 0.05) {
    // Convert polar coordinates to cartesian
    const x = curX - (radius * Math.cos(i)) + radius;
    const y = curY - (radius * Math.sin(i));
    robot.dragMouse(x, y);
  }
  mouseToggle('up')
};