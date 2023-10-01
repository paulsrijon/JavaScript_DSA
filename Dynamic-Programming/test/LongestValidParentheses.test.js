import { longestValidParentheses } from '../LongestValidParentheses.js';

describe('longestValidParentheses', () => {
    it('should return 0 for an empty string', () => {
        const s = '';
        expect(longestValidParentheses(s)).toBe(0);
    });

    it('should return 0 for a string with no valid parentheses', () => {
        const s = '))((';
        expect(longestValidParentheses(s)).toBe(0);
    });

    it('should return the correct length for a string with valid parentheses', () => {
        const s = '(()())';
        expect(longestValidParentheses(s)).toBe(6); // Longest valid parentheses substring is '(()())'.
    });

    it('should return the correct length for a string with nested valid parentheses', () => {
        const s = '(()(()))';
        expect(longestValidParentheses(s)).toBe(8); // Longest valid parentheses substring is '(()(()))'.
    });

    it('should return the correct length for a string with multiple valid substrings', () => {
        const s = '(()))()()()';
        expect(longestValidParentheses(s)).toBe(4); // Longest valid parentheses substring is '()()'.
    });

    // Add more test cases as needed
});
