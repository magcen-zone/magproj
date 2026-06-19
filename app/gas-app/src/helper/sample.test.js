import { describe, it, expect } from '@jest/globals';
import { tally } from './sample.js';

describe('tally', () => {
  it('求数值数组之和', () => {
    expect(tally([1, 2, 3])).toBe(6);
  });
});
