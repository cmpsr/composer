type Fn = (a: any) => any;

export const compose = (...fns: Fn[]) => (initialVal: any) => fns.reduce((val, fn) => fn(val), initialVal);
