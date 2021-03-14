import { calcFlooding } from '../src/lib/Silhouette';
import {
  FLOODED_TEST, INCORRECT_ENTRANCE_TEST,
  ONE_ENTRANCE_TEST,
  TEXT_SIZE_ENTRANCE_TEST,
  TEXT_VALUES_ENTRANCE_TEST,
  ZERO_TEST
} from './constants';

describe('test silhouette', () => {
  it('should return false on size entrance is invalid', () => {
    const result = calcFlooding(TEXT_SIZE_ENTRANCE_TEST.size, TEXT_SIZE_ENTRANCE_TEST.values);

    expect(result).toBe(false);
  });

  it('should return false on values entrance is invalid', () => {
    const result = calcFlooding(TEXT_VALUES_ENTRANCE_TEST.size, TEXT_VALUES_ENTRANCE_TEST.values);

    expect(result).toBe(false);
  });

  it('should return false on incorrect entrance', () => {
    const result = calcFlooding(INCORRECT_ENTRANCE_TEST.size, INCORRECT_ENTRANCE_TEST.values);

    expect(result).toBe(false);
  });

  it('should return 0 on entrances is equals', () => {
    const result = calcFlooding(ZERO_TEST.size, ZERO_TEST.values);

    expect(result).toBe(0);
  });

  it('should return 0 on entrance is one value', () => {
    const result = calcFlooding(ONE_ENTRANCE_TEST.size, ONE_ENTRANCE_TEST.values);

    expect(result).toBe(0);
  });

  it('should return value of flood', () => {
    const result = calcFlooding(FLOODED_TEST.size, FLOODED_TEST.values);

    expect(result).toBe(FLOODED_TEST.result);
  });
});
