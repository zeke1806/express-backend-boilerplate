import { ApolloContext } from '../../apollo-server/context';
import { MutationDelCategoryArgs } from '../../sdl.types';

export const delCategory = async (
    _: undefined,
    { id }: MutationDelCategoryArgs,
    { dataSources }: ApolloContext,
): Promise<boolean> => {
    await dataSources.productService.delByCategoryId(parseInt(id));
    const deletedCategory = await dataSources.categoryService.del(parseInt(id));
    return deletedCategory ? true : false;
};
