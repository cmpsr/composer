import { getThemeByPageId } from 'src/utils/contentful/getThemeByPageId';
import { getApolloClient } from 'src/utils/getApolloClient';

export const getTheme = (pageId: string, preview: boolean) => {
  const apolloClient = getApolloClient({ preview });
  return getThemeByPageId(apolloClient, pageId, preview);
};
