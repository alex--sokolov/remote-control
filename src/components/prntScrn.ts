import Jimp from "jimp";
import robot from "robotjs";

export const prntScrn = async (
  x:number,
  y:number,
  w:number,
  h:number
): Promise<string> => {
  const pic = robot.screen.capture(x, y, w, h)
  const width = pic.byteWidth / pic.bytesPerPixel
  const height = pic.height
  const image = new Jimp(width, height)
  let red:number, green:number, blue:number;
  pic.image.forEach((byte:number, i:number) => {
    switch (i % 4) {
      case 0: return blue = byte;
      case 1: return green = byte;
      case 2: return red = byte;
      case 3:
        image.bitmap.data[i - 3] = red;
        image.bitmap.data[i - 2] = green;
        image.bitmap.data[i - 1] = blue;
        image.bitmap.data[i] = 255;
    }
  });

  return (await image.getBase64Async(Jimp.MIME_PNG)).slice(22);
}