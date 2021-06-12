import { ApolloContext } from '../../apollo-server/context';
import { Categories, QueryCategoriesArgs } from '../../sdl.types';
import { mapCategory } from '../../utils/mapModelSchema';
import { createTotalPages } from '../../utils/paginationHelper';

export const categories = async (
    _: undefined,
    { take, page, filterByName }: QueryCategoriesArgs,
    { dataSources }: ApolloContext,
): Promise<Categories> => {
    const { categoryService } = dataSources;
    const _filterByName = filterByName ? filterByName : undefined;

    const categoryModels = await categoryService.findMany({
        take,
        skip: (page - 1) * take,
        filterByName: _filterByName,
    });
    const total = await categoryService.count({
        filterByName: _filterByName,
    });

    return {
        items: await Promise.all(categoryModels.map((cm) => mapCategory(cm, dataSources))),
        meta: {
            currentPage: page,
            totalItems: total,
            itemsPerPage: take,
            itemCount: categoryModels.length,
            totalPages: createTotalPages({
                totalItems: total,
                take,
            }),
        },
    };
};
