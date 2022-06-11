import { Hello } from '../src';

test('hello', () => {
  console.log('teste');
  expect(new Hello().sayHello('Marcio')).toBe('hello, Marcio!');
});