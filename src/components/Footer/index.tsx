import Link from 'next/link';
import { SITE_NAME } from '../../config/app-config';
import { Container } from './styled';

export const Footer = () => {
  return <Container>{SITE_NAME} - Ruan Mello</Container>;
};
