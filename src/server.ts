import 'dotenv/config';

import { applyMiddlewares } from './middlewares';
import { DBClient } from './libs/prisma';
import { createServer } from 'http';
import { apolloServer } from './apollo-server';
import { PORT } from './configs';
import express from 'express';

const app = express();

applyMiddlewares(app);
apolloServer.applyMiddleware({ app, path: '/graphql' });

const httpServer = createServer(app);
const bootstrapServer = async () => {
    await httpServer.listen({ port: PORT }, (): void =>
        console.log(`GraphQL is now running on http://localhost:${PORT}/graphql`),
    );
};
bootstrapServer().finally(() => {
    DBClient.getInstance().prisma.$disconnect();
});
