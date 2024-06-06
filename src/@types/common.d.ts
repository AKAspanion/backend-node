import { RequestHandler, Router } from 'express';

export type RouterMap = { [key: string]: Router };

export type AppMiddleware = RequestHandler;
