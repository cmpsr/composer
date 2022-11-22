import { apiClient } from '../../api';

export const isRoomAvailable = async (room: string) => {
  const response = await apiClient.get(`/video/rooms/${room}`);
  return response.data?.room === null;
};
