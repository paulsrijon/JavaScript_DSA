import { longestPalindromeSubsequence } from '../longestPalindromeSubsequence.js';

describe('longestPalindromeSubsequence', () => {
    it('should return 0 for an empty string', () => {
        const s = '';
        expect(longestPalindromeSubsequence(s)).toBe(0);
    });

    it('should return 1 for a string with a single character', () => {
        const s = 'a';
        expect(longestPalindromeSubsequence(s)).toBe(1);
    });

    it('should return the correct length for a palindrome string', () => {
        const s = 'racecar';
        expect(longestPalindromeSubsequence(s)).toBe(7); // The entire string is a palindrome.
    });

    it('should return the correct length for a non-palindrome string', () => {
        const s = 'abcde';
        expect(longestPalindromeSubsequence(s)).toBe(1); // The longest palindrome subsequence is 'a' or 'b' or 'c' or 'd' or 'e'.
    });

    it('should handle strings with mixed characters', () => {
        const s = 'bbbab';
        expect(longestPalindromeSubsequence(s)).toBe(4); // The longest palindrome subsequence is 'bbbb'.
    });
});
