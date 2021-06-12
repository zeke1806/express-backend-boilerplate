import { ApolloContext } from '../../apollo-server/context';
import { CreateCategoryResult, MutationCreateCategoryArgs } from '../../sdl.types';
import { mapCategory, mapCategoryAlreadyExist } from '../../utils/mapModelSchema';

export const createCategory = async (
    _: undefined,
    { input }: MutationCreateCategoryArgs,
    { dataSources }: ApolloContext,
): Promise<CreateCategoryResult> => {
    const isExist = await dataSources.categoryService.count({
        filterByName: input.name,
    });
    if (isExist !== 0) return mapCategoryAlreadyExist();
    const result = await dataSources.categoryService.create(input);
    return mapCategory(result, dataSources);
};
