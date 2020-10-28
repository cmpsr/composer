import styled, { css } from 'styled-components';
import { getTheme } from 'utils/getTheme';
import { Placements } from './Message.types';

interface Props {
  theme: any;
}

export const StyledMessage = styled.div<Props>`
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
`;

export const StyledMessageWrapper = styled.div<Props>`
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

  @media (min-width: 1024px) {
    max-width: 75%;
  }

  @media (min-width: 768px) {
    max-width: 85%;
  }
`;

export const TextWrapper = styled.div<Props>`
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  padding-left: 0.75rem;
  padding-right: 0.75rem;

  &.hasMedia {
    padding-top: 0.25rem;
  }
`;

export const TimeWrapper = styled.div<Props>`
  &.hasTime {
    margin-bottom: 0.5rem;
    margin-top: 0.25rem;
  }
`;

export const StyledMediaWrapper = styled.div<Props>`
  position: relative;
  display: flex;
  justify-content: center;
  cursor: pointer;
  width: 16.375rem;
  height: 16.375rem;

  @media (min-width: 768px) {
    width: 20.125rem;
    height: 20.125rem;
  }

  .imageWrapper {
    display: flex;
  }

  .mediaPreview {
    width: 100%;
    user-select: none;
    max-width: 20rem;
    object-fit: cover;
    display: none;
    border-radius: 22px;

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
  }
`;

export const StyledMediaLoader = styled.div<Props>`
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

export const NumberOfMediaFiles = styled.div`
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

  @media (min-width: 768px) {
    width: 3.75rem;
    height: 3.75rem;
  }
`;

export const BadgeLoader = styled.div`
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

  @media (min-width: 768px) {
    width: 3.75rem;
    height: 3.75rem;
  }
`;
