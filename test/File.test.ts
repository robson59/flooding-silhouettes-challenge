import { readFile } from '../src/lib/File';

describe('test read file', () => {
  it('should return array on read file', () => {
    const result = readFile();

    expect(Array.isArray(result)).toBe(true);
  });

  it('should return false on file not found', () => {
    const result = readFile('not-fount.txt');

    expect(result).toBe(false);
  });
});
