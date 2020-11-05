import React from 'react';
import { boolean, text, select } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { Modal } from '..';
import { Typography } from 'components/primitives/Typography';
import { Button } from 'components/primitives/Button';
import styled from 'styled-components';

export default {
  title: 'Primitives/Modal',
  component: Modal
};

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 3.5rem;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const StyledTitle = styled(Typography)`
  margin-block-start: 0px;
  margin-block-end: 0px;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
`;

const Title = (props: any) => (
  <StyledTitle
    mode={Typography.Modes.Dark100}
    tag={Typography.Tags.H4}
    type={Typography.Types.Headline4}
  >
    {props.children}
  </StyledTitle>
);

export const Rectangle = () => (
  <Modal shape={Modal.Shapes.Rectangle} isOpen>
    <Title>Rectangle Modal</Title>
  </Modal>
);

export const SemiRounded = () => (
  <Modal shape={Modal.Shapes.SemiRounded} isOpen>
    <Title>SemiRounded Modal</Title>
  </Modal>
);

export const Rounded = () => (
  <Modal shape={Modal.Shapes.Rounded} isOpen>
    <Title>Rounded Modal</Title>
  </Modal>
);

export const CloseButton = () => (
  <Modal isOpen showCloseButton>
    <Title>Showing close button</Title>
  </Modal>
);

export const Playground = () => (
  <Modal
    shape={select('Shape', Modal.Shapes, Modal.Shapes.Rectangle)}
    customCss={text('Modal custom CSS', 'width: 30rem;')}
    isOpen={boolean('isOpen', true)}
    showCloseButton={boolean('Show close button', true)}
  >
    <TitleContainer>
      <StyledTitle
        mode={Typography.Modes.Dark100}
        tag={Typography.Tags.H4}
        type={Typography.Types.Headline4}
      >
        {text('Body title', 'Main Title')}
      </StyledTitle>
      <Typography
        mode={Typography.Modes.Dark50}
        tag={Typography.Tags.Span}
        type={Typography.Types.Body}
      >
        {text('Body subtitle', 'Details')}
      </Typography>
    </TitleContainer>
    <ButtonContainer>
      <Button
        type={Button.Types.Secondary}
        onClick={action('Button Click')}
        shape={Button.Shapes.Rounded}
      >
        <Typography
          tag={Typography.Tags.Span}
          type={Typography.Types.Button}
          mode={Typography.Modes.Dark100}
        >
          {text('cancel button text', 'Cancel')}
        </Typography>
      </Button>
      <Button
        type={Button.Types.Primary}
        onClick={action('Button Click')}
        shape={Button.Shapes.Rounded}
      >
        <Typography
          tag={Typography.Tags.Span}
          type={Typography.Types.Button}
          mode={Typography.Modes.Light100}
        >
          {text('Log out button text', 'Log out')}
        </Typography>
      </Button>
    </ButtonContainer>
  </Modal>
);
