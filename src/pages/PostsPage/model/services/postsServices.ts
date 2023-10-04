import { IPost } from 'entities/Post/model/types/post';
import { api } from 'shared/api/api';

export const postsByPageApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getPosts: builder.query<Array<IPost>, number>({
      query: (page: number) => {
        return {
          url: `/posts?_page=${page}&_limit=10`,
        };
      },
    }),
  }),
});
export const { useGetPostsQuery } = postsByPageApi;
