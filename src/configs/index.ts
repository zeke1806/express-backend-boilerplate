import path from 'path';

export const PORT = parseInt(String(process.env.PORT));
export const TOKEN_SECRET = process.env.TOKEN_SECRET;
export const ROOT_PATH = path.resolve(__dirname + '/../..');
export const UPLOADS_PATH = ROOT_PATH + '/uploads';
export const STATIC_URL = 'http://192.168.88.12:3000/static';

export const CLOUD_NAME = process.env.CLOUDINARY_NAME;
export const API_KEY = process.env.CLOUDINARY_API_KEY;
export const API_SECRET = process.env.CLOUDINARY_API_SECRET;
