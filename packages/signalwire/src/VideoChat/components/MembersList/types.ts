import { VideoMemberEntity } from '@signalwire/js';

export type MembersListProps = {
  members: VideoMemberEntity[];
  ownUserName?: string;
  ownMemberId?: string;
};
