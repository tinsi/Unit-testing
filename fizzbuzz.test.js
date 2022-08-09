const fizzbuzz = require("./fizzbuzz");

describe('testaa, että fizzbuzz-funktio toimii oikein', () => {
    
test('numero on 3, tulostaa Fizz', () => {
    expect(fizzbuzz(3)).toBe('Fizz');
});

test('numero on 1, tulostaa 1', () => {
    expect(fizzbuzz(1)).toBe(1);
});

test('numero on 5, tulostaa Buzz', () => {
    expect(fizzbuzz(5)).toBe('Buzz');
});

test('numero on 7, tulostaa 7', () => {
    expect(fizzbuzz(7)).toBe(7);
}); 

test('numero on 9, tulostaa Fizz', () => {
    expect(fizzbuzz(9)).toBe('Fizz');
});

test('numero on 15, tulostaa FizzBuzz', () => {
    expect(fizzbuzz(15)).toBe('FizzBuzz');
})

});