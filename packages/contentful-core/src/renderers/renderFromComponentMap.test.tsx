import React, { ReactElement } from 'react';
import { render } from '@testing-library/react';

import { renderFromComponentMap } from '.';

const FAKE_ITEM1 = 'Fake Item 1 Text';
const FAKE_ITEM2 = 'Fake Item 2 Text';
const DEFAULT_ITEM = 'Default Item Text';

describe('renderFromComponentMap', () => {
  const componentMap = {
    type1: (): ReactElement => <div>{FAKE_ITEM1}</div>,
    type2: (): ReactElement => <div>{FAKE_ITEM2}</div>,
    default: (): ReactElement => <div>{DEFAULT_ITEM}</div>,
  };

  it('returns the correct entry type, type1', () => {
    const { getByText } = render(renderFromComponentMap(componentMap, 'type1'));
    getByText(FAKE_ITEM1);
  });

  it('returns the correct entry type, type2', () => {
    const { getByText } = render(renderFromComponentMap(componentMap, 'type2'));
    getByText(FAKE_ITEM2);
  });

  it('returns the default type if type cannot be found', () => {
    const { getByText } = render(renderFromComponentMap(componentMap, 'type3'));
    getByText(DEFAULT_ITEM);
  });

  it('returns the default type if type is null', () => {
    const { getByText } = render(renderFromComponentMap(componentMap, null));
    getByText(DEFAULT_ITEM);
  });
});
