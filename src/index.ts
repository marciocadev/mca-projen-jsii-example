/**
 * My Hello class
 */
export class Hello {
  /**
   * My sayHello function
   * @param name Someone who calls
   * @returns Greetings
   */
  public sayHello(name: string) {
    return 'hello, ' + name + '!';
  }

  /**
   * My sayGodbye function
   * @param name Someone who calls
   * @returns Godbye
   */
  public sayGodbye(name: string) {
    return 'godbye, ' + name + '!';
  }
}