import React, { FC, useRef, useState } from 'react';
import {
  Box,
  Flex,
  IconButton,
  IconMicrophone,
  IconMicrophoneOff,
  IconPhone,
  IconVideo,
  IconVideoOff,
} from '@cmpsr/components';
import { Video } from '@signalwire/js';
import { VideoRoomProps } from './types';
import { useRoom } from '../../hooks/useRoom';

export const VideoRoom: FC<VideoRoomProps> = ({
  token,
  onRoomLoaded,
  onRoomEnded,
  onMembersChanged,
  videoEnabled,
  audioEnabled,
  role,
}) => {
  const roomRef = useRef<Video.RoomSession>();
  const [rtcStatus, setRtcStatus] = useState({ videoEnabled, audioEnabled });

  useRoom({
    elementId: 'stream',
    token,
    onMembersChanged,
    onRoomEnded,
    onRoomLoaded: (room) => {
      onRoomLoaded?.(room);
      roomRef.current = room;
    },
    videoEnabled: rtcStatus.videoEnabled,
    audioEnabled: rtcStatus.audioEnabled,
  });

  const onCloseInterview = async () => {
    if (role === 'interviewer') {
      // Kick all members.
      const { members } = (await roomRef.current?.getMembers()) || { members: [] };
      await Promise.all(
        members
          .filter((member) => member.id !== roomRef.current?.memberId)
          .map(async (member) => roomRef.current?.removeMember({ memberId: member.id })),
      );
    }

    // Leave the room.
    await roomRef.current?.leave();
  };

  const toggleVideo = async () => {
    setRtcStatus({ ...rtcStatus, videoEnabled: !rtcStatus.videoEnabled });
    await (rtcStatus.videoEnabled ? roomRef.current?.videoMute() : roomRef.current?.videoUnmute());
  };
  const toggleAudio = async () => {
    setRtcStatus({ ...rtcStatus, audioEnabled: !rtcStatus.audioEnabled });
    await (rtcStatus.audioEnabled ? roomRef.current?.audioMute() : roomRef.current?.audioUnmute());
  };

  return (
    <Box style={{ width: '100vw', height: '100vh', position: 'fixed', top: 0, left: 0 }}>
      <Box id="stream" style={{ width: '100%', height: '100%' }} />
      <Flex
        flexDir="row"
        alignItems="center"
        justifyContent="center"
        width="100%"
        height="12vh"
        position="fixed"
        bottom="0"
        left="0"
      >
        <Flex direction="row" gap="2rem" key="video-actions">
          <IconButton
            _hover={{ color: 'accent-hover' }}
            _focus={{}}
            boxSize="24px"
            aria-label="close-camera"
            key="closecamera"
            variant="ghost"
            size="l"
            color="accent-default"
            backgroundColor="transparent"
            icon={rtcStatus.videoEnabled ? <IconVideo /> : <IconVideoOff />}
            onClick={toggleVideo}
          />
          <IconButton
            _hover={{ color: 'accent-hover' }}
            _focus={{}}
            boxSize="24px"
            aria-label="mute-mic"
            key="mute-mic"
            variant="ghost"
            size="l"
            color="accent-default"
            backgroundColor="transparent"
            icon={rtcStatus.audioEnabled ? <IconMicrophone /> : <IconMicrophoneOff />}
            onClick={toggleAudio}
          />
          <IconButton
            _hover={{ color: 'alert-error-hover' }}
            _focus={{}}
            boxSize="24px"
            size="l"
            variant="ghost"
            key="close-interview"
            aria-label="close-interview"
            onClick={onCloseInterview}
            backgroundColor="transparent"
            color="alert-error-default"
            icon={<IconPhone />}
          />
        </Flex>
      </Flex>
    </Box>
  );
};
