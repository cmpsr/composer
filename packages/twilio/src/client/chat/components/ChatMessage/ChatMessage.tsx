import React from 'react';
import { ChatMessage as ChatMessageType } from 'types';

export const ChatMessage = ({
  author,
  body,
  sid,
  timestamp,
}: ChatMessageType) => {
  return (
    <div key={sid} className="flex items-start mb-4 text-sm">
      <div className="w-10 h-10 rounded mr-3 bg-fill-black-200"></div>
      <div className="flex-1 overflow-hidden">
        <div>
          <span className="font-bold">{author}</span>
          <span className="text-fill-black-200 text-xs ml-1">{timestamp}</span>
        </div>
        <p className="text-black leading-normal">{body}</p>
      </div>
    </div>
  );
};
