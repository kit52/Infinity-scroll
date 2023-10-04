import React, { useState } from 'react';
import { useGetPostQuery } from '../model/services/postServices';
import { useParams } from 'react-router-dom';

import { Loader } from 'shared/ui/Loader/Loader';
import { Post } from 'entities/Post';
import { IPost } from '../../../entities/Post/model/types/post';
import { BackLink } from 'shared/ui/BackLink/BackLink';

const PostDetail = () => {
  const { id } = useParams();
  const { data: post, isLoading, isError } = useGetPostQuery('1');

  if (isLoading) {
    return (
      <div>
        <Loader />
      </div>
    );
  }

  if (isError || !post) {
    return <div>Error loading posts</div>;
  }

  return (
    <div style={{ width: '100%' }}>
      <h1 style={{ marginBottom: '20px' }}>Деталка поста</h1>
      <BackLink />
      <Post post={post} />
    </div>
  );
};

export default PostDetail;
