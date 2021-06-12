import { Express } from 'express';
import { express as voyagerMiddleware } from 'graphql-voyager/middleware';
import { graphqlUploadExpress } from 'graphql-upload';
import { UPLOADS_PATH } from '../configs';
import compression from 'compression';
import cors from 'cors';
import express from 'express';

// import { validateTokenMiddleware } from './validateToken';

export function applyMiddlewares(app: Express): Express {
    app.use(cors());
    app.use(compression());
    app.use('/voyager', voyagerMiddleware({ endpointUrl: '/graphql' }));
    app.use(graphqlUploadExpress({ maxFileSize: 1000000000, maxFiles: 10 }));
    app.use('/static', express.static(UPLOADS_PATH));
    // app.use(validateTokenMiddleware);
    return app;
}
