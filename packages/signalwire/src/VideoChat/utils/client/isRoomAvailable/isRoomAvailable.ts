import { apiClient } from '../../api';

export const isRoomAvailable = async (room_name: string) => {
  const response = await apiClient.get(`/video/rooms/${room_name}`);
  return response.data?.room === null;
};
