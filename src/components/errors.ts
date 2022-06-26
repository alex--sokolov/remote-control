import { IApiErrors } from '../interfaces';

export const apiErrors: IApiErrors = {
  Ok: {
    code: 200,
    text: 'Ok',
    contentType: 'text/html',
  },
  NotFound: {
    code: 404,
    text: 'Not Found',
    contentType: 'application/json',
  },
  ServerError: {
    code: 500,
    text: 'Server error',
    contentType: 'application/json',
  },
};
