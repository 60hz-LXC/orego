import { Readable } from 'stream';
import formidable from 'formidable';

export const parseForm = async (req) => {
  const form = new formidable.IncomingForm();

  // Convert the request to a readable stream
  const stream = new Readable();
  stream._read = () => {};
  stream.push(await req.arrayBuffer());
  stream.push(null);

  return new Promise((resolve, reject) => {
    form.parse(stream, (err, fields, files) => {
      if (err) {
        reject(err);
      } else {
        resolve({ fields, files });
      }
    });
  });
};