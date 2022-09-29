import { Messaging } from '@signalwire/realtime-api';
import { ClientConfig } from 'types';


export class SignalwireSms {
  private signalwireClient: Messaging.Client;

  constructor(config: ClientConfig) {
    this.signalwireClient = new Messaging.Client(config);
  }

  async send(message: string, from: string, to: string) {
    const sms = await this.signalwireClient.send({
      from,
      to,
      body: message,
    });
    return sms;
  }
}
