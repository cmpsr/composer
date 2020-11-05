import { StyledCssProps } from 'components/Components.styled.types';
import styled from 'styled-components';
import { getTheme } from 'utils/getTheme';
import { customCss } from 'utils/customCss';

export const StyledTypography = styled.div<StyledCssProps>`
  &.headline1 {
    letter-spacing: ${(props) =>
      getTheme(props).Typography.sm.letterSpacing.headline1};
    line-height: ${(props) =>
      getTheme(props).Typography.sm.lineHeight.headline1};
    font-weight: ${(props) =>
      getTheme(props).Typography.sm.fontWeight.headline1};
    font-size: ${(props) => getTheme(props).Typography.sm.fontSize.headline1};
    font-family: ${(props) =>
      getTheme(props).Typography.sm.fontFamily.headline1};
    @media (min-width: ${(props) => getTheme(props).breakpoints.md}) {
      letter-spacing: ${(props) =>
        getTheme(props).Typography.md.letterSpacing.headline1};
      line-height: ${(props) =>
        getTheme(props).Typography.md.lineHeight.headline1};
      font-weight: ${(props) =>
        getTheme(props).Typography.md.fontWeight.headline1};
      font-size: ${(props) => getTheme(props).Typography.md.fontSize.headline1};
      font-family: ${(props) =>
        getTheme(props).Typography.md.fontFamily.headline1};
    }
  }
  &.headline2 {
    letter-spacing: ${(props) =>
      getTheme(props).Typography.sm.letterSpacing.headline2};
    line-height: ${(props) =>
      getTheme(props).Typography.sm.lineHeight.headline2};
    font-weight: ${(props) =>
      getTheme(props).Typography.sm.fontWeight.headline2};
    font-size: ${(props) => getTheme(props).Typography.sm.fontSize.headline2};
    font-family: ${(props) =>
      getTheme(props).Typography.sm.fontFamily.headline2};
    @media (min-width: ${(props) => getTheme(props).breakpoints.md}) {
      letter-spacing: ${(props) =>
        getTheme(props).Typography.md.letterSpacing.headline2};
      line-height: ${(props) =>
        getTheme(props).Typography.md.lineHeight.headline2};
      font-weight: ${(props) =>
        getTheme(props).Typography.md.fontWeight.headline2};
      font-size: ${(props) => getTheme(props).Typography.md.fontSize.headline2};
      font-family: ${(props) =>
        getTheme(props).Typography.md.fontFamily.headline2};
    }
  }
  &.headline3 {
    letter-spacing: ${(props) =>
      getTheme(props).Typography.sm.letterSpacing.headline3};
    line-height: ${(props) =>
      getTheme(props).Typography.sm.lineHeight.headline3};
    font-weight: ${(props) =>
      getTheme(props).Typography.sm.fontWeight.headline3};
    font-size: ${(props) => getTheme(props).Typography.sm.fontSize.headline3};
    font-family: ${(props) =>
      getTheme(props).Typography.sm.fontFamily.headline3};
    @media (min-width: ${(props) => getTheme(props).breakpoints.md}) {
      letter-spacing: ${(props) =>
        getTheme(props).Typography.md.letterSpacing.headline3};
      line-height: ${(props) =>
        getTheme(props).Typography.md.lineHeight.headline3};
      font-weight: ${(props) =>
        getTheme(props).Typography.md.fontWeight.headline3};
      font-size: ${(props) => getTheme(props).Typography.md.fontSize.headline3};
      font-family: ${(props) =>
        getTheme(props).Typography.md.fontFamily.headline3};
    }
  }
  &.headline4 {
    letter-spacing: ${(props) =>
      getTheme(props).Typography.sm.letterSpacing.headline4};
    line-height: ${(props) =>
      getTheme(props).Typography.sm.lineHeight.headline4};
    font-weight: ${(props) =>
      getTheme(props).Typography.sm.fontWeight.headline4};
    font-size: ${(props) => getTheme(props).Typography.sm.fontSize.headline4};
    font-family: ${(props) =>
      getTheme(props).Typography.sm.fontFamily.headline4};
    @media (min-width: ${(props) => getTheme(props).breakpoints.md}) {
      letter-spacing: ${(props) =>
        getTheme(props).Typography.md.letterSpacing.headline4};
      line-height: ${(props) =>
        getTheme(props).Typography.md.lineHeight.headline4};
      font-weight: ${(props) =>
        getTheme(props).Typography.md.fontWeight.headline4};
      font-size: ${(props) => getTheme(props).Typography.md.fontSize.headline4};
      font-family: ${(props) =>
        getTheme(props).Typography.md.fontFamily.headline4};
    }
  }
  &.headline5 {
    letter-spacing: ${(props) =>
      getTheme(props).Typography.sm.letterSpacing.headline5};
    line-height: ${(props) =>
      getTheme(props).Typography.sm.lineHeight.headline5};
    font-weight: ${(props) =>
      getTheme(props).Typography.sm.fontWeight.headline5};
    font-size: ${(props) => getTheme(props).Typography.sm.fontSize.headline5};
    font-family: ${(props) =>
      getTheme(props).Typography.sm.fontFamily.headline5};
    @media (min-width: ${(props) => getTheme(props).breakpoints.md}) {
      letter-spacing: ${(props) =>
        getTheme(props).Typography.md.letterSpacing.headline5};
      line-height: ${(props) =>
        getTheme(props).Typography.md.lineHeight.headline5};
      font-weight: ${(props) =>
        getTheme(props).Typography.md.fontWeight.headline5};
      font-size: ${(props) => getTheme(props).Typography.md.fontSize.headline5};
      font-family: ${(props) =>
        getTheme(props).Typography.md.fontFamily.headline5};
    }
  }
  &.headline6 {
    letter-spacing: ${(props) =>
      getTheme(props).Typography.sm.letterSpacing.headline6};
    line-height: ${(props) =>
      getTheme(props).Typography.sm.lineHeight.headline6};
    font-weight: ${(props) =>
      getTheme(props).Typography.sm.fontWeight.headline6};
    font-size: ${(props) => getTheme(props).Typography.sm.fontSize.headline6};
    font-family: ${(props) =>
      getTheme(props).Typography.sm.fontFamily.headline6};
    @media (min-width: ${(props) => getTheme(props).breakpoints.md}) {
      letter-spacing: ${(props) =>
        getTheme(props).Typography.md.letterSpacing.headline6};
      line-height: ${(props) =>
        getTheme(props).Typography.md.lineHeight.headline6};
      font-weight: ${(props) =>
        getTheme(props).Typography.md.fontWeight.headline6};
      font-size: ${(props) => getTheme(props).Typography.md.fontSize.headline6};
      font-family: ${(props) =>
        getTheme(props).Typography.md.fontFamily.headline6};
    }
  }
  &.body {
    letter-spacing: ${(props) =>
      getTheme(props).Typography.sm.letterSpacing.body};
    line-height: ${(props) => getTheme(props).Typography.sm.lineHeight.body};
    font-weight: ${(props) => getTheme(props).Typography.sm.fontWeight.body};
    font-size: ${(props) => getTheme(props).Typography.sm.fontSize.body};
    font-family: ${(props) => getTheme(props).Typography.sm.fontFamily.body};
    @media (min-width: ${(props) => getTheme(props).breakpoints.md}) {
      letter-spacing: ${(props) =>
        getTheme(props).Typography.md.letterSpacing.body};
      line-height: ${(props) => getTheme(props).Typography.md.lineHeight.body};
      font-weight: ${(props) => getTheme(props).Typography.md.fontWeight.body};
      font-size: ${(props) => getTheme(props).Typography.md.fontSize.body};
      font-family: ${(props) => getTheme(props).Typography.md.fontFamily.body};
    }
  }
  &.detail {
    letter-spacing: ${(props) =>
      getTheme(props).Typography.sm.letterSpacing.detail};
    line-height: ${(props) => getTheme(props).Typography.sm.lineHeight.detail};
    font-weight: ${(props) => getTheme(props).Typography.sm.fontWeight.detail};
    font-size: ${(props) => getTheme(props).Typography.sm.fontSize.detail};
    font-family: ${(props) => getTheme(props).Typography.sm.fontFamily.detail};
    @media (min-width: ${(props) => getTheme(props).breakpoints.md}) {
      letter-spacing: ${(props) =>
        getTheme(props).Typography.md.letterSpacing.detail};
      line-height: ${(props) =>
        getTheme(props).Typography.md.lineHeight.detail};
      font-weight: ${(props) =>
        getTheme(props).Typography.md.fontWeight.detail};
      font-size: ${(props) => getTheme(props).Typography.md.fontSize.detail};
      font-family: ${(props) =>
        getTheme(props).Typography.md.fontFamily.detail};
    }
  }
  &.eyebrow {
    letter-spacing: ${(props) =>
      getTheme(props).Typography.sm.letterSpacing.eyebrow};
    line-height: ${(props) => getTheme(props).Typography.sm.lineHeight.eyebrow};
    font-weight: ${(props) => getTheme(props).Typography.sm.fontWeight.eyebrow};
    font-size: ${(props) => getTheme(props).Typography.sm.fontSize.eyebrow};
    font-family: ${(props) => getTheme(props).Typography.sm.fontFamily.eyebrow};
    @media (min-width: ${(props) => getTheme(props).breakpoints.md}) {
      letter-spacing: ${(props) =>
        getTheme(props).Typography.md.letterSpacing.eyebrow};
      line-height: ${(props) =>
        getTheme(props).Typography.md.lineHeight.eyebrow};
      font-weight: ${(props) =>
        getTheme(props).Typography.md.fontWeight.eyebrow};
      font-size: ${(props) => getTheme(props).Typography.md.fontSize.eyebrow};
      font-family: ${(props) =>
        getTheme(props).Typography.md.fontFamily.eyebrow};
    }
  }
  &.form {
    letter-spacing: ${(props) =>
      getTheme(props).Typography.sm.letterSpacing.form};
    line-height: ${(props) => getTheme(props).Typography.sm.lineHeight.form};
    font-weight: ${(props) => getTheme(props).Typography.sm.fontWeight.form};
    font-size: ${(props) => getTheme(props).Typography.sm.fontSize.form};
    font-family: ${(props) => getTheme(props).Typography.sm.fontFamily.form};
    @media (min-width: ${(props) => getTheme(props).breakpoints.md}) {
      letter-spacing: ${(props) =>
        getTheme(props).Typography.md.letterSpacing.form};
      line-height: ${(props) => getTheme(props).Typography.md.lineHeight.form};
      font-weight: ${(props) => getTheme(props).Typography.md.fontWeight.form};
      font-size: ${(props) => getTheme(props).Typography.md.fontSize.form};
      font-family: ${(props) => getTheme(props).Typography.md.fontFamily.form};
    }
  }
  &.formError {
    color: ${(props) => getTheme(props).colors.fillSystemError};
    letter-spacing: ${(props) =>
      getTheme(props).Typography.sm.letterSpacing.formError};
    line-height: ${(props) =>
      getTheme(props).Typography.sm.lineHeight.formError};
    font-weight: ${(props) =>
      getTheme(props).Typography.sm.fontWeight.formError};
    font-size: ${(props) => getTheme(props).Typography.sm.fontSize.formError};
    font-family: ${(props) =>
      getTheme(props).Typography.sm.fontFamily.formError};
    @media (min-width: ${(props) => getTheme(props).breakpoints.md}) {
      letter-spacing: ${(props) =>
        getTheme(props).Typography.md.letterSpacing.formError};
      line-height: ${(props) =>
        getTheme(props).Typography.md.lineHeight.formError};
      font-weight: ${(props) =>
        getTheme(props).Typography.md.fontWeight.formError};
      font-size: ${(props) => getTheme(props).Typography.md.fontSize.formError};
      font-family: ${(props) =>
        getTheme(props).Typography.md.fontFamily.formError};
    }
  }
  &.formLabel {
    letter-spacing: ${(props) =>
      getTheme(props).Typography.sm.letterSpacing.formLabel};
    line-height: ${(props) =>
      getTheme(props).Typography.sm.lineHeight.formLabel};
    font-weight: ${(props) =>
      getTheme(props).Typography.sm.fontWeight.formLabel};
    font-size: ${(props) => getTheme(props).Typography.sm.fontSize.formLabel};
    font-family: ${(props) =>
      getTheme(props).Typography.sm.fontFamily.formLabel};
    @media (min-width: ${(props) => getTheme(props).breakpoints.md}) {
      letter-spacing: ${(props) =>
        getTheme(props).Typography.md.letterSpacing.formLabel};
      line-height: ${(props) =>
        getTheme(props).Typography.md.lineHeight.formLabel};
      font-weight: ${(props) =>
        getTheme(props).Typography.md.fontWeight.formLabel};
      font-size: ${(props) => getTheme(props).Typography.md.fontSize.formLabel};
      font-family: ${(props) =>
        getTheme(props).Typography.md.fontFamily.formLabel};
    }
  }
  &.button {
    letter-spacing: ${(props) =>
      getTheme(props).Typography.sm.letterSpacing.button};
    line-height: ${(props) => getTheme(props).Typography.sm.lineHeight.button};
    font-weight: ${(props) => getTheme(props).Typography.sm.fontWeight.button};
    font-size: ${(props) => getTheme(props).Typography.sm.fontSize.button};
    font-family: ${(props) => getTheme(props).Typography.sm.fontFamily.button};
    @media (min-width: ${(props) => getTheme(props).breakpoints.md}) {
      letter-spacing: ${(props) =>
        getTheme(props).Typography.md.letterSpacing.button};
      line-height: ${(props) =>
        getTheme(props).Typography.md.lineHeight.button};
      font-weight: ${(props) =>
        getTheme(props).Typography.md.fontWeight.button};
      font-size: ${(props) => getTheme(props).Typography.md.fontSize.button};
      font-family: ${(props) =>
        getTheme(props).Typography.md.fontFamily.button};
    }
  }
  &.linkSmall {
    text-decoration: underline;
    letter-spacing: ${(props) =>
      getTheme(props).Typography.sm.letterSpacing.linkSmall};
    line-height: ${(props) =>
      getTheme(props).Typography.sm.lineHeight.linkSmall};
    font-weight: ${(props) =>
      getTheme(props).Typography.sm.fontWeight.linkSmall};
    font-size: ${(props) => getTheme(props).Typography.sm.fontSize.linkSmall};
    font-family: ${(props) =>
      getTheme(props).Typography.sm.fontFamily.linkSmall};
    @media (min-width: ${(props) => getTheme(props).breakpoints.md}) {
      letter-spacing: ${(props) =>
        getTheme(props).Typography.md.letterSpacing.linkSmall};
      line-height: ${(props) =>
        getTheme(props).Typography.md.lineHeight.linkSmall};
      font-weight: ${(props) =>
        getTheme(props).Typography.md.fontWeight.linkSmall};
      font-size: ${(props) => getTheme(props).Typography.md.fontSize.linkSmall};
      font-family: ${(props) =>
        getTheme(props).Typography.md.fontFamily.linkSmall};
    }
  }

  &.dark100 {
    color: ${(props) => getTheme(props).Typography.colors.dark100};
  }
  &.dark50 {
    color: ${(props) => getTheme(props).Typography.colors.dark50};
  }
  &.dark25 {
    color: ${(props) => getTheme(props).Typography.colors.dark25};
  }
  &.light100 {
    color: ${(props) => getTheme(props).Typography.colors.light100};
  }
  &.light50 {
    color: ${(props) => getTheme(props).Typography.colors.light50};
  }
  &.light25 {
    color: ${(props) => getTheme(props).Typography.colors.light25};
  }
  &.accent100 {
    color: ${(props) => getTheme(props).Typography.colors.accent100};
  }
  &.accent50 {
    color: ${(props) => getTheme(props).Typography.colors.accent50};
  }
  &.accent25 {
    color: ${(props) => getTheme(props).Typography.colors.accent25};
  }

  &.light {
    font-family: ${(props) => getTheme(props).Typography.sm.fontFamily.light};
    @media (min-width: ${(props) => getTheme(props).breakpoints.md}) {
      font-family: ${(props) => getTheme(props).Typography.md.fontFamily.light};
    }
  }
  &.regular {
    font-family: ${(props) => getTheme(props).Typography.sm.fontFamily.regular};
    @media (min-width: ${(props) => getTheme(props).breakpoints.md}) {
      font-family: ${(props) =>
        getTheme(props).Typography.md.fontFamily.regular};
    }
  }
  &.medium {
    font-family: ${(props) => getTheme(props).Typography.sm.fontFamily.medium};
    @media (min-width: ${(props) => getTheme(props).breakpoints.md}) {
      font-family: ${(props) =>
        getTheme(props).Typography.md.fontFamily.medium};
    }
  }
  &.bold {
    font-family: ${(props) => getTheme(props).Typography.sm.fontFamily.bold};
    @media (min-width: ${(props) => getTheme(props).breakpoints.md}) {
      font-family: ${(props) => getTheme(props).Typography.md.fontFamily.bold};
    }
  }

  ${(props) => customCss(props)}
`;
