import { ApolloContext } from '../../apollo-server/context';
import { Category, QueryCategoryArgs } from '../../sdl.types';
import { mapCategory } from '../../utils/mapModelSchema';

export const category = async (
    _: undefined,
    { id }: QueryCategoryArgs,
    { dataSources }: ApolloContext,
): Promise<Category | null> => {
    const { categoryService } = dataSources;
    const result = await categoryService.findUnique({ id: Number(id) });
    if (!result) return null;
    return mapCategory(result, dataSources);
};
