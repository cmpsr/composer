import { ILoan, IContractExecutionResponse } from './types';
import axios from './axios-instance';
import { AxiosResponse } from 'axios';
import wait from 'waait';

export class Loan {
  static create(loanData: ILoan): Loan {
    return new Loan(loanData, true);
  }

  // This will throw an error so please try / catch when consuming
  static async fetch(loanId: string): Promise<Loan> {
    const res = await axios.get<ILoan>(`/api/v1/loan/${loanId}`);
    return new Loan(res.data);
  }

  private loan: ILoan;
  private dirty: boolean;
  private executionUuid: string;
  private executionPromise: Promise<boolean>;

  constructor(loan: ILoan, dirty = false) {
    this.loan = loan;
    this.dirty = dirty;
  }

  data() {
    return this.loan;
  }

  isDirty() {
    return this.dirty;
  }

  isCommitted() {
    return !this.executionUuid;
  }

  async save(changes?: Partial<ILoan>): Promise<Promise<boolean>> {
    if (changes) {
      this.dirty = true;
      this.loan = {
        ...this.loan,
        // eslint-disable-next-line comma-dangle
        ...changes,
      };
    }

    if (this.dirty) {
      this.dirty = false;
      const res = await axios.post<any>(`/api/v1/loan`, this.loan);
      this.executionUuid = res.data;
      // this.executionPromise = this.waitForCommit();
      return this.executionPromise;
    }
    return undefined;
  }

  waitForCommit(): Promise<boolean> {
    if (this.executionPromise) {
      return this.executionPromise;
    } else if (this.executionUuid) {
      this.executionPromise = this._waitForCommit();
    } else {
      return Promise.resolve(true);
    }
    return this.executionPromise;
  }

  private async _waitForCommit(): Promise<boolean> {
    if (this.executionUuid) {
      const startTime = Date.now();
      let res: AxiosResponse<IContractExecutionResponse>;
      // eslint-disable-next-line no-constant-condition
      while (true) {
        try {
          res = await axios.get<IContractExecutionResponse>(
            `/api/v1/contract/execution/${this.executionUuid}`
          );
        } catch (e) {
          this.executionUuid = undefined;
        }
        // Break on success or error or if over 2 mins
        if (
          ['COMPLETED', 'ERROR'].includes(res?.data?.contractState) ||
          Date.now() - startTime > 120000
        ) {
          break;
        }
        await wait(5000);
      }

      this.executionUuid = undefined;
      if (res.data.contractState !== 'COMPLETED') {
        throw Error(res?.data?.error || 'Unknown Error');
      }

      // if (this.dirty) {
      //   this.save();
      // }
    }
    return true;
  }
}
