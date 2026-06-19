import { describe, it, expect } from '@jest/globals';
import { formatMoney } from './money.js';

describe('formatMoney', () => {
  it('格式化为 "<amount> <currency>"', () => {
    expect(formatMoney({ amount: 1000, currency: 'JPY' })).toBe('1000 JPY');
  });
});
