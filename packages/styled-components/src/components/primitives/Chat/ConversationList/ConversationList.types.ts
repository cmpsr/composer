import { ReactNode } from 'react';
import { Props as ConversationSummaryProps } from 'components/primitives/Chat/ConversationSummary/ConversationSummary.types';

export type Props = {
  id?: string;
  conversations: ConversationSummaryProps[];
  selectedConversationId?: string;
  emptyCaseElement?: ReactNode;
  className?: string;
  testId?: string;
};
