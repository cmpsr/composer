import { Chat } from '@signalwire/js';
import { useCallback, useEffect, useRef, useState } from 'react';
import { getChatToken } from '../../utils/client';
import { UseChatProps } from './types';

const createChatClient = (token: string, events: any): Chat.Client => {
  const client = new Chat.Client({ token });
  Object.keys(events).forEach((eventName) => client.on(eventName as any, events[eventName]));
  return client;
};

export const useChat = ({ username, channel, autoload }: UseChatProps) => {
  const [messages, setMessages] = useState<Chat.ChatMessage[]>([]);
  const [members, setMembers] = useState<Chat.ChatMember[]>([]);
  const [ready, setReady] = useState(false);
  const clientRef = useRef<Chat.Client>();

  const sendMessage = (content: any, altChannel?: string) => {
    if (!clientRef.current || !content) return;
    clientRef.current.publish({
      channel: altChannel || channel,
      content,
    });
  };

  const fetchTokenAndStartChat = useCallback(
    async (manualUsername?: string) => {
      if (!username && !manualUsername) return;
      const token = await getChatToken((manualUsername || username) as string, channel);
      clientRef.current = createChatClient(token, {
        message: (message: Chat.ChatMessage) =>
          setMessages((messages) => {
            const current = messages.map((msg) => msg.id);
            return current.includes(message.id) ? messages : [...messages, message];
          }),
        'member.joined': (member: Chat.ChatMember) => setMembers((members) => [...members, member]),
        'member.left': (member: Chat.ChatMember) => setMembers((members) => members.filter((m) => m.id !== member.id)),
        'member.updated': (member: Chat.ChatMember) =>
          setMembers((members) => members.map((m) => (m.id === member.id ? member : m))),
      });

      await clientRef.current.subscribe(channel);

      // First message load
      const messages = await clientRef.current.getMessages({ channel });
      setMessages((messages?.messages.reverse() || []) as Chat.ChatMessage[]);

      // First member load
      const members = await clientRef.current.getMembers({ channel });
      setMembers(members.members as Chat.ChatMember[]);

      // We are ready!
      setReady(true);
    },
    [username, channel],
  );

  useEffect(() => {
    if (username !== '' && channel.length > 0 && autoload) {
      fetchTokenAndStartChat();
    }
  }, [username, channel, autoload, fetchTokenAndStartChat]);

  return { messages, members, ready, sendMessage, fetchTokenAndStartChat, clientRef };
};
