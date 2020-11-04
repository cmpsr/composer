import { ReactNode } from 'react';
import { Props as ConversationSummaryProps } from 'components/primitives/Chat/ConversationSummary/ConversationSummary.types';
import { BaseProps } from 'components/Components.types';

export type Props = BaseProps & {
  id?: string;
  conversations: ConversationSummaryProps[];
  selectedConversationId?: string;
  emptyCaseElement?: ReactNode;
};
