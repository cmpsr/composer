import plaid from 'plaid';
import {
  PlaidConfig,
  GetTransactionOptions,
  CreateAssetsReportOptions,
} from './types';

interface PrivateToken {
  accessToken: string;
  itemId: string;
}

export class Plaid {
  private config: PlaidConfig;
  private client: plaid.Client;
  private privateToken?: PrivateToken;

  constructor(config: PlaidConfig) {
    this.client = new plaid.Client(
      config.clientId,
      config.secret,
      config.publicKey,
      config.env,
      config.options,
    );
    this.config = config;
  }

  async getAccessToken() {
    if (this.privateToken) return this.privateToken;
    const token = await this.client.exchangePublicToken(
      this.config.publicToken,
    );
    const privateToken = {
      accessToken: token.access_token,
      itemId: token.item_id,
    };
    this.privateToken = privateToken;
    return privateToken;
  }

  async getAuth(accountIds: string[] = undefined) {
    const { accessToken } = await this.getAccessToken();
    const options = accountIds && {
      account_ids: accountIds,
    };
    const auth = await this.client.getAuth(accessToken, options);
    return auth;
  }

  async getTransactions(
    startDate: string,
    endDate: string,
    options: GetTransactionOptions = undefined,
  ) {
    const { accessToken } = await this.getAccessToken();
    return this.client.getTransactions(
      accessToken,
      startDate,
      endDate,
      options,
    );
  }

  async getBalance(accountIds: string[] = undefined) {
    const { accessToken } = await this.getAccessToken();
    const options = accountIds && {
      account_ids: accountIds,
    };
    const balance = await this.client.getBalance(accessToken, options);
    return balance;
  }

  async getIdentity() {
    const { accessToken } = await this.getAccessToken();
    const { accounts } = await this.client.getIdentity(accessToken);
    const identities = accounts.map((account) => {
      return account.owners;
    });
    return [].concat(...identities); // flat identities array
  }

  async getIncome() {
    const { accessToken } = await this.getAccessToken();
    const income = await this.client.getIncome(accessToken);
    return income;
  }

  async createAssetReport(
    options: CreateAssetsReportOptions,
    daysRequested = 730,
  ) {
    const { accessToken } = await this.getAccessToken();
    const report = await this.client.createAssetReport(
      [accessToken],
      daysRequested,
      options,
    );
    return report;
  }

  async refreshAssetReport(
    reportAccessToken: string,
    options: CreateAssetsReportOptions = undefined,
    daysRequested = 730,
  ) {
    const report = await this.client.refreshAssetReport(
      reportAccessToken,
      daysRequested,
      options,
    );
    return report;
  }

  async getAssetReport(reportAccessToken: string, includeInsights = false) {
    const report = this.client.getAssetReport(
      reportAccessToken,
      includeInsights,
    );
    return report;
  }

  async getAssetReportPdf(reportAccessToken: string) {
    const pdf = this.client.getAssetReportPdf(reportAccessToken);
    return pdf;
  }
}
