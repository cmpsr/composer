export const FAKE_ASSET = {
  contentType: 'image',
  title: 'fake asset title',
  url: 'impulsum.vc',
};

export const FAKE_SYS = {
  id: 'fake sys id',
};

export const FAKE_ROUTE = {
  slug: '/',
};

export const FAKE_LINK_STYLE = {
  background: {
    default: {
      bg: 'fill-primary-900',
    },
  },
};

export const FAKE_LINK = {
  __typename: 'Link',
  sys: FAKE_SYS,
  asset: FAKE_ASSET,
  title: 'fake link title',
  type: 'text',
  embeddedType: null,
  route: null,
  style: FAKE_LINK_STYLE,
  url: 'impulsum.vc',
};
