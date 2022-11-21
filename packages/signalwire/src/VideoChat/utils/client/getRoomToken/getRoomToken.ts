import { apiClient } from '../../api';
import { GetRoomTokenParams } from './types';

export const getRoomToken = async ({ user, room, isModerator }: GetRoomTokenParams) => {
  const url = isModerator ? '/video/rooms/moderator/token' : '/video/rooms/participant/token';
  const response = await apiClient.post(url, { user, room });
  return response.data?.token;
};
