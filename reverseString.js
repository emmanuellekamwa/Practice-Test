const { test, expect } = require('@jest/globals');
const reverseString = require ('./reverseString');

test('Reverse "Emma" to "ammE"', () => {
    expect(reverseString('Emma')).toBe('ammE');
});

test('Reverse "Come and look" to ""', () => {
    expect(reverseString('Come and look')).toBe('kool dna emoC');
});