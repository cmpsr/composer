"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FAKE_LINK = exports.FAKE_LINK_STYLE = exports.FAKE_ROUTE = exports.FAKE_SYS = exports.FAKE_ASSET = void 0;
const FAKE_ASSET = {
  contentType: 'image',
  title: 'fake asset title',
  url: 'impulsum.vc'
};
exports.FAKE_ASSET = FAKE_ASSET;
const FAKE_SYS = {
  id: 'fake sys id'
};
exports.FAKE_SYS = FAKE_SYS;
const FAKE_ROUTE = {
  slug: '/'
};
exports.FAKE_ROUTE = FAKE_ROUTE;
const FAKE_LINK_STYLE = {
  background: {
    default: {
      bg: 'fill-primary-900'
    }
  }
};
exports.FAKE_LINK_STYLE = FAKE_LINK_STYLE;
const FAKE_LINK = {
  __typename: 'Link',
  sys: FAKE_SYS,
  asset: FAKE_ASSET,
  title: 'fake link title',
  type: 'text',
  embeddedType: null,
  route: null,
  style: FAKE_LINK_STYLE,
  url: 'impulsum.vc'
};
exports.FAKE_LINK = FAKE_LINK;