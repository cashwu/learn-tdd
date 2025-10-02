const { add, subtract, multiply, divide } = require('./calculator');

describe('Calculator 測試', () => {
  // 加法測試
  describe('add()', () => {
    test('應該正確執行加法', () => {
      expect(add(2, 3)).toBe(5);
      expect(add(-1, 1)).toBe(0);
      expect(add(0, 0)).toBe(0);
    });

    test('應該能處理小數', () => {
      expect(add(0.1, 0.2)).toBeCloseTo(0.3);
    });
  });

  // 減法測試
  describe('subtract()', () => {
    test('應該正確執行減法', () => {
      expect(subtract(5, 3)).toBe(2);
      expect(subtract(1, 1)).toBe(0);
      expect(subtract(0, 5)).toBe(-5);
    });
  });

  // 乘法測試
  describe('multiply()', () => {
    test('應該正確執行乘法', () => {
      expect(multiply(2, 3)).toBe(6);
      expect(multiply(-2, 3)).toBe(-6);
      expect(multiply(0, 5)).toBe(0);
    });
  });

  // 除法測試
  describe('divide()', () => {
    test('應該正確執行除法', () => {
      expect(divide(6, 2)).toBe(3);
      expect(divide(10, 4)).toBe(2.5);
    });

    test('除以零應該拋出錯誤', () => {
      expect(() => divide(5, 0)).toThrow('不能除以零');
    });
  });
});
