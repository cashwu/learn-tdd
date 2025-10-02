// 計算器函數範例

/**
 * 加法
 */
function add(a, b) {
  return a + b;
}

/**
 * 減法
 */
function subtract(a, b) {
  return a - b;
}

/**
 * 乘法
 */
function multiply(a, b) {
  return a * b;
}

/**
 * 除法
 */
function divide(a, b) {
  if (b === 0) {
    throw new Error('不能除以零');
  }
  return a / b;
}

module.exports = {
  add,
  subtract,
  multiply,
  divide
};
