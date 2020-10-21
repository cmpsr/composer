import { Loan } from './loan';
import generateLoan from './__mocks__/loan.mock';
import axios from './axios-instance';

const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('loan', () => {
  const loanMock = generateLoan();

  test.skip('should fetch loan', async () => {
    const loan = await Loan.fetch(loanMock.loan.uuid.value);
    mockedAxios.get.mockResolvedValueOnce?.({ data: loanMock });
    expect(loan.data()).toBeTruthy();
  });

  describe('create', () => {
    let loan: Loan;
    test('should update loan and return executionUuid', async () => {
      loan = Loan.create(loanMock);
      mockedAxios.post.mockImplementationOnce?.(() =>
        Promise.resolve({ data: '123' })
      );
      await loan.save();
    });

    test('should execution complete', async () => {
      mockedAxios.get?.mockResolvedValueOnce?.({
        data: { contractState: 'COMPLETED' },
      });
      const commited = await loan.waitForCommit();
      expect(commited).toBe(true);
    });
  });
});
