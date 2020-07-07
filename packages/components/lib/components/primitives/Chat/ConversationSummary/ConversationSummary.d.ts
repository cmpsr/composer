/// <reference types="react" />
export declare const CONVERSATION_SUMMARY_DEFAULT_TEST_ID = "conversationSummary";
export declare type Props = {
    id: string;
    title: string;
    description: string;
    message: string;
    unreadMessages?: number;
    avatarText?: string;
    isHighlighted?: boolean;
    isActive?: boolean;
    isError?: boolean;
    time: string;
    className?: string;
    messageClassName?: string;
    testId?: string;
    onClick?: (id: string) => void;
};
export declare const ConversationSummary: ({ id, title, description, message, unreadMessages, avatarText, isHighlighted, isActive, isError, time, className, messageClassName, testId, onClick, }: Props) => JSX.Element;
//# sourceMappingURL=ConversationSummary.d.ts.map