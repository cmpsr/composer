import React from 'react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { Section } from './Section';
import { SECTION_DEFAULT_TEST_ID } from '../../containers/Section';

describe('Section', () => {
  const children = {
    title: <div>test title</div>,
    subtitle: <div>test subtitle</div>,
    content: <div>test-content</div>,
  };

  it('should match snapshot', () => {
    const section = renderer.create(
      <Section className="foo" children={children} />,
    );
    const tree = section.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('Should render section component', () => {
    const { getByTestId } = render(
      <Section className="foo" children={children} />,
    );
    const section = getByTestId(SECTION_DEFAULT_TEST_ID);
    expect(section.classList).toContain('foo');
  });
  it('should render component with test title', () => {
    const children = {
      title: <div>test title</div>,
    };

    const { getByText } = render(
      <Section className="foo" children={children} />,
    );
    const box = getByText('test title');
    expect(box).toBeInTheDocument();
  });
  it('should render component with subtitle', () => {
    const children = {
      subtitle: <div>subtitle test</div>,
    };

    const { getByText } = render(
      <Section className="foo" children={children} />,
    );
    const box = getByText('subtitle test');
    expect(box).toBeInTheDocument();
  });
  it('should render component with content', () => {
    const children = {
      content: <div>content test</div>,
    };

    const { getByText } = render(
      <Section className="foo" children={children} />,
    );
    const box = getByText('content test');
    expect(box).toBeInTheDocument();
  });
});
