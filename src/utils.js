// 工具函數範例

/**
 * 檢查是否為偶數
 */
function isEven(num) {
  return num % 2 === 0;
}

/**
 * 反轉字串
 */
function reverseString(str) {
  return str.split('').reverse().join('');
}

/**
 * 取得陣列中的最大值
 */
function getMax(arr) {
  if (arr.length === 0) {
    return null;
  }
  return Math.max(...arr);
}

/**
 * 過濾陣列中的偶數
 */
function filterEven(arr) {
  return arr.filter(num => num % 2 === 0);
}

module.exports = {
  isEven,
  reverseString,
  getMax,
  filterEven
};
