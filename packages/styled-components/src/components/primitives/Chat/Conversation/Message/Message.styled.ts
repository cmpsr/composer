import styled, { css } from 'styled-components';
import { getTheme } from 'utils/getTheme';
import { MessagePlacement } from '.';

export const StyledMessage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: ${(props) =>
    props.placement === MessagePlacement.Left ? 'flex-start' : 'flex-end'};
  justify-content: ${(props) =>
    props.placement === MessagePlacement.Left ? 'flex-start' : 'flex-end'};
  margin-bottom: ${(props) => (props.hasTime ? 0 : '0.5rem')};
`;

export const MessageWrapper = styled.div`
  background-color: rgba(216, 216, 216, 1);
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
`;

export const TextWrapper = styled.div`
  padding: 0.5rem 0.75rem;
`;

export const TimeWrapper = styled.div`
  ${(props) =>
    props.time &&
    css`
      margin-bottom: 0.5rem;
      margin-top: 0.25rem;
    `}
`;

export const MediaWrapper = styled.div`
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
    border-radius: 22px 22px 0 0;
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
    background-color: rgba(127, 127, 127, 1);
    border-radius: 100%;
    width: 3.125rem;
    height: 3.125rem;

    @media (min-width: 768px) {
      width: 3.75rem;
      height: 3.75rem;
    }
  }
`;
