import Link from 'next/link';
import { Date } from '../Date';
import { Container } from './styled';

export type PostDetailsProps = {
  date: string;
  author: string;
  category: string;
};

export const PostDetails = ({ author, category, date }: PostDetailsProps) => {
  return (
    <Container>
      Publicado em{' '}
      <span>
        <Date date={date} />
      </span>
      por {author} | <span></span>
      <Link href={`/post/page/1/${category.toLowerCase()}`}>{category}</Link>
    </Container>
  );
};
