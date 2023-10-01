import { longestCommonSubsequence } from '../LongestCommonSubsequence.js';

describe('longestCommonSubsequence', () => {
    it('should return 0 for two empty strings', () => {
        const str1 = '';
        const str2 = '';
        expect(longestCommonSubsequence(str1, str2)).toBe(0);
    });

    it('should return the length of LCS for strings with no common subsequence', () => {
        const str1 = 'abc';
        const str2 = 'def';
        expect(longestCommonSubsequence(str1, str2)).toBe(0);
    });

    it('should return the length of LCS for strings with a common subsequence', () => {
        const str1 = 'AGGTAB';
        const str2 = 'GXTXAYB';
        expect(longestCommonSubsequence(str1, str2)).toBe(4); // LCS is 'GTAB'
    });

    it('should handle strings with different lengths', () => {
        const str1 = 'ABCD';
        const str2 = 'ACDF';
        expect(longestCommonSubsequence(str1, str2)).toBe(3); // LCS is 'ACD'
    });

    it('should handle strings with spaces and special characters', () => {
        const str1 = 'A B C';
        const str2 = 'A B C';
        expect(longestCommonSubsequence(str1, str2)).toBe(5); // LCS is 'A B C'
    });
});
