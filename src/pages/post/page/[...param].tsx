import { count } from 'console';
import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import { ParsedUrlQuery } from 'querystring';
import HomePage from '../../../containers/HomePage';
import { countAllPosts } from '../../../data/posts/count-all-posts';
import { getAllPosts } from '../../../data/posts/get-all-posts';
import { PaginationData } from '../../../domain/pagination';
import { PostData } from '../../../domain/posts/post';

export type PageProps = {
  posts: PostData[];
  category?: string;
  pagination: PaginationData;
};

export default function Page({ posts, category, pagination }: PageProps) {
  const router = useRouter();

  if (router.isFallback) return <div>Carregando...</div>;
  if (!posts.length) return <div>Página não encontrada.</div>;

  return <HomePage posts={posts} category={category} pagination={pagination} />;
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  let startFrom = 0;
  const postsPerPage = 6;
  let nextPage = 0;
  let previousPage = 0;
  let category = '';
  let categoryQuery = '';

  if (ctx.params && typeof ctx.params.param !== 'undefined') {
    const page = Number(ctx.params.param[0]);
    category = ctx.params.param[1] || '';
    startFrom = (page - 1) * postsPerPage;
    nextPage = page + 1;
    previousPage = page - 1;
    categoryQuery = category ? `&category.name_contains=${category}` : '';
  }

  const urlQuery = `_sort=id:desc&_start=${startFrom}&_limit=${postsPerPage}${categoryQuery}`;
  const posts = await getAllPosts(urlQuery);
  const numberOfPosts = Number(await countAllPosts(categoryQuery));

  const pagination: PaginationData = {
    nextPage,
    previousPage,
    numberOfPosts,
    postsPerPage,
    category,
  };

  return {
    props: { posts, pagination, category },
  };
};
