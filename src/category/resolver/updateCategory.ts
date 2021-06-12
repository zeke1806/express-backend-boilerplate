import { MutationUpdateCategoryArgs, UpdateCategoryResult } from '../../sdl.types';
import { mapCategory, mapCategoryAlreadyExist } from '../../utils/mapModelSchema';
import { ApolloContext } from '../../apollo-server/context';

export const updateCategory = async (
    _: undefined,
    { input }: MutationUpdateCategoryArgs,
    { dataSources }: ApolloContext,
): Promise<UpdateCategoryResult> => {
    const isExist =
        (await dataSources.categoryService.count({
            filterByName: input.name,
        })) > 0;
    if (isExist) return mapCategoryAlreadyExist();
    const udpatedCategory = await dataSources.categoryService.udpate(input);
    return mapCategory(udpatedCategory, dataSources);
};
