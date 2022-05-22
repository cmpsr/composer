export const compose = (f, g) => (x) => f(g(x));
export const flip = (fn) => (...args) => fn(...args.reverse());
export const composeRight = flip(compose);
