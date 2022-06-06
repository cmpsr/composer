import React, { Children, FC } from 'react';

function isFunctionComponent(component: FC<any>) {
  return (
    typeof component === 'function' &&
    (String(component).includes('_jsxRuntime.jsx') ||
      String(component).includes('return _react.default.createElement') ||
      String(component).includes('return React.createElement'))
  );
}

const isStyledComponent = (component: { withComponent: () => any }) =>
  component.hasOwnProperty('__emotion_base') ||
  (component.hasOwnProperty('withComponent') && typeof component.withComponent === 'function');

const isHook = (component: { name?: string; displayName?: string }, componentKey?: string) => {
  const name = component.name || component.displayName || componentKey || '';
  return name.startsWith('use');
};

export const isValidComponent = (component: any, componentName: string) => {
  return (
    !isHook(component, componentName) &&
    (isStyledComponent(component) || isFunctionComponent(component?.render || component))
  );
};

export const withCleanedChildren = (Component: FC<any>) => {
  return ({ children, ...props }) => {
    const cleanedChildren = Children.map(children, (child) => {
      if (child.type === 'p') {
        return child.props.children;
      }

      return child;
    });

    return <Component {...props}>{cleanedChildren}</Component>;
  };
};
