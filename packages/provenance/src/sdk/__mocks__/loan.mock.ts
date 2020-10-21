import { ILoan } from '../types';
export default function generateLoan(): ILoan {
  return {
    additionalParties: {
      parties: [
        {
          uuid: { value: '711ecc17-f362-4a92-8881-8dc64bc230a0' },
          partyType: 'COBORROWER',
          name: {
            uuid: { value: 'd41da125-943e-4a0b-ab27-336ffc37f0a4' },
            firstName: 'Jamie',
            lastName: 'Bay',
            middleName: 'Marie',
          },
          dob: { value: '1993-01-01' },
          phoneNumbers: [
            {
              uuid: { value: '3ed23ab6-c1b1-4bbd-9e99-0f175dfa2514' },
              number: '555-555-5555',
              numberType: 'HOME',
            },
            {
              uuid: { value: '46623dbb-3b65-4a75-9331-0d64f8c599d9' },
              number: '352-444-4444',
              numberType: 'MOBILE',
            },
          ],
          addresses: [
            {
              uuid: { value: 'db4e4303-9903-4b3c-8a0f-badaf41742fc' },
              street: '1506 South Pine Ave',
              city: 'Tallhassee',
              state: 'FL',
              zip: '32301',
              addressType: 'MAILING',
              street2: '#103',
            },
          ],
          ssn: '3429842309',
          email: 'jmb@email.com',
          incomeSources: [
            {
              employer: 'Dr Steven Phelps, MD',
              amount: { amount: '4500', currency: 'USD' },
            },
            {
              employer: 'Child Support',
              amount: { amount: '500', currency: 'USD' },
            },
          ],
        },
      ],
    },
    creditReports: {},
    documents: {},
    funding: { complete: true, completedDate: '2020-10-01T20:26:24.142691Z' },
    incomeRecords: {},
    loan: {
      uuid: { value: '8627384e-e545-4c76-8f1c-aafb1e05d0b9' },
      loanNumber: 'LOAN_NUM-1234',
      loanType: 'AUTO_LOAN',
      originatorUuid: { value: 'a7dbfc1b-6ac2-437d-9b44-7e927c016e4d' },
      originatorName: 'ABC Motors LLC',
      monthlyPaymentAmount: { amount: '164.46', currency: 'USD' },
    },
    primaryParty: {
      uuid: { value: '588f6890-d24d-456d-9286-c967d6d35528' },
      name: {
        uuid: { value: '22c5500c-7e29-486f-aba8-fffd5b23ed56' },
        firstName: 'Michael',
        lastName: 'Bay',
        middleName: 'Robert',
      },
      dob: { value: '1990-01-01' },
      phoneNumbers: [
        {
          uuid: { value: 'f14e9e5d-722d-4a82-bc1f-a821969183c9' },
          number: '555-555-5555',
          numberType: 'HOME',
        },
        {
          uuid: { value: '3e5f2f5f-32fa-497d-9bb8-12dd5249532f' },
          number: '444-444-4444',
          numberType: 'MOBILE',
        },
      ],
      addresses: [
        {
          uuid: { value: '7d32323e-0410-44ba-9612-1e2151d5430f' },
          street: '1506 South Pine Ave',
          city: 'Tallhassee',
          state: 'FL',
          zip: '32301',
          addressType: 'MAILING',
          street2: '#103',
        },
      ],
      ssn: '363888847',
      email: 'mrb@email.com',
      incomeSources: [
        {
          employer: 'Capital Regional Medical Center',
          amount: { amount: '4500', currency: 'USD' },
        },
      ],
    },
    digitalSignaturePackets: {},
    servicing: { uuid: { value: 'a7dbfc1b-6ac2-437d-9b44-7e927c016e4d' } },
    signedPromNote: {},
    triMergeReports: {},
    underwritingPacket: {
      selectedOffer: {
        amount: { amount: '6736.74', currency: 'USD' },
        termInYears: 4,
        intRate: { value: '0.08' },
      },
      propertyAttributes: { postLoanAdjCltv: { value: '0.05' } },
    },
    lienProperty: {},
  };
}
