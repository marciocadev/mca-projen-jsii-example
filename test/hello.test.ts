import { Hello } from '../src';

test('hello', () => {
  console.log('teste 2');
  expect(new Hello().sayHello('Marcio')).toBe('hello, Marcio!');
});

test('godbye', () => {
  expect(new Hello().sayGodbye('Marcio')).toBe('godbye, Marcio!');
});