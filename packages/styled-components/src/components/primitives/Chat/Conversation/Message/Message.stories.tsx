import React from 'react';
import { Message } from '.';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Primitives/Chat/Conversation/Message',
  component: Message,
};

export const Placements = () => (
  <>
    <h1>Message placements</h1>
    {
      Object.keys(Message.Placements).map((placement: any) => (
        <>
          <Message placement={Message.Placements[placement]} text="I'm a fancy message" />
        </>
      ))
    }
  </>
);

export const Colors = () => (
  <>
    <h1>Message colors</h1>
    {
      Object.keys(Message.Colors).map((color: any) => (
        <>
          <Message color={Message.Colors[color]} text="I'm a fancy message" />
        </>
      ))
    }
  </>
);

export const Media = () => (
    <>
    <h1>Message media</h1>
    <Message
      text="This is a media message"
      time="10:23 AM"
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
    </>
);
/*
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
*/