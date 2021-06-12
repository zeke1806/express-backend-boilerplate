import { Prisma, HelloModel } from '@prisma/client';
import { DataSource } from 'apollo-datasource';
import { DBClient } from '../libs/prisma';

export class HelloService extends DataSource {
    helloModel: Prisma.HelloModelDelegate<Prisma.RejectOnNotFound | Prisma.RejectPerOperation | undefined>;
    context: any;

    constructor() {
        super();
        this.helloModel = DBClient.getInstance().prisma.helloModel;
    }

    async findMany(): Promise<HelloModel[]> {
        return this.helloModel.findMany();
    }
}
