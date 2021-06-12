import { IResolvers } from 'graphql-tools';
import { GraphQLUpload } from 'graphql-upload';
import { ApolloContext } from '../apollo-server/context';
import { Hello } from '../sdl.types';
import { mapHello } from '../utils/mapModelSchema';

const helloWorld = async (_: unknown, __: unknown, { dataSources }: ApolloContext): Promise<Hello[]> => {
    const result = await dataSources.helloService.findMany();
    return result.map((h) => mapHello(h));
};

export const resolvers: IResolvers = {
    Upload: GraphQLUpload,

    Query: {
        helloWorld,
    },
};
