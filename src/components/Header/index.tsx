import Link from 'next/link';
import { SITE_NAME } from '../../config/app-config';
import { Container } from './styled';

export const Header = () => {
  return (
    <Container>
      <Link className="addHover" href="/">
        {SITE_NAME}
      </Link>
    </Container>
  );
};
