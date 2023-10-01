import { kadaneAlgo } from '../KadaneAlgo.js';

describe('kadaneAlgo', () => {
    it('should return 0 for an empty array', () => {
        const array = [];
        expect(kadaneAlgo(array)).toBe(0); // Maximum contiguous sum in an empty array is 0.
    });

    it('should return the maximum contiguous sum for an array with positive numbers', () => {
        const array = [1, 2, 3, 4, 5];
        expect(kadaneAlgo(array)).toBe(15); // Maximum contiguous sum is the sum of all elements.
    });

    it('should return the maximum contiguous sum for an array with mixed positive and negative numbers', () => {
        const array = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
        expect(kadaneAlgo(array)).toBe(6); // Maximum contiguous sum is [4, -1, 2, 1].
    });

    it('should return the maximum negative value for an array with all negative numbers', () => {
        const array = [-5, -2, -8, -1];
        expect(kadaneAlgo(array)).toBe(-1); // Maximum contiguous sum is the maximum negative value.
    });

    it('should handle an array with a single positive number', () => {
        const array = [7];
        expect(kadaneAlgo(array)).toBe(7); // Maximum contiguous sum is the single positive number.
    });
});
