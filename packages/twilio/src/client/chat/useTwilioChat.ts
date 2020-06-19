import { useEffect, useState } from 'react';
import dayjs from 'dayjs';

import Chat from 'twilio-chat';
import { Channel } from 'twilio-chat/lib/channel';
import { Message } from 'twilio-chat/lib/message';

import { ChatMessage } from '../../types';
import { fetchAccessToken } from '../fetchAccessToken';
import { join } from './channel/join';

export const useTwilioChat = (identity: string) => {
  const [client, setClient] = useState<Chat>(null);
  const [channel, setChannel] = useState<Channel>(null);
  const [messages, setMessages] = useState<ChatMessage[]>([]);

  const addMessages = (messages: Message[]) => {
    setMessages(prevState => [
      ...prevState,
      ...messages.map(({ author, body, sid, timestamp }) => ({
        author,
        body,
        sid,
        timestamp: dayjs(timestamp).format('h:mm'),
      })),
    ]);
  };

  useEffect(() => {
    if (!identity) return;

    fetchAccessToken(identity)
      .then(Chat.create)
      .then(setClient);
  }, [identity]);

  useEffect(() => {
    if (!client) return;

    join(client, 'general').then(setChannel);
  }, [client]);

  useEffect(() => {
    if (!channel) return;

    channel.getMessages(50).then(messages => addMessages(messages.items));
    channel.on('messageAdded', message => addMessages([message]));
  }, [channel]);

  return { channel, messages };
};
