import { GetServerSidePropsContext } from 'next';
import { COOKIES_PAGE_KEY } from '../constants';

export const getVisitedPageIdFromCookies = (context: GetServerSidePropsContext, route: string): string | undefined =>
  context.req.cookies[COOKIES_PAGE_KEY + route];
