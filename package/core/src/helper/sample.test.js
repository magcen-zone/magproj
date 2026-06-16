// @ts-check
import { describe, it, expect } from '@jest/globals';
import { add } from './sample.js';

describe('add', () => {
  it('求两数之和', () => {
    expect(add(1, 2)).toBe(3);
  });
});
