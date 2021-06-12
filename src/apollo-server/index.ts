import { ApolloServer } from 'apollo-server-express';
import { dataSources } from './dataSources';
import { resolvers } from './resolvers';
import { typeDefs } from './typeDefs';
import depthLimit from 'graphql-depth-limit';

export const apolloServer = new ApolloServer({
    typeDefs,
    resolvers,
    dataSources,
    uploads: false,
    validationRules: [depthLimit(7)],
    context: ({ req, res }) => ({ req, res }),
});
