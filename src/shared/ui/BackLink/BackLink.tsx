import s from './BackLink.module.scss';
import { useNavigate } from 'react-router-dom';

import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';

interface BackLinkProps {
  className?: string;
}
export const BackLink = memo(({ className }: BackLinkProps) => {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  return (
    <button
      className={classNames(s.backLink, {}, [className])}
      onClick={goBack}
    >
      <span>🡰 </span>
      назад
    </button>
  );
});
