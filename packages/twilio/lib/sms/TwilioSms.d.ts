import { TwilioAuthConfig } from 'types';
export declare class TwilioSms {
    private twilioClient;
    constructor(config: TwilioAuthConfig);
    send(message: string, from: string, to: string): Promise<import("twilio/lib/rest/api/v2010/account/message").MessageInstance>;
}
//# sourceMappingURL=TwilioSms.d.ts.map