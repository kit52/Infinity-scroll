import { classNames } from 'shared/lib/classNames/classNames';
import s from './PostList.module.scss';
import { memo } from 'react';
import { IPost } from '../../model/types/post';
import { Post } from '../Post/Post';
import { Virtuoso } from 'react-virtuoso';
interface PostListProps {
  className?: string;
  posts: Array<IPost>;
  loadMorePosts: () => void;
}
const renderPosts = (index: number, post: IPost) => {
  return (
    <Post
      post={post}
      collapsed={true}
      number={index}
      key={post.id}
      detailLink={true}
    />
  );
};
export const PostList = memo(
  ({ className, posts, loadMorePosts }: PostListProps) => (
    <div className={classNames(s.postList, {}, [className])}>
      <Virtuoso
        style={{ height: '600px' }}
        data={posts}
        itemContent={renderPosts}
        endReached={loadMorePosts}
      />
    </div>
  )
);
