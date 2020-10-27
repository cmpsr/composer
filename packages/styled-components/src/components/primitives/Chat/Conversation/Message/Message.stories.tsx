import React from 'react';
import { Message } from '.';
import { MessagePlacement, Color } from './Message.types';
import { action } from '@storybook/addon-actions';
import styled from 'styled-components';

export default {
  title: 'Primitives/Chat/Conversation/Message',
  component: Message,
};

const Container = styled.div`
  padding: 2.5rem;
`;

export const withLeft = () => (
  <Container>
    <Message placement={MessagePlacement.Left} text="I'm a fancy message" />
  </Container>
);

withLeft.story = {
  name: 'With left placement',
};

export const withRight = () => (
  <Container>
    <Message placement={MessagePlacement.Right} text="I'm a fancy message" />
  </Container>
);

withRight.story = {
  name: 'With right placement',
};

export const withColors = () => (
  <Container>
    <Message
      backgroundColor={Color.Primary}
      text="I'm a primary 25 color"
    />
    <Message
      backgroundColor={Color.Secondary}
      text="I'm a secondary 25 color"
    />

    <Message
      backgroundColor={Color.Black}
      text="I'm a black 10 color"
    />
  </Container>
);

withColors.story = {
  name: 'With colors',
};

export const withTime = () => (
  <Container>
    <Message time="10:23 AM" text="I'm a fancy message" />
  </Container>
);

withTime.story = {
  name: 'With time',
};

export const withMultipleMessages = () => (
  <Container>
    <Message text="Hi Pau! Welcome Aboard!" />
    <Message time="01:32 PM" text="We should talk about this deal :)" />
    <Message
      time="02:37 PM"
      backgroundColor={Color.Secondary}
      placement={MessagePlacement.Left}
      text="Absolutely! I'm really interested."
    />
    <Message text="Oops, sorry. I'm having some issues, my internet connection is super unstable..." />
    <Message
      text="This is a media message"
      onMediaClick={action('On media click')}
      mediaFiles={[
        {
          contentType: 'image/jpeg',
          url:
            'https://www.autobild.es/sites/autobild.es/public/styles/main_element/public/dc/fotos/tesla_model_S_001.jpg?itok=jttOEAGK',
        },
        {
          contentType: 'image/jpeg',
          url:
            'https://www.autobild.es/sites/autobild.es/public/styles/main_element/public/dc/fotos/tesla_model_S_001.jpg?itok=jttOEAGK',
        },
      ]}
    />
  </Container>
);

withMultipleMessages.story = {
  name: 'With multiple messages',
};

export const withMedia = () => (
  <Container>
    <Message
      text="This is a media message"
      onMediaClick={action('On media click')}
      mediaFiles={[
        {
          contentType: 'image/jpeg',
          url:
            'https://www.autobild.es/sites/autobild.es/public/styles/main_element/public/dc/fotos/tesla_model_S_001.jpg?itok=jttOEAGK',
        },
        {
          contentType: 'image/jpeg',
          url:
            'https://www.autobild.es/sites/autobild.es/public/styles/main_element/public/dc/fotos/tesla_model_S_001.jpg?itok=jttOEAGK',
        },
      ]}
    />
  </Container>
);

withMedia.story = {
  name: 'With media',
};