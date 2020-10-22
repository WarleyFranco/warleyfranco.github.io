import { useRouter } from 'next/router';

// TODO: Create single default post layout

const Post = () => {
  const router = useRouter();
  return (
    <h1>Slug: {router.query.post}</h1>
  )
}

export default Post;