import { Environment } from 'types';
export interface Params {
    clientName: string;
    product: string[];
    onSuccess: (publicToken: string, metadata: any) => void;
    env?: Environment;
    countryCodes?: string[];
    publicKey?: string;
    onEvent?: (event: string, metadata: any) => void;
    onExit?: (error: any, metadata: any) => void;
}
export declare const usePlaid: ({ clientName, product, onSuccess, env, countryCodes, publicKey, onEvent, onExit, }: Params) => {
    open: Function;
    exit: Function;
    ready: boolean;
    error: ErrorEvent;
};
//# sourceMappingURL=usePlaid.d.ts.map