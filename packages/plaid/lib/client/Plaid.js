"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Plaid = void 0;

var _plaid = _interopRequireDefault(require("plaid"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Plaid {
  constructor(config) {
    this.client = new _plaid.default.Client(config.clientId, config.secret, config.publicKey, config.env, config.options);
    this.config = config;
  }

  async getAccessToken() {
    if (this.privateToken) return this.privateToken;
    const token = await this.client.exchangePublicToken(this.config.publicToken);
    this.privateToken = {
      accessToken: token.access_token,
      itemId: token.item_id
    };
    return this.privateToken;
  }

  async getAuth(accountIds = undefined) {
    const {
      accessToken
    } = await this.getAccessToken();
    const options = accountIds && {
      account_ids: accountIds
    };
    const auth = await this.client.getAuth(accessToken, options);
    return auth;
  }

  async getTransactions(startDate, endDate, options = undefined) {
    const {
      accessToken
    } = await this.getAccessToken();
    return this.client.getTransactions(accessToken, startDate, endDate, options);
  }

  async getBalance(accountIds = undefined) {
    const {
      accessToken
    } = await this.getAccessToken();
    const options = accountIds && {
      account_ids: accountIds
    };
    const balance = await this.client.getBalance(accessToken, options);
    return balance;
  }

  async getIdentity() {
    const {
      accessToken
    } = await this.getAccessToken();
    const {
      accounts
    } = await this.client.getIdentity(accessToken);
    var identities = accounts.map(account => {
      return account.owners;
    });
    return [].concat(...identities); // flat identities array
  }

  async getIncome() {
    const {
      accessToken
    } = await this.getAccessToken();
    const income = await this.client.getIncome(accessToken);
    return income;
  }

  async createAssetReport(options, daysRequested = 730) {
    const {
      accessToken
    } = await this.getAccessToken();
    const report = await this.client.createAssetReport([accessToken], daysRequested, options);
    return report;
  }

  async refreshAssetReport(reportAccessToken, options = undefined, daysRequested = 730) {
    const report = await this.client.refreshAssetReport(reportAccessToken, daysRequested, options);
    return report;
  }

  async getAssetReport(reportAccessToken, includeInsights = false) {
    const report = this.client.getAssetReport(reportAccessToken, includeInsights);
    return report;
  }

  async getAssetReportPdf(reportAccessToken) {
    const pdf = this.client.getAssetReportPdf(reportAccessToken);
    return pdf;
  }

}

exports.Plaid = Plaid;