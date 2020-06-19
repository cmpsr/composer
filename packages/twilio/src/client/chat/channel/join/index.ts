import Client from 'twilio-chat';
import { Channel } from 'twilio-chat/lib/channel';

export const join = (client: Client, name: string): Promise<Channel> => {
  return client
    .getChannelByUniqueName(name)
    .catch(error => {
      if (error.body.code === 50300) {
        // channel doesn't exist, so create it
        return client.createChannel({ uniqueName: name, isPrivate: true });
      }
      throw error;
    })
    .then(channel => channel.join().catch(() => channel))
    .catch(error => {
      console.log('error', error);
      return null;
    });
};
