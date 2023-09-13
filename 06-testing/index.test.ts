import { describe, expect, test, beforeAll } from "bun:test";



beforeAll(() => {
  // setup tests
});

describe("math", () => {

  
  test("addition", () => {
    expect(2 + 2).not.toBe(5);
    expect(7 + 3).toMatchSnapshot();
  });

  
  test('test objects snapshot', () => {

    const person = {
      name: 'John',
      age: 33,
    }

    expect(person).toMatchSnapshot();

  })


  test('test objects, expect data', () => {


    const person = {
      name: 'John',
      age: 33,
      id: '12873612873akjsd'
    }

    expect(person).toEqual({
      name: 'John',
      age: 33,
      id: expect.any(String),
    })


  })



});


