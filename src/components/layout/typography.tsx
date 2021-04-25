import Link from 'next/link';

type PostTitleProps = {
  children: string;
  postLink?: string;
  locale?: string;
};

const PostTitle = ({ children, postLink = '', locale = '' }: PostTitleProps): JSX.Element => (
  <h2 className="text-primary-500 font-semibold text-3xl">
    {postLink && locale ? (
      <Link href={postLink} locale={locale}>
        <a className="">{children}</a>
      </Link>
    ) : (
      <span>{children}</span>
    )}
  </h2>
);

type PageTitleProps = {
  children: string;
};

const PageTitle = ({ children }: PageTitleProps): JSX.Element => (
  <h1 className="text-primary text-gray-700 text-5xl font-sans font-bold text-center py-4 tracking-wider">
    {children}
  </h1>
);

export { PageTitle, PostTitle };
