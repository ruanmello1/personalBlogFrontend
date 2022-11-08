import Link from 'next/link';
import { PaginationData } from '../../domain/pagination';
import { Container, NextLink, PreviousLink } from './styled';

export type PaginationProps = PaginationData;

export const Pagination = ({
  nextPage,
  numberOfPosts,
  category,
  previousPage,
  postsPerPage,
}: PaginationProps) => {
  const categoryName = category || '';
  const nextLink = `/post/page/${nextPage}/${categoryName}`;
  const previousLink = `/post/page/${previousPage}/${categoryName}`;
  const hasNextPage = nextPage * postsPerPage < postsPerPage + numberOfPosts;
  const hasPreviousPage = previousPage >= 1;
  return (
    <Container>
      {hasPreviousPage && (
        <PreviousLink>
          <Link href={previousLink}>Previous</Link>
        </PreviousLink>
      )}

      {hasNextPage && (
        <NextLink>
          <Link href={nextLink}>
            <span>Next</span>
          </Link>
        </NextLink>
      )}
    </Container>
  );
};
