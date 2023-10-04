import { PostList } from 'entities/Post/ui/PostList/PostList';
import React, { useEffect, useState } from 'react';
import { useGetPostsQuery } from '../model/services/postsServices';
import { useCallback } from 'react';
import { IPost } from 'entities/Post';

const PostsPage = () => {
  const [page, setPage] = useState(1);
  const { isLoading, isError, isFetching, data } = useGetPostsQuery(page);
  const [posts, setPosts] = useState<IPost[]>([]);
  const loadMorePosts = useCallback(() => {
    setPage((prev) => prev + 1);
  }, [page]);
  useEffect(() => {
    if (data) {
      setPosts((prevPosts) => [...prevPosts, ...data]);
    }
  }, [data]);
  if (isLoading && !isFetching) {
    return <div>Loading...</div>;
  }

  if (isError || !data) {
    return <div>Error loading posts</div>;
  }
  return (
    <div style={{ width: '100%' }}>
      <h1>Post list</h1>

      <PostList posts={posts} loadMorePosts={loadMorePosts} />
    </div>
  );
};

export default PostsPage;
