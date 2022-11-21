import { Video, VideoMemberEntity } from '@signalwire/js';

export type VideoRoomProps = {
  token: string;
  role: 'interviewer' | 'participant';
  onRoomLoaded?: (room: Video.RoomSession) => void;
  onRoomEnded?: () => void;
  onMembersChanged?: (members: VideoMemberEntity[]) => void;
  videoEnabled: boolean;
  audioEnabled: boolean;
};
