import { Plaid } from './Plaid';
import { PlaidConfig } from './types';

const mockExchangePublicToken = jest.fn().mockReturnValue({ access_token: 'access_token', item_id: 'item_id' });
const mockGetAuth = jest.fn().mockReturnValue({ accounts: [], numbers: [] });
const mockGetTransactions = jest.fn().mockReturnValue({ accounts: [], transactions: [] });
const mockOwner = {
  names: ['Owner Full Name'],
  phone_numbers: [
    {
      primary: true,
      type: 'home',
      data: '4673956022',
    },
  ],
};
const mockGetBalance = jest.fn().mockReturnValue({ accounts: [] });
const mockGetIdentity = jest.fn().mockReturnValue({
  accounts: [
    {
      owners: [mockOwner, mockOwner],
    },
    {
      owners: [mockOwner],
    },
  ],
});
const mockGetIncome = jest.fn().mockReturnValue({ item: {}, income: {} });
const mockCreateAssetReport = jest.fn().mockReturnValue({
  asset_report_token: 'asset_resport_token',
  asset_report_id: 'asset_report_id',
  request_id: 'request_id',
});
const mockGetAssetReportPdf = jest.fn().mockReturnValue(Buffer.from('pdf report'));
const mockRefreshAssetReport = jest.fn().mockReturnValue({
  asset_report_token: 'asset_resport_token',
  asset_report_id: 'asset_report_id',
  request_id: 'request_id',
});
const mockGetAssetReport = jest.fn().mockReturnValue({ report: { asset_report_id: 'asset_report_id' } });
jest.mock('plaid', () => {
  return {
    Client: jest.fn().mockImplementation(() => {
      return {
        exchangePublicToken: mockExchangePublicToken,
        getAuth: mockGetAuth,
        getTransactions: mockGetTransactions,
        getBalance: mockGetBalance,
        getIdentity: mockGetIdentity,
        getIncome: mockGetIncome,
        createAssetReport: mockCreateAssetReport,
        refreshAssetReport: mockRefreshAssetReport,
        getAssetReport: mockGetAssetReport,
        getAssetReportPdf: mockGetAssetReportPdf,
      };
    }),
  };
});

