import { describe, it, expect } from 'vitest';
import { calculateOptimalSize } from './calculateOptimalSize';

describe('calculates optimal sizes', () => {
  const cases = [
    ['square', { width: 300, height: 300, items: 10 }],
    ['long rectangle', { width: 900, height: 100, items: 75 }],
    ['tall rectangle', { width: 10, height: 400, items: 20 }],
    ['1:2 aspect ratio', { width: 20, height: 40, items: 50 }],
  ] as const;

  it.each(cases)(
    `calculates dimensions for %s %o container`,
    (_, { width, height, items }) => {
      const {
        size: actualSize,
        itemsPerRow,
        numRows,
      } = calculateOptimalSize(width, height, items);

      expect({ actualSize, itemsPerRow, numRows }, 'results').toMatchSnapshot();
    }
  );
});
