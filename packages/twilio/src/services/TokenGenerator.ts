import twilio from 'twilio';

const AccessToken = twilio.jwt.AccessToken;
const ChatGrant = AccessToken.ChatGrant;

const TokenGenerator = (identity, deviceId) => {
  const appName = 'ComposerTwilioChat';

  // Create a unique ID for the client on their current device
  const endpointId = appName + ':' + identity + ':' + deviceId;

  // Create a "grant" which enables a client to use Chat as a given user,
  // on a given device
  const chatGrant = new ChatGrant({
    serviceSid: process.env.TWILIO_CHAT_SERVICE_SID,
    endpointId: endpointId,
  });

  // Create an access token which we will sign and return to the client,
  // containing the grant we just created
  const token = new AccessToken(
    process.env.TWILIO_ACCOUNT_SID,
    process.env.TWILIO_API_KEY,
    process.env.TWILIO_API_SECRET,
    { identity },
  );

  token.addGrant(chatGrant);
  return token;
};

export default { generate: TokenGenerator };
