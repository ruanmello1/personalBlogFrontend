import { PostData } from '../domain/posts/post';
import { GetStaticProps } from 'next';
import { getAllPosts } from '../data/posts/get-all-posts';
import HomePage from '../containers/HomePage';

export type HomeProps = {
  posts: PostData[];
};

export default function Home({ posts }: HomeProps) {
  return <HomePage posts={posts} />;
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = await getAllPosts('_sort=id:desc&_start=0&_limit=6');

  return {
    props: { posts },
  };
};
