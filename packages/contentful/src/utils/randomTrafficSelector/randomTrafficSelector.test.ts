import { randomTrafficSelector } from '.';

describe('randomTrafficSelector', () => {
  const traffics = [
    { value: 1, traffic: 0.3 },
    { value: 2, traffic: 0.3 },
    { value: 3, traffic: 0.4 },
  ];

  const tester = (randomValue: number, expected: any, items = traffics) => {
    const transformer = jest.fn().mockImplementation(i => i.value);
    const randomSpy = jest
      .spyOn(global.Math, 'random')
      .mockReturnValue(randomValue);
    const selected = randomTrafficSelector(items, transformer);
    expect(randomSpy).toHaveBeenCalledTimes(1);
    expect(transformer).toHaveBeenCalledTimes(1);
    expect(transformer).toHaveBeenCalledWith(expected);
    expect(selected).toBe(expected.value);
    randomSpy.mockRestore();
  };

  it('should return first item if random returns 0', () => {
    tester(0, traffics[0]);
  });

  it('should return first item if random returns 0.2', () => {
    tester(0.2, traffics[0]);
  });

  it('should return second item if random returns 0.3', () => {
    tester(0.3, traffics[1]);
  });

  it('should return second item if random returns 0.5', () => {
    tester(0.5, traffics[1]);
  });

  it('should return last item if random returns 0.6', () => {
    tester(0.6, traffics[2]);
  });

  it('should return last item if random returns 0.8', () => {
    tester(0.8, traffics[2]);
  });

  it('should return last item if random returns 0.99999999', () => {
    tester(0.99999999, traffics[2]);
  });

  it('should return item if single item', () => {
    const item = { value: 1, traffic: 1 };
    const items = [item];
    tester(0, item, items);
    tester(0.2, item, items);
    tester(0.4, item, items);
    tester(0.6, item, items);
    tester(0.8, item, items);
    tester(0.99999999, item, items);
  });
});
