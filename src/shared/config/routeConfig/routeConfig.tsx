import { RouteProps } from 'react-router-dom';
import { PostsPage } from 'pages/PostsPage';
import { PostDetail } from 'pages/PostDetail';
import { NotFoundPage } from 'pages/NotFoundPage';
export type AppRoutesProps = RouteProps & {
  authOnly?: boolean;
};

export enum AppRoutes {
  POSTS = 'posts',
  POSTS_DETAIL = 'posts_detail',
  NOT_FOUND = 'not_found',
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.POSTS]: '/',
  [AppRoutes.POSTS_DETAIL]: '/posts/',
  [AppRoutes.NOT_FOUND]: '*',
};

export const routeConfig: Record<AppRoutes, AppRoutesProps> = {
  [AppRoutes.POSTS]: {
    path: RoutePath.posts,
    element: <PostsPage />,
  },
  [AppRoutes.POSTS_DETAIL]: {
    path: `${RoutePath.posts_detail}:id`,
    element: <PostDetail />,
  },
  [AppRoutes.NOT_FOUND]: {
    path: RoutePath.not_found,
    element: <NotFoundPage />,
  },
};
