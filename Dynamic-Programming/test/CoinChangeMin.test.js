import { coinChangeMin } from '../CoinChange.js';

describe('coinChangeMin', () => {
    it('should return -1 for impossible amount', () => {
        const coins = [2, 5];
        const amount = 7;
        expect(coinChangeMin(coins, amount)).toBe(-1);
        // Cannot make 7 with coins [2, 5]
    });

    it('should return the minimum number of coins for given coins and amount', () => {
        const coins = [1, 2, 5];
        const amount = 11;
        expect(coinChangeMin(coins, amount)).toBe(3);
        // Three coins needed: [5, 5, 1]
    });
});
