/* eslint-disable @typescript-eslint/no-non-null-assertion */
import Head from 'next/head';
import Link from 'next/link';
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { MainContainer } from '../../components/MainContainer';
import { Pagination } from '../../components/Pagination';
import { PostCard } from '../../components/PostCard';
import { SITE_NAME } from '../../config/app-config';
import { PaginationData } from '../../domain/pagination';
import { PostData } from '../../domain/posts/post';
import { Container, Category, AllPostsLink } from './styles';

export type HomePageProps = {
  posts: PostData[];
  category?: string;
  pagination?: PaginationData;
};

export default function HomePage({
  posts,
  category,
  pagination,
}: HomePageProps) {
  return (
    <>
      <Head>
        <title>
          {category ? `${category} - ${SITE_NAME}` : SITE_NAME}
          {pagination?.nextPage && ` - Página ${pagination.nextPage - 1}`}
        </title>
        <meta name="description" content="Blog pessoal" />
      </Head>
      <Header />
      {category && (
        <Category>
          Categoria: <span>{category}</span>
        </Category>
      )}
      <MainContainer>
        <Container>
          {posts.map((post) => (
            <PostCard
              key={post.slug}
              cover={post.cover.formats.small.url}
              title={post.title}
              slug={post.slug}
            />
          ))}
        </Container>
        <Pagination {...pagination!} />
        {!pagination?.nextPage && (
          <Link href="/post/page/1" passHref>
            <AllPostsLink>Ver todos os posts</AllPostsLink>
          </Link>
        )}
      </MainContainer>
      <Footer />
    </>
  );
}
