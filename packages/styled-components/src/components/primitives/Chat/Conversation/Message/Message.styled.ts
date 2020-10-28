import styled, { css } from 'styled-components';
import { getTheme } from 'utils/getTheme';
import { MessagePlacement } from './Message.types';

interface Props {
  theme: any;
  placement?: MessagePlacement;
  hasTime?: boolean;
  isMediaLoaded?: boolean;
  hasMedia?: boolean;
  hasText?: boolean;
}

export const StyledMessage = styled.div<Props>`
  display: flex;
  flex-direction: column;
  align-items: ${(props) =>
    props.placement === MessagePlacement.Left ? 'flex-start' : 'flex-end'};
  justify-content: ${(props) =>
    props.placement === MessagePlacement.Left ? 'flex-start' : 'flex-end'};
  margin-bottom: ${(props) => (props.hasTime ? 0 : '0.5rem')};
`;

export const MessageWrapper = styled.div<Props>`
  border-top-left-radius: 22px;
  border-top-right-radius: 22px;
  border-bottom-left-radius: ${(props) =>
    props.placement === MessagePlacement.Left ? '6px' : '22px'};
  border-bottom-right-radius: ${(props) =>
    props.placement === MessagePlacement.Right ? '6px' : '22px'};
  padding: 0.25rem;
  text-align: left;
  display: inline-block;
  max-width: 90%;

  @media (min-width: 1024px) {
    max-width: 75%;
  }

  @media (min-width: 768px) {
    max-width: 85%;
  }

  &.primary {
    background-color: ${(props) => getTheme(props).colors.fillPrimary600};
  }

  &.secondary {
    background-color: ${(props) => getTheme(props).colors.fillSecondary600};
  }

  &.black {
    background-color: ${(props) => getTheme(props).colors.fillBlack100};
  }
`;

export const TextWrapper = styled.div<Props>`
  padding-top: ${(props) => (props.hasMedia ? '0.25rem' : '0.5rem')};
  padding-bottom: 0.5rem;
  padding-left: 0.75rem;
  padding-right: 0.75rem;
`;

export const TimeWrapper = styled.div<Props>`
  ${(props) =>
    props.hasTime &&
    css`
      margin-bottom: 0.5rem;
      margin-top: 0.25rem;
    `}
`;

export const MediaWrapper = styled.div<Props>`
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
    display: ${(props) => (props.isMediaLoaded ? 'block' : 'hidden')};
    border-radius: 22px;

    ${(props) =>
      props.placement === MessagePlacement.Left
        ? css`
            border-bottom-left-radius: ${props.hasText ? 0 : '6px'};
            border-bottom-right-radius: ${props.hasText ? 0 : '22px'};
          `
        : css`
            border-bottom-left-radius: ${props.hasText ? 0 : '22px'};
            border-bottom-right-radius: ${props.hasText ? 0 : '6px'};
          `}
  }

  .numberOfMediaFiles {
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
  }
`;

export const MediaLoader = styled.div<Props>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: ${(props) => getTheme(props).colors.fillSecondary600};
  border-radius: 22px;

  ${(props) =>
    props.placement === MessagePlacement.Left
      ? css`
          border-bottom-left-radius: ${props.hasText ? 0 : '6px'};
          border-bottom-right-radius: ${props.hasText ? 0 : '22px'};
        `
      : css`
          border-bottom-left-radius: ${props.hasText ? 0 : '22px'};
          border-bottom-right-radius: ${props.hasText ? 0 : '6px'};
        `}
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
