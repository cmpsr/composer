import { useEffect, useRef, useState } from 'react';
import { Video, VideoMemberEntity } from '@signalwire/js';

type UseRoomParams = {
  token: string;
  elementId: string;
  onMembersChanged?: (members: VideoMemberEntity[]) => void;
  onRoomLoaded?: (room: Video.RoomSession) => void;
  onRoomEnded?: () => void;
  videoEnabled: boolean;
  audioEnabled: boolean;
};

type CreateRoomSessionParams = {
  token: string;
  events: { [key: string]: (e: any) => void };
  elementId: string;
  videoEnabled: boolean;
  audioEnabled: boolean;
};

const createRoomSession = async ({ token, events, elementId, videoEnabled, audioEnabled }: CreateRoomSessionParams) => {
  const room = new Video.RoomSession({
    token,
    rootElement: document.getElementById(elementId) as HTMLElement,
    video: videoEnabled,
    audio: audioEnabled,
  });

  Object.keys(events).forEach((eventName) => {
    room.on(eventName as any, events[eventName]);
  });

  return room;
};

export const useRoom = ({
  token,
  elementId,
  onMembersChanged,
  onRoomLoaded,
  onRoomEnded,
  videoEnabled,
  audioEnabled,
}: UseRoomParams) => {
  const [initialized, setInitialized] = useState(false);
  const [members, setMembers] = useState<VideoMemberEntity[]>([]);

  const loadingRef = useRef(false);
  const roomRef = useRef<Video.RoomSession>();

  useEffect(() => {
    onMembersChanged?.(members);
  }, [members, onMembersChanged]);

  useEffect(() => {
    async function startRoom() {
      try {
        loadingRef.current = true;
        const room = await createRoomSession({
          elementId,
          token,
          events: {
            'room.joined': () => setInitialized(true),
            destroy: () => {
              onRoomEnded?.();
            },
            'member.joined': ({ member }) => {
              setMembers((members) => [...members, member]);
            },
            'member.left': ({ member }) => {
              setMembers((members) => members.filter((m) => m.id !== member.id));
            },
          },
          videoEnabled,
          audioEnabled,
        });
        await room.join();
        await room.setHideVideoMuted(true);
        roomRef.current = room;

        // First members load
        const { members } = (await room.getMembers()) || { members: [] };
        setMembers(members);
        onRoomLoaded?.(room);
      } catch (e) {
        console.log(e);
        alert('Error encountered. Please try again:: ' + e);
      } finally {
        loadingRef.current = false;
      }
    }

    if (token && !initialized && !loadingRef.current) {
      startRoom();
    }
  }, [audioEnabled, elementId, initialized, onRoomEnded, onRoomLoaded, token, videoEnabled]);

  return { roomRef, initialized };
};
