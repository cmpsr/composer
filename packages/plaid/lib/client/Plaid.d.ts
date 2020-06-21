import plaid from 'plaid';
import { PlaidConfig, GetTransactionOptions, CreateAssetsReportOptions } from './types';
interface PrivateToken {
    accessToken: string;
    itemId: string;
}
export declare class Plaid {
    private config;
    private client;
    private privateToken?;
    constructor(config: PlaidConfig);
    getAccessToken(): Promise<PrivateToken>;
    getAuth(accountIds?: string[]): Promise<plaid.AuthResponse>;
    getTransactions(startDate: string, endDate: string, options?: GetTransactionOptions): Promise<plaid.TransactionsResponse>;
    getBalance(accountIds?: string[]): Promise<plaid.AccountsResponse>;
    getIdentity(): Promise<any[]>;
    getIncome(): Promise<plaid.IncomeResponse>;
    createAssetReport(options: CreateAssetsReportOptions, daysRequested?: number): Promise<plaid.AssetReportCreateResponse>;
    refreshAssetReport(reportAccessToken: string, options?: CreateAssetsReportOptions, daysRequested?: number): Promise<plaid.AssetReportCreateResponse>;
    getAssetReport(reportAccessToken: string, includeInsights?: boolean): Promise<plaid.AssetReportGetResponse>;
    getAssetReportPdf(reportAccessToken: string): Promise<plaid.AssetReportGetPdfResponse>;
}
export {};
//# sourceMappingURL=Plaid.d.ts.map