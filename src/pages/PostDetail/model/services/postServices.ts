import { IPost } from '/entities/Post/model/types/post';
import { api } from 'shared/api/api';

export const postByIdApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getPost: builder.query<IPost, string>({
      query: (id: string) => ({
        url: `/posts/${id}`,
      }),
    }),
  }),
});
export const { useGetPostQuery } = postByIdApi;
