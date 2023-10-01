import { climbStairs } from '../ClimbStairs'

describe('ClimbStairs', () => {
    it('should return 1 for n = 1', () => {
        const n = 1
        expect(climbStairs(n)).toBe(1)
    })

    it('should return 2 for n = 2', () => {
        const n = 2
        expect(climbStairs(n)).toBe(2)
    })

    it('should return 3 for n = 3', () => {
        const n = 3
        expect(climbStairs(n)).toBe(3)
    })

    it('should return 5 for n = 4', () => {
        const n = 4
        expect(climbStairs(n)).toBe(5)
    })

    it('should return 8 for n = 5', () => {
        const n = 5
        expect(climbStairs(n)).toBe(8)
    })

    it('should return 13 for n = 6', () => {
        const n = 6
        expect(climbStairs(n)).toBe(13)
    })
})
