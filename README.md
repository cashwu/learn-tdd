# Jest 測試專案範例

這是一個使用 Jest 進行測試的簡單 JavaScript 專案範例。

## 專案結構

```
learn-tdd/
├── src/
│   ├── calculator.js       # 計算器函數
│   ├── calculator.test.js  # 計算器測試
│   ├── utils.js           # 工具函數
│   └── utils.test.js      # 工具函數測試
├── package.json
└── README.md
```

## 安裝依賴

```bash
npm install
```

## 執行測試

```bash
# 執行所有測試
npm test

# 監聽模式（自動重新執行測試）
npm run test:watch

# 產生測試覆蓋率報告
npm run test:coverage
```

## 範例說明

### Calculator (計算器)
- `add(a, b)` - 加法
- `subtract(a, b)` - 減法
- `multiply(a, b)` - 乘法
- `divide(a, b)` - 除法

### Utils (工具函數)
- `isEven(num)` - 檢查是否為偶數
- `reverseString(str)` - 反轉字串
- `getMax(arr)` - 取得陣列中的最大值
- `filterEven(arr)` - 過濾陣列中的偶數

## Jest 測試語法範例

```javascript
// 使用 describe 組織測試
describe('測試組名稱', () => {
  // 使用 test 或 it 定義測試案例
  test('測試描述', () => {
    expect(實際值).toBe(預期值);
  });
});
```

## 常用的 Jest Matchers

- `toBe()` - 嚴格相等 (===)
- `toEqual()` - 深度相等（用於物件和陣列）
- `toBeNull()` - 值為 null
- `toBeTruthy()` / `toBeFalsy()` - 真值/假值
- `toBeCloseTo()` - 近似相等（用於浮點數）
- `toThrow()` - 拋出錯誤
