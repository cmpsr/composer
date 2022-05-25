export const compose = (...fns) => (initialVal) => fns.reduce((val, fn) => fn(val), initialVal);
export const composeRight = (...fns) => (initialVal) => fns.reduceRight((val, fn) => fn(val), initialVal);
