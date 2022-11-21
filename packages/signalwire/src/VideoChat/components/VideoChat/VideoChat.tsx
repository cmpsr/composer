import React, { FC, useEffect, useState } from 'react';
import { Flex } from '@cmpsr/components';
import { VideoMemberEntity } from '@signalwire/js';
import { getRoomToken, isRoomAvailable as isRoomAvailableApi } from '../../utils/client';
import { Chat, Loading, Login, MembersList, VideoRoom } from '../';
import { VideoChatProps } from './types';

const getLoginLabel = (isModerator: boolean, isRoomAvailable: boolean) =>
  isModerator
    ? isRoomAvailable
      ? 'Start interview'
      : 'Room already in use'
    : !isRoomAvailable
    ? 'Join interview'
    : 'Interview not started yet';

export const VideoChat: FC<VideoChatProps> = ({ room, role, ...flexProps }) => {
  const [loading, setLoading] = useState(true);
  const [isRoomAvailable, setIsRoomAvailable] = useState(false);
  const [token, setToken] = useState('');
  const [participant, setParticipant] = useState('');
  const [roomMemberId, setRoomMemberId] = useState('');
  const [roomMembers, setRoomMembers] = useState<VideoMemberEntity[]>([]);

  const isModerator = role === 'interviewer';

  useEffect(() => {
    const checkIfRoomIsAvailable = async () => {
      setLoading(true);
      const isAvailable = await isRoomAvailableApi(room);
      setIsRoomAvailable(isAvailable);
      setLoading(false);
    };

    checkIfRoomIsAvailable();
  }, [room]);

  const handleStartInterview = async (user: string) => {
    if (!user) return;
    setParticipant(user);
    setLoading(true);
    const token = await getRoomToken({ user, room, isModerator });
    setToken(token);
    setLoading(false);
  };

  const onCloseInterview = async () => {
    setToken('');
    setRoomMembers([]);
  };

  return loading ? (
    <Loading />
  ) : (
    <Flex
      justifyContent="center"
      flexDir="row"
      alignItems="center"
      backgroundColor="background-dark"
      width="100%"
      height="100vh"
      {...flexProps}
    >
      {!token ? (
        <Login
          loginLabel={getLoginLabel(isModerator, isRoomAvailable)}
          onLogin={handleStartInterview}
          isDisabled={isModerator ? !isRoomAvailable : isRoomAvailable}
        />
      ) : (
        <VideoRoom
          token={token}
          role={role}
          videoEnabled
          audioEnabled
          onRoomLoaded={(room) => setRoomMemberId(room.memberId)}
          onMembersChanged={setRoomMembers}
          onRoomEnded={onCloseInterview}
        />
      )}
      {roomMembers.length && <MembersList ownMemberId={roomMemberId} ownUserName={participant} members={roomMembers} />}
      {token && participant && <Chat userId={participant} channel={room} />}
    </Flex>
  );
};
