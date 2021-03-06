import styled from 'styled-components';
import { getTheme } from 'utils/getTheme';
import { StyledBaseProps } from 'components/Components.styled.types';
import { StyledCssProps } from 'components/Components.styled.types';
import { customCss } from 'utils/customCss';
import { Image } from 'components/primitives/Image';

export const StyledMessage = styled.div<StyledCssProps>`
  display: flex;
  flex-direction: column;
  margin-bottom: 0.5rem;

  &.hasTime {
    margin-bottom: 0;
  }

  &.left {
    align-items: flex-start;
    justify-content: flex-start;
  }

  &.right {
    align-items: flex-end;
    justify-content: flex-end;
  }

  ${(props) => customCss(props)}
`;

export const StyledMessageWrapper = styled.div<StyledBaseProps>`
  border-top-left-radius: 22px;
  border-top-right-radius: 22px;
  padding: 0.25rem;
  text-align: left;
  display: inline-block;
  max-width: 90%;

  &.primary {
    background-color: ${(props) => getTheme(props).colors.fillPrimary600};
  }

  &.secondary {
    background-color: ${(props) => getTheme(props).colors.fillSecondary600};
  }

  &.black {
    background-color: ${(props) => getTheme(props).colors.fillBlack100};
  }

  &.left {
    border-bottom-left-radius: 6px;
    border-bottom-right-radius: 22px;
  }

  &.right {
    border-bottom-left-radius: 22px;
    border-bottom-right-radius: 6px;
  }

  @media (min-width: ${(props) => getTheme(props).breakpoints.lg}) {
    max-width: 75%;
  }

  @media (min-width: ${(props) => getTheme(props).breakpoints.md}) {
    max-width: 85%;
  }
`;

export const StyledTextWrapper = styled.div`
  padding: 1rem;
`;

export const StyledTimeWrapper = styled.div`
  &.hasTime {
    margin-bottom: 0.5rem;
    margin-top: 0.25rem;
  }
`;

export const StyledMediaWrapper = styled.div<StyledBaseProps>`
  position: relative;
  display: flex;
  justify-content: center;
  cursor: pointer;
  width: 16.375rem;
  height: 16.375rem;

  @media (min-width: ${(props) => getTheme(props).breakpoints.md}) {
    width: 20.125rem;
    height: 20.125rem;
  }

  .imageWrapper {
    display: flex;
  }
`;

export const mediaPreviewStyling = `
    width: 100%;
    height: 100%;
    user-select: none;
    max-width: 20rem;
    object-fit: cover;
    display: none;
    border-radius: 22px;
    position: absolute;

    &.isMediaLoaded {
      display: block;
    }
    &.left {
      border-bottom-left-radius: 6px;
      border-bottom-right-radius: 22px;
      &.hasText {
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;
      }
    }
    &.right {
      border-bottom-left-radius: 22px;
      border-bottom-right-radius: 6px;
      &.hasText {
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;
      }
    }
`;

export const StyledMediaLoader = styled.div<StyledBaseProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: ${(props) => getTheme(props).colors.fillSecondary600};
  border-radius: 22px;

  &.left {
    border-bottom-left-radius: 6px;
    border-bottom-right-radius: 22px;

    &.hasText {
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
    }
  }

  &.right {
    border-bottom-left-radius: 22px;
    border-bottom-right-radius: 6px;

    &.hasText {
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
    }
  }
`;

export const StyledNumberOfMediaFiles = styled.div<StyledBaseProps>`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => getTheme(props).colors.fillBlack300};
  border-radius: 100%;
  width: 3.125rem;
  height: 3.125rem;

  @media (min-width: ${(props) => getTheme(props).breakpoints.md}) {
    width: 3.75rem;
    height: 3.75rem;
  }
`;

export const StyledBadgeLoader = styled.div<StyledBaseProps>`
  width: 3.125rem;
  height: 3.125rem;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  position: absolute;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100%;
  background-color: ${(props) => getTheme(props).colors.fillBlack300};

  @media (min-width: ${(props) => getTheme(props).breakpoints.md}) {
    width: 3.75rem;
    height: 3.75rem;
  }
`;

export const StyledImage = styled(Image)`
  &&& {
    width: 100%;
    height: 100%;
    display: inline-block;
    position: relative;
  }
`;
