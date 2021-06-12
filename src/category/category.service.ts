import { CategoryModel, Prisma } from '@prisma/client';
import { DataSource } from 'apollo-datasource';
import { DBClient } from '../libs/prisma';
import { CreateCategoryInput, UpdateCategoryInput } from '../sdl.types';

export class CategoryService extends DataSource {
    categoryModel: Prisma.CategoryModelDelegate<Prisma.RejectOnNotFound | Prisma.RejectPerOperation | undefined>;
    context: any;

    constructor() {
        super();
        this.categoryModel = DBClient.getInstance().prisma.categoryModel;
    }

    async count({ filterByName }: { filterByName?: string }): Promise<number> {
        return this.categoryModel.count({
            where: {
                name: {
                    contains: filterByName,
                },
            },
        });
    }

    async findUnique({ id }: { id: number }): Promise<CategoryModel | null> {
        return this.categoryModel.findUnique({
            where: {
                id,
            },
        });
    }

    async findMany({
        take,
        skip,
        filterByName,
    }: {
        take: number;
        skip: number;
        filterByName?: string;
    }): Promise<CategoryModel[]> {
        return this.categoryModel.findMany({
            take,
            skip,
            where: {
                name: {
                    contains: filterByName,
                },
            },
            orderBy: {
                id: 'desc',
            },
        });
    }

    async create({ name }: CreateCategoryInput): Promise<Prisma.Prisma__CategoryModelClient<CategoryModel>> {
        return this.categoryModel.create({
            data: {
                name: name,
            },
        });
    }

    async del(id: number): Promise<Prisma.Prisma__CategoryModelClient<CategoryModel>> {
        return this.categoryModel.delete({
            where: {
                id,
            },
        });
    }

    async udpate({ id, name }: UpdateCategoryInput): Promise<Prisma.Prisma__CategoryModelClient<CategoryModel>> {
        return this.categoryModel.update({
            where: {
                id,
            },
            data: {
                name: name,
            },
        });
    }
}
