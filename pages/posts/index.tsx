import { fetchAllPosts } from '../../lib/posts-api';

export async function getStaticProps() {

  return {
    props: { posts: [ ...fetchAllPosts() ] }
  }
}

// TODO: Refactor post tiles (don't forget to split categories right @_@)

const PostList = ({ posts }) => {
  return (
    <>
      <h1>Post List</h1>
      <section>
        {posts.map(post => (
          <article key={post.title}>
            <header>
              <h2>{post.title}</h2>
              <span>{post.date}</span>
            </header>
            <p>{post.description}</p>
            <span>{posts.categories}</span>
          </article>
        ))}
      </section>
    </>
  )
}

export default PostList;