import { Hello } from '../src';

test('hello', () => {
  expect(new Hello().sayHello('Marcio')).toBe('hello, Marcio!');
});