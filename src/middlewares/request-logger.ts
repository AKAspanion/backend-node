import { AppMiddleware } from '../@types/common';
import { accessLogger } from '@utils/logger';

const requestLogger: AppMiddleware = (req, res, next) => {
  accessLogger.info(
    `[${req.method}] [${req.path}] [${req.socket.remoteAddress}] [${JSON.stringify(req.body ?? req.query ?? {})}]`,
  );

  res.on('finish', () => {
    accessLogger.info(
      `[${req.method}] [${req.path}] [${req.socket.remoteAddress}] [${res.statusCode}]`,
    );
  });

  next();
};

export default requestLogger;
