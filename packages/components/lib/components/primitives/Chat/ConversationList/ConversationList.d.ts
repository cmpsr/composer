import { ReactNode } from 'react';
import { Props as ConversationSummaryProps } from 'components/primitives/Chat/ConversationSummary';
export declare const CONVERSATION_LIST_DEFAULT_TEST_ID = "conversationList";
declare type Props = {
    id?: string;
    conversations: ConversationSummaryProps[];
    selectedConversationId?: string;
    emptyCaseElement?: ReactNode;
    className?: string;
    testId?: string;
};
export declare const ConversationList: ({ id, conversations, emptyCaseElement, className, selectedConversationId, testId, }: Props) => JSX.Element;
export {};
//# sourceMappingURL=ConversationList.d.ts.map