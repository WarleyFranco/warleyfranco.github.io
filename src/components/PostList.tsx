import Link from 'next/link'

const PostListItem = ({ post }) => {
  return (
    <>
      <Link href={`/posts/${post.slug}`}>
        <article>
          <header>
            <h2>{post.title}</h2>
            <span>{post.date}</span>
          </header>
          <p>{post.description}</p>
          <span>{post.categories}</span>
        </article>
      </Link>
    </>
  )
}

const PostList = ({ posts, language }) => {
  return posts
    .filter((post) => post.language.toLowerCase() === language.toLowerCase())
    .map((post) => <PostListItem post={post} key={post.title} />)
}

export default PostList
