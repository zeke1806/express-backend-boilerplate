import express from 'express';
import { DataSources } from './dataSources';

export interface ApolloContext {
    dataSources: DataSources;
    req: any;
    res: express.Response<any, Record<string, any>>;
}
