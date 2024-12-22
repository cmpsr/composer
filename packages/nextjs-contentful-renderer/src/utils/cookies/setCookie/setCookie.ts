import { GetServerSidePropsContext } from 'next';
import { serialize, CookieSerializeOptions } from 'cookie';
import { COOKIES_PAGE_KEY, COOKIES_PAGE_MAX_AGE } from '../constants';

export const setCookie = (
  context: GetServerSidePropsContext,
  name: string,
  value: unknown,
  options: CookieSerializeOptions = {
    maxAge: COOKIES_PAGE_MAX_AGE,
  },
) => {
  const stringValue = typeof value === 'object' ? JSON.stringify(value) : String(value);
  context.res.setHeader('Set-Cookie', serialize(COOKIES_PAGE_KEY + name, stringValue, options));
};
