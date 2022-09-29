import { SignalwireSms } from './SignalwireSms';

export const useSignalwireSms = (
  project = process.env.SIGNALWIRE_PROJECT,
  token = process.env.SIGNALWIRE_TOKEN,
  contexts = process.env.SIGNALWIRE_CONTEXTS,
): SignalwireSms => new SignalwireSms({ project, token, contexts: contexts?.split(',') });

export { SignalwireSms };
