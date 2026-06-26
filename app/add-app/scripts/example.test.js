import { describe, it, expect } from '@jest/globals';
import { example } from './example.js';

describe('example', () => {
  it('前後空白を除去する', () => {
    expect(example('  x  ')).toBe('x');
  });
});
