import {Duplex} from "stream";

export const getData = async (stream: Duplex): Promise<string> => {
  let data = '';

  try {
    let chunk = '';
    while ((chunk = stream.read()) !== null) {
      data += chunk;
    }
  } catch (err) {
    if (err instanceof Error) {
      console.error(`There is an error while reading from front: ${err.message}`)
    }
  }

  return data;
};