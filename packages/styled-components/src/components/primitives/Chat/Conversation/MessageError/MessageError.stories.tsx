import React from 'react';
import { MessageError } from '.';

export default {
  title: 'Primitives/Chat/Conversation/MessageError',
}

export const Placement = () => (
  <>
    <h1>Message placements</h1>
    <MessageError text="I'm fancy message" errorText="I'm an error" />
  </>
)

