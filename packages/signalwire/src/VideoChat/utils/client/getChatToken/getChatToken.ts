import { apiClient } from '../../api';

export const getChatToken = async (username: string, channels: string | string[]) => {
  const {
    data: { token },
  } = await apiClient.post('/chat/token', {
    user: username,
    channels: Array.isArray(channels) ? channels : [channels],
    validFor: 50,
  });

  return token;
};
