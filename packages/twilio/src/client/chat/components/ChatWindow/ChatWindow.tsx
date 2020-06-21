import React from 'react';
import cn from 'classnames';
import { useTwilioChat } from 'client/chat/useTwilioChat';
import { useState, KeyboardEvent, useEffect } from 'react';
import { ChatMessage } from '../ChatMessage';

type Props = {
  className?: string;
  identity: string;
};

const ChatWindow = ({ className, identity }: Props) => {
  const { channel, messages } = useTwilioChat(identity);
  const [message, setMessage] = useState<string>('');

  const onMessageChanged = (event) => setMessage(event.target.value);

  const onMessageKeyPress = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      channel.sendMessage(message);
      setMessage('');
    }
  };

  useEffect(() => {
    const node = document.getElementById('chatWindowEnd');
    if (node) node.scrollIntoView();
  }, [messages]);

  return (
    <div
      className={cn(
        'flex-1 flex flex-col bg-white overflow-hidden h-full w-full',
        className,
      )}
    >
      <div className="border-b flex px-6 py-2 items-center flex-none overflow-hidden">
        <div className="flex flex-col">
          <h3 className="text-grey-darkest mb-1 font-extrabold">#general</h3>
          <div className="text-grey-dark text-sm truncate">
            Test channel for composer.
          </div>
        </div>
      </div>
      <div className="px-6 py-4 flex-1 overflow-y-scroll h-full">
        {messages.map((message, i) => (
          <ChatMessage key={i} {...message} />
        ))}
        <span id="chatWindowEnd" />
      </div>
      <div className="pb-6 px-4 flex-none">
        <div className="flex rounded-lg border-2 border-grey overflow-hidden">
          <span className="text-3xl text-grey border-r-2 border-grey p-2">
            <svg
              className="fill-current h-6 w-6 block"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M16 10c0 .553-.048 1-.601 1H11v4.399c0 .552-.447.601-1 .601-.553 0-1-.049-1-.601V11H4.601C4.049 11 4 10.553 4 10c0-.553.049-1 .601-1H9V4.601C9 4.048 9.447 4 10 4c.553 0 1 .048 1 .601V9h4.399c.553 0 .601.447.601 1z" />
            </svg>
          </span>
          <input
            type="text"
            className="w-full px-4"
            placeholder="Message #general"
            onKeyPress={onMessageKeyPress}
            onChange={onMessageChanged}
            value={message}
          />
        </div>
      </div>
    </div>
  );
};

export default ChatWindow;
