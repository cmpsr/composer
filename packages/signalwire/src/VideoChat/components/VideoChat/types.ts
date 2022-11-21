import { FlexProps } from '@cmpsr/components';

export interface VideoChatProps extends FlexProps {
  room: string;
  role: 'interviewer' | 'participant';
}
