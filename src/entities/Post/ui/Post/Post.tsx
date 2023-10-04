import { Mods, classNames } from 'shared/lib/classNames/classNames';
import s from './Post.module.scss';
import { memo } from 'react';
import { IPost } from '../../model/types/post';
import { Link } from 'react-router-dom';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';

interface PostProps {
  className?: string;
  post: IPost;
  number?: number;
  collapsed?: boolean;
  detailLink?: boolean;
}
export const Post = memo(
  ({ className, post, number, collapsed, detailLink }: PostProps) => {
    const mods: Mods = {
      [s.collapsed]: collapsed,
    };
    return (
      <div className={classNames(s.post, {}, [className])}>
        <div className={s.post__title}>
          {number && number + '.'}
          {post.title}
        </div>
        <div className={classNames(s.post__desc, mods, [])}>{post.body}</div>
        {detailLink && (
          <Link to={RoutePath.posts_detail + post.id}>Просмотр</Link>
        )}
      </div>
    );
  }
);
