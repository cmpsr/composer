import { GetServerSidePropsContext } from 'next';
import { COOKIES_PAGE_KEY } from '../constants';

export const getVisitedPageIdFromCookies = (
  context: GetServerSidePropsContext,
  route: string
): { modelData: any; pageId: string } | undefined =>
  context.req.cookies[COOKIES_PAGE_KEY + route] && JSON.parse(context.req.cookies[COOKIES_PAGE_KEY + route]);
