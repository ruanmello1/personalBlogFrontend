import { GetStaticPaths, GetStaticProps } from 'next';
import { countAllPosts } from '../../data/posts/count-all-posts';
import { getAllPosts } from '../../data/posts/get-all-posts';
import { getPost } from '../../data/posts/get-post';
import { ParsedUrlQuery } from 'querystring';
import { PostData } from '../../domain/posts/post';
import { Post } from '../../containers/Post';
import { useRouter } from 'next/router';
import Error from 'next/error';

export type DynamicPostProps = {
  post: PostData;
};

const DynamicPost = ({ post }: DynamicPostProps) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  if (!post?.title) {
    return <Error statusCode={404} />;
  }

  return <Post post={post} />;
};

export default DynamicPost;

export const getStaticPaths: GetStaticPaths = async () => {
  const numberOfPosts = await countAllPosts();
  const posts = await getAllPosts(`_limit=${numberOfPosts}`);
  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      };
    }),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const params = (ctx.params as ParsedUrlQuery).slug!;
  const posts = await getPost(params);
  const post = posts.length > 0 ? posts[0] : {};

  return {
    props: { post: post },
  };
};
