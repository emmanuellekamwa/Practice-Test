const { expect, test } = require('@jest/globals');
const stringLength = require('./stringLength');

test('return 6', () => {
    expect(stringLength('Lilian')).toBe(6);
});

test('do not return text', () => {
    expect(stringLength('Locomotive')).not.toBe('six');
});

test('Not a string', () => {
    expect(stringLength(500)).toBe('Enter a string');
});


