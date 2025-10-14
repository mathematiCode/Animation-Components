import { describe, it, expect } from 'vitest';
import { calculateOptimalSize } from './calculateOptimalSize';

describe('calculates optimal sizes', () => {
  it(`calculates dimensions for a square container`, () => {
    const { size, itemsPerRow, numRows } = calculateOptimalSize(300, 300, 10);
    expect(size).toBeLessThanOrEqual(30);
    expect(size).toBeGreaterThanOrEqual(5);
  });
});
