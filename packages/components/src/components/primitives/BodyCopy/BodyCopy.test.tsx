import React from 'react';
import { render } from '@testing-library/react';
import { BodyCopy } from './BodyCopy';
import { TYPOGRAPHY_DEFAULT_TEST_ID } from '../Typography';
import {
  PARAGRAPH,
  HEADING_COPY,
  HEADING_1,
  HEADING_2,
  HEADING_3,
  HEADING_4,
  HEADING_5,
  HEADING_6,
  LIST,
  LIST_ITEM_1,
  LIST_ITEM_2,
  LIST_ITEM_3,
  LIST_ITEM_4,
  LINK,
  OL_LIST,
  CODE,
} from './constants';
import { LINK_DEFAULT_TEST_ID } from '../Link';
import { CODE_RENDERER_DEFAULT_TEST_ID } from './renderers';

describe('Button', () => {
  it('should render a paragraph', () => {
    const { getByText, getByTestId } = render(
      <BodyCopy copy={PARAGRAPH} style={{}} />,
    );
    const bodyCopy = getByText(PARAGRAPH);
    expect(bodyCopy).toBeInTheDocument();
    const typography = getByTestId(TYPOGRAPHY_DEFAULT_TEST_ID);
    expect(typography).toBeInTheDocument();
    expect(typography.tagName).toEqual('P');
  });
  it('should render a link', () => {
    const { getByTestId } = render(<BodyCopy copy={LINK} style={{}} />);
    const link = getByTestId(LINK_DEFAULT_TEST_ID);
    expect(link).toBeInTheDocument();
    expect(link.tagName).toEqual('A');
  });
  it('should render a headline-1', () => {
    const { getByText, getByTestId } = render(
      <BodyCopy copy={HEADING_1} style={{}} />,
    );
    const bodyCopy = getByText(HEADING_COPY);
    expect(bodyCopy).toBeInTheDocument();
    const typography = getByTestId(TYPOGRAPHY_DEFAULT_TEST_ID);
    expect(typography).toBeInTheDocument();
    expect(typography.tagName).toEqual('H1');
  });
  it('should render a headline-2', () => {
    const { getByText, getByTestId } = render(
      <BodyCopy copy={HEADING_2} style={{}} />,
    );
    const bodyCopy = getByText(HEADING_COPY);
    expect(bodyCopy).toBeInTheDocument();
    const typography = getByTestId(TYPOGRAPHY_DEFAULT_TEST_ID);
    expect(typography).toBeInTheDocument();
    expect(typography.tagName).toEqual('H2');
  });
  it('should render a headline-3', () => {
    const { getByText, getByTestId } = render(
      <BodyCopy copy={HEADING_3} style={{}} />,
    );
    const bodyCopy = getByText(HEADING_COPY);
    expect(bodyCopy).toBeInTheDocument();
    const typography = getByTestId(TYPOGRAPHY_DEFAULT_TEST_ID);
    expect(typography).toBeInTheDocument();
    expect(typography.tagName).toEqual('H3');
  });
  it('should render a headline-4', () => {
    const { getByText, getByTestId } = render(
      <BodyCopy copy={HEADING_4} style={{}} />,
    );
    const bodyCopy = getByText(HEADING_COPY);
    expect(bodyCopy).toBeInTheDocument();
    const typography = getByTestId(TYPOGRAPHY_DEFAULT_TEST_ID);
    expect(typography).toBeInTheDocument();
    expect(typography.tagName).toEqual('H4');
  });
  it('should render a headline-5', () => {
    const { getByText, getByTestId } = render(
      <BodyCopy copy={HEADING_5} style={{}} />,
    );
    const bodyCopy = getByText(HEADING_COPY);
    expect(bodyCopy).toBeInTheDocument();
    const typography = getByTestId(TYPOGRAPHY_DEFAULT_TEST_ID);
    expect(typography).toBeInTheDocument();
    expect(typography.tagName).toEqual('H5');
  });
  it('should render a headline-6', () => {
    const { getByText, getByTestId } = render(
      <BodyCopy copy={HEADING_6} style={{}} />,
    );
    const bodyCopy = getByText(HEADING_COPY);
    expect(bodyCopy).toBeInTheDocument();
    const typography = getByTestId(TYPOGRAPHY_DEFAULT_TEST_ID);
    expect(typography).toBeInTheDocument();
    expect(typography.tagName).toEqual('H6');
  });
  it('should render a ul list', () => {
    const { getByText } = render(<BodyCopy copy={LIST} style={{}} />);
    const item1 = getByText(LIST_ITEM_1);
    expect(item1).toBeInTheDocument();
    expect(item1.parentElement.tagName).toEqual('LI');
    expect(item1.parentElement.parentElement.tagName).toEqual('UL');
    const item2 = getByText(LIST_ITEM_2);
    expect(item2).toBeInTheDocument();
    expect(item2.parentElement.tagName).toEqual('LI');
    expect(item2.parentElement.parentElement.tagName).toEqual('UL');
    const item3 = getByText(LIST_ITEM_3);
    expect(item3).toBeInTheDocument();
    expect(item3.parentElement.tagName).toEqual('LI');
    expect(item3.parentElement.parentElement.tagName).toEqual('UL');
    const item4 = getByText(LIST_ITEM_4);
    expect(item4).toBeInTheDocument();
    expect(item4.parentElement.tagName).toEqual('LI');
    expect(item4.parentElement.parentElement.tagName).toEqual('UL');
  });
  it('should render a ol list', () => {
    const { getByText } = render(<BodyCopy copy={OL_LIST} style={{}} />);
    const item1 = getByText(LIST_ITEM_1);
    expect(item1).toBeInTheDocument();
    expect(item1.parentElement.tagName).toEqual('LI');
    expect(item1.parentElement.parentElement.tagName).toEqual('OL');
    const item2 = getByText(LIST_ITEM_2);
    expect(item2).toBeInTheDocument();
    expect(item2.parentElement.tagName).toEqual('LI');
    expect(item2.parentElement.parentElement.tagName).toEqual('OL');
    const item3 = getByText(LIST_ITEM_3);
    expect(item3).toBeInTheDocument();
    expect(item3.parentElement.tagName).toEqual('LI');
    expect(item3.parentElement.parentElement.tagName).toEqual('OL');
    const item4 = getByText(LIST_ITEM_4);
    expect(item4).toBeInTheDocument();
    expect(item4.parentElement.tagName).toEqual('LI');
    expect(item4.parentElement.parentElement.tagName).toEqual('OL');
  });
  it('should render code', () => {
    const { getByTestId } = render(<BodyCopy copy={CODE} style={{}} />);
    const item1 = getByTestId(CODE_RENDERER_DEFAULT_TEST_ID);
    expect(item1).toBeInTheDocument();
    expect(item1.children[0].tagName).toEqual('PRE');
  });
});
