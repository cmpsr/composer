import React from 'react';
import cn from 'classnames';
import { StyledCssProps } from 'components/Components.styled.types';
import styled, { AnyStyledComponent } from 'styled-components';

const customCss = (Component: AnyStyledComponent): AnyStyledComponent => styled(
  Component
)<StyledCssProps>`
  ${(props) => (props.css ? `&.custom {${props.css}}` : '')}
`;

export const withCustomCss = <P extends StyledCssProps>(
  Component: AnyStyledComponent
): React.ComponentType<P> =>
  class WithCustomClassName extends React.Component<P> {
    render() {
      const StyledCssComponent = customCss(Component as any);
      const className = cn(this.props.className, {
        custom: this.props.css,
      });
      return <StyledCssComponent {...this.props} className={className} />;
    }
  };
