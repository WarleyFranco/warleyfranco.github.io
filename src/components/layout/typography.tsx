import Link from 'next/link';
import { FunctionComponent } from 'react';
import styles from './typography.module.scss';

const Anchor: FunctionComponent = ({ children, ...props }): JSX.Element => {
  return (
    <a {...props} className={styles.anchor}>
      {children}
    </a>
  );
};

const PostTitle: FunctionComponent<{
  children: string;
  postLink?: string;
  locale?: string;
}> = ({ children, postLink = '', locale = '' }): JSX.Element => (
  <h2 className={`text-gray-700 font-semibold text-3xl`}>
    {postLink && locale ? (
      <Link href={postLink} locale={locale}>
        <a>{children}</a>
      </Link>
    ) : (
      <span>{children}</span>
    )}
  </h2>
);

const PageTitle = ({ children, center }: {
  children: string;
  center?: boolean;
}) => (
  <h1
    className={`text-gray-700 text-6xl font-sans font-bold ${center ? 'text-center' : 'text-left'} tracking-wider`}
  >
    {children}
  </h1>
);

export { Anchor, PageTitle, PostTitle };