describe('Plaid', () => {
  const config: PlaidConfig = {
    clientId: 'client_id',
    secret: 'secret',
    publicKey: 'publicKey',
    env: 'development',
    publicToken: 'publicToken',
    options: {
      version: '2019-05-29',
    },
  };

  beforeEach(() => {
    mockExchangePublicToken.mockClear();
    mockGetAuth.mockClear();
    mockGetTransactions.mockClear();
    mockGetBalance.mockClear();
    mockGetIdentity.mockClear();
    mockGetIncome.mockClear();
    mockCreateAssetReport.mockClear();
    mockRefreshAssetReport.mockClear();
    mockGetAssetReport.mockClear();
    mockGetAssetReportPdf.mockClear();
  });

  test('should instantiate client', () => {
    new Plaid(config);
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    const plaid = require('plaid');
    expect(plaid.Client).toBeCalledTimes(1);
    expect(plaid.Client).toBeCalledWith(config.clientId, config.secret, config.publicKey, config.env, config.options);
  });

  describe('getAccessToken', () => {
    test('should exchange public token', async () => {
      const plaid = new Plaid(config);
      const accessToken = await plaid.getAccessToken();
      expect(mockExchangePublicToken).toBeCalledTimes(1);
      expect(mockExchangePublicToken).toBeCalledWith(config.publicToken);
      expect(accessToken).toStrictEqual({
        accessToken: mockExchangePublicToken().access_token,
        itemId: mockExchangePublicToken().item_id,
      });
    });
    test('should call exchange public token only once', async () => {
      const plaid = new Plaid(config);
      await plaid.getAccessToken();
      await plaid.getAccessToken();
      expect(mockExchangePublicToken).toBeCalledTimes(1);
    });
  });

  describe('getAuth', () => {
    test('should retrieve auth', async () => {
      const plaid = new Plaid(config);
      const accessToken = await givenPublicTokenExchanged(plaid);
      const auth = await plaid.getAuth();
      expect(mockGetAuth).toBeCalledTimes(1);
      expect(mockGetAuth).toBeCalledWith(accessToken, undefined);
      expect(auth).toStrictEqual(mockGetAuth());
    });
    test('should retrieve auth for given accounts', async () => {
      const account_ids = ['account_id1', 'account_id2'];
      const plaid = new Plaid(config);
      const accessToken = await givenPublicTokenExchanged(plaid);
      const auth = await plaid.getAuth(account_ids);
      expect(mockGetAuth).toBeCalledTimes(1);
      expect(mockGetAuth).toBeCalledWith(accessToken, { account_ids });
      expect(auth).toStrictEqual(mockGetAuth());
    });
    test('should generate access token', async () => {
      const plaid = new Plaid(config);
      await plaid.getAuth();
      expect(mockExchangePublicToken).toBeCalledTimes(1);
    });
  });

  describe('getTransactions', () => {
    const startDate = '2020-01-01';
    const endDate = '2020-01-31';

    test('should retrieve transactions', async () => {
      const plaid = new Plaid(config);
      const accessToken = await givenPublicTokenExchanged(plaid);
      const transactions = await plaid.getTransactions(startDate, endDate);
      expect(mockGetTransactions).toBeCalledTimes(1);
      expect(mockGetTransactions).toBeCalledWith(accessToken, startDate, endDate, undefined);
      expect(transactions).toStrictEqual(mockGetTransactions());
    });

    test('should retrieve transactions with given options', async () => {
      const plaid = new Plaid(config);
      const accessToken = await givenPublicTokenExchanged(plaid);
      const options = {
        count: 20,
        offset: 1,
      };
      const transactions = await plaid.getTransactions(startDate, endDate, options);
      expect(mockGetTransactions).toBeCalledTimes(1);
      expect(mockGetTransactions).toBeCalledWith(accessToken, startDate, endDate, options);
      expect(transactions).toStrictEqual(mockGetTransactions());
    });
    test('should generate access token', async () => {
      const plaid = new Plaid(config);
      await plaid.getTransactions(startDate, endDate);
      expect(mockExchangePublicToken).toBeCalledTimes(1);
    });
  });

  describe('getBalance', () => {
    test('should retrieve balance', async () => {
      const plaid = new Plaid(config);
      const accessToken = await givenPublicTokenExchanged(plaid);
      const balance = await plaid.getBalance();
      expect(mockGetBalance).toBeCalledTimes(1);
      expect(mockGetBalance).toBeCalledWith(accessToken, undefined);
      expect(balance).toStrictEqual(mockGetBalance());
    });
    test('should retrieve balance for given accounts', async () => {
      const account_ids = ['account_id1', 'account_id2'];
      const plaid = new Plaid(config);
      const accessToken = await givenPublicTokenExchanged(plaid);
      const balance = await plaid.getBalance(account_ids);
      expect(mockGetBalance).toBeCalledTimes(1);
      expect(mockGetBalance).toBeCalledWith(accessToken, { account_ids });
      expect(balance).toStrictEqual(mockGetBalance());
    });
    test('should generate access token', async () => {
      const plaid = new Plaid(config);
      await plaid.getBalance();
      expect(mockExchangePublicToken).toBeCalledTimes(1);
    });
  });

  describe('getIdentity', () => {
    test('should retrieve identities', async () => {
      const plaid = new Plaid(config);
      const accessToken = await givenPublicTokenExchanged(plaid);
      const identities = await plaid.getIdentity();
      expect(mockGetIdentity).toBeCalledTimes(1);
      expect(mockGetIdentity).toBeCalledWith(accessToken);
      expect(identities).toStrictEqual([mockOwner, mockOwner, mockOwner]);
    });
    test('should generate access token', async () => {
      const plaid = new Plaid(config);
      await plaid.getIdentity();
      expect(mockExchangePublicToken).toBeCalledTimes(1);
    });
  });

  describe('getIncome', () => {
    test('should retrieve identities', async () => {
      const plaid = new Plaid(config);
      const accessToken = await givenPublicTokenExchanged(plaid);
      const income = await plaid.getIncome();
      expect(mockGetIncome).toBeCalledTimes(1);
      expect(mockGetIncome).toBeCalledWith(accessToken);
      expect(income).toStrictEqual(mockGetIncome());
    });
    test('should generate access token', async () => {
      const plaid = new Plaid(config);
      await plaid.getIncome();
      expect(mockExchangePublicToken).toBeCalledTimes(1);
    });
  });

  describe('createAssetReport', () => {
    const options = {
      webhook: 'https://api.carpay.com/assets',
      user: {
        first_name: 'First name',
        last_name: 'Last name',
        ssn: '123-45-6789',
      },
    };
    test('should create asset report with default values', async () => {
      const plaid = new Plaid(config);
      const accessToken = await givenPublicTokenExchanged(plaid);
      const report = await plaid.createAssetReport(options);
      expect(mockCreateAssetReport).toBeCalledTimes(1);
      expect(mockCreateAssetReport).toBeCalledWith([accessToken], 730, options);
      expect(report).toStrictEqual(mockCreateAssetReport());
    });
    test('should create asset report with given number of days', async () => {
      const days = 365;
      const plaid = new Plaid(config);
      const accessToken = await givenPublicTokenExchanged(plaid);
      const report = await plaid.createAssetReport(options, days);
      expect(mockCreateAssetReport).toBeCalledTimes(1);
      expect(mockCreateAssetReport).toBeCalledWith([accessToken], days, options);
      expect(report).toStrictEqual(mockCreateAssetReport());
    });
    test('should generate access token', async () => {
      const plaid = new Plaid(config);
      await plaid.createAssetReport(options);
      expect(mockExchangePublicToken).toBeCalledTimes(1);
    });
  });

  describe('refreshAssetReport', () => {
    const reportAccessToken = 'report_access_token';
    const options = {
      webhook: 'https://api.carpay.com/assets',
      user: {
        first_name: 'First name',
        last_name: 'Last name',
        ssn: '123-45-6789',
      },
    };
    test('should refresh asset report with default values', async () => {
      const plaid = new Plaid(config);
      const report = await plaid.refreshAssetReport(reportAccessToken);
      expect(mockRefreshAssetReport).toBeCalledTimes(1);
      expect(mockRefreshAssetReport).toBeCalledWith(reportAccessToken, 730, undefined);
      expect(report).toStrictEqual(mockRefreshAssetReport());
    });
    test('should refresh asset report with given values', async () => {
      const days = 365;
      const plaid = new Plaid(config);
      const report = await plaid.refreshAssetReport(reportAccessToken, options, days);
      expect(mockRefreshAssetReport).toBeCalledTimes(1);
      expect(mockRefreshAssetReport).toBeCalledWith(reportAccessToken, days, options);
      expect(report).toStrictEqual(mockRefreshAssetReport());
    });
  });

  describe('getAssetReport', () => {
    const reportAccessToken = 'report_access_token';

    test('should get access report', async () => {
      const plaid = new Plaid(config);
      const report = await plaid.getAssetReport(reportAccessToken);
      expect(mockGetAssetReport).toBeCalledTimes(1);
      expect(mockGetAssetReport).toBeCalledWith(reportAccessToken, false);
      expect(report).toStrictEqual(mockGetAssetReport());
    });
    test('should get access report insights', async () => {
      const plaid = new Plaid(config);
      const report = await plaid.getAssetReport(reportAccessToken, true);
      expect(mockGetAssetReport).toBeCalledTimes(1);
      expect(mockGetAssetReport).toBeCalledWith(reportAccessToken, true);
      expect(report).toStrictEqual(mockGetAssetReport());
    });
  });

  describe('getAssetReportPdf', () => {
    const reportAccessToken = 'report_access_token';

    test('should get asset report pdf', async () => {
      const plaid = new Plaid(config);
      const pdf = await plaid.getAssetReportPdf(reportAccessToken);
      expect(mockGetAssetReportPdf).toBeCalledTimes(1);
      expect(mockGetAssetReportPdf).toBeCalledWith(reportAccessToken);
      expect(pdf).toBe(mockGetAssetReportPdf());
    });
  });

  const givenPublicTokenExchanged = async (plaid: Plaid) => {
    return (await plaid.getAccessToken()).accessToken;
  };
});
