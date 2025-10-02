const { isEven, reverseString, getMax, filterEven } = require('./utils');

describe('Utils 測試', () => {
  // 偶數檢查測試
  describe('isEven()', () => {
    test('應該正確判斷偶數', () => {
      expect(isEven(2)).toBe(true);
      expect(isEven(4)).toBe(true);
      expect(isEven(0)).toBe(true);
    });

    test('應該正確判斷奇數', () => {
      expect(isEven(1)).toBe(false);
      expect(isEven(3)).toBe(false);
      expect(isEven(-1)).toBe(false);
    });
  });

  // 字串反轉測試
  describe('reverseString()', () => {
    test('應該正確反轉字串', () => {
      expect(reverseString('hello')).toBe('olleh');
      expect(reverseString('Jest')).toBe('tseJ');
    });

    test('應該處理空字串', () => {
      expect(reverseString('')).toBe('');
    });

    test('應該處理單一字元', () => {
      expect(reverseString('a')).toBe('a');
    });
  });

  // 取得最大值測試
  describe('getMax()', () => {
    test('應該回傳陣列中的最大值', () => {
      expect(getMax([1, 2, 3, 4, 5])).toBe(5);
      expect(getMax([10, -5, 3, 7])).toBe(10);
    });

    test('空陣列應該回傳 null', () => {
      expect(getMax([])).toBeNull();
    });

    test('應該能處理負數', () => {
      expect(getMax([-1, -5, -3])).toBe(-1);
    });
  });

  // 過濾偶數測試
  describe('filterEven()', () => {
    test('應該回傳只包含偶數的陣列', () => {
      expect(filterEven([1, 2, 3, 4, 5, 6])).toEqual([2, 4, 6]);
    });

    test('全部都是奇數應該回傳空陣列', () => {
      expect(filterEven([1, 3, 5])).toEqual([]);
    });

    test('空陣列應該回傳空陣列', () => {
      expect(filterEven([])).toEqual([]);
    });
  });
});
