import { longestIncreasingSubsequence } from '../LongestIncreasingSubsequence.js';

describe('longestIncreasingSubsequence', () => {
    it('should return 0 for an empty array', () => {
        const x = [];
        expect(longestIncreasingSubsequence(x)).toBe(0);
    });

    it('should return 1 for an array with a single element', () => {
        const x = [5];
        expect(longestIncreasingSubsequence(x)).toBe(1);
    });

    it('should return the correct length for a sorted array', () => {
        const x = [1, 2, 3, 4, 5];
        expect(longestIncreasingSubsequence(x)).toBe(5);
    });

    it('should return the correct length for a reversed array', () => {
        const x = [5, 4, 3, 2, 1];
        expect(longestIncreasingSubsequence(x)).toBe(1);
    });

    it('should return the correct length for a random array', () => {
        const x = [10, 22, 9, 33, 21, 50, 41, 60, 80];
        expect(longestIncreasingSubsequence(x)).toBe(6); // Longest subsequence is [10, 22, 33, 50, 60, 80]
    });

});
