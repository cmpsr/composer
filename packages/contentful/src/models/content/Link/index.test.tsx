import React from 'react';
import Link from '.';
import { render } from '@testing-library/react';

describe('Link', () => {
  // Use require instead of import because ES imports are readonly and the typescript compiler
  // complains when we try to override `default`.
  const renderFromComponentMap = require('utils/renderFromComponentMap');
  const mockRenderFromComponentMap = jest.fn();
  renderFromComponentMap.default = mockRenderFromComponentMap;
  afterEach(() => mockRenderFromComponentMap.mockReset());
  const defaultProps = {
    sys: {
      id: 'id',
    },
    asset: {
      contentType: 'image',
      title: 'image',
      url: '/image',
    },
    title: 'title',
    route: {
      slug: '/',
    },
    type: 'image',
    embeddedType: 'primary-button',
    style: {},
    url: '/url',
    isEmbedded: true,
  };
  it('should call renderFromComponentMap with appropriate components map', () => {
    render(<Link {...defaultProps} />);
    expect(mockRenderFromComponentMap).toBeCalledTimes(1);
    const componentMap = mockRenderFromComponentMap.mock.calls[0][0];
    expect(Object.keys(componentMap).length).toBe(5);
    expect(componentMap['default']).not.toBeNull();
    expect(componentMap['text']).not.toBeNull();
    expect(componentMap['image']).not.toBeNull();
    expect(componentMap['primary-button']).not.toBeNull();
    expect(componentMap['secondary-button']).not.toBeNull();
  });
  it('should call renderFromComponentMap with type if not embedded', () => {
    const props = { ...defaultProps, isEmbedded: false };
    render(<Link {...props} />);
    expect(mockRenderFromComponentMap).toBeCalledTimes(1);
    const type = mockRenderFromComponentMap.mock.calls[0][1];
    expect(type).toBe('image');
  });
  it('should call renderFromComponentMap with embeddedType if embedded', () => {
    render(<Link {...defaultProps} />);
    expect(mockRenderFromComponentMap).toBeCalledTimes(1);
    const type = mockRenderFromComponentMap.mock.calls[0][1];
    expect(type).toBe('primary-button');
  });
});
