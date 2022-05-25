import { assetTransformer } from './assetTransformer';

describe('assetTransformer', () => {
  it('should transform assets', () => {
    const transformed = assetTransformer.process('https://www.example.com/image.png');

    expect(transformed).toEqual('module.exports = "image.png";');
  });
});
