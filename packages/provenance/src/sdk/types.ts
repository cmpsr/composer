interface IStringValue {
  value: string;
}

interface IPhone {
  uuid: IStringValue;
  number: string;
  numberType: string;
}

interface IAddress {
  uuid: IStringValue;
  street: string;
  city: string;
  state: string;
  zip: string;
  addressType: string;
  street2: string;
}

interface IAmount {
  amount: string;
  currency: string;
}

interface IIncomeSource {
  employer: string;
  amount: IAmount;
}

interface IAdditionalParty extends IParty {
  partyType: string;
}

interface IParty {
  uuid: IStringValue;
  name: {
    uuid: IStringValue;
    firstName: string;
    lastName: string;
    middleName?: string;
  };
  dob: IStringValue;
  phoneNumbers: IPhone[];
  addresses: IAddress[];
  ssn: string;
  email: string;
  incomeSources: IIncomeSource[];
}

interface IAdditionalParties {
  parties: IAdditionalParty[];
}

export interface ILoan {
  additionalParties: IAdditionalParties;
  creditReports: {};
  documents: {};
  funding: {
    complete: boolean;
    completedDate: string;
  };
  incomeRecords: {};
  loan: {
    uuid: IStringValue;
    loanNumber: string;
    loanType: string;
    originatorUuid: IStringValue;
    originatorName: string;
    monthlyPaymentAmount: IAmount;
  };
  primaryParty: IParty;
  digitalSignaturePackets: {};
  servicing: {
    uuid: IStringValue;
  };
  signedPromNote: {};
  triMergeReports: {};
  underwritingPacket: {
    selectedOffer: {
      amount: IAmount;
      termInYears: number;
      intRate: IStringValue;
    };
    propertyAttributes: {
      postLoanAdjCltv: IStringValue;
    };
  };
  lienProperty: {};
}

export interface IContractExecutionResponse {
  contract: string;
  contractState: 'COMPLETED' | 'INITIATED' | 'REQUESTED' | 'ERROR' | 'ADVANCED';
  error: string;
  executionUuid: string;
  scopeUuid: string;
}
