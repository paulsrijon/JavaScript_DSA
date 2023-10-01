import { change } from '../CoinChange.js';

describe('change', () => {
    it('should return 0 combinations for amount 0', () => {
        const coins = [1, 2, 5];
        const amount = 0;
        expect(change(coins, amount)).toBe(1);
        // There's one way to make change for 0 (no coins used).
    });

    it('should return the correct number of combinations for given coins and amount', () => {
        const coins = [1, 2, 5];
        const amount = 5;
        expect(change(coins, amount)).toBe(4);
        // Four possible combinations: [1,1,1,1,1], [1,1,1,2], [1,2,2], [5]
    });
});
