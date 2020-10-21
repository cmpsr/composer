const shouldMock = process.env.MOCK_API !== 'false';
let mockAxios;
if (shouldMock) {
  mockAxios = jest.genMockFromModule('axios') as any;
  mockAxios.create = jest.fn(() => mockAxios);
} else {
  mockAxios = require('axios');
}

export default mockAxios;
