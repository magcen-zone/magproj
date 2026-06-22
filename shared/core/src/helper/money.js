/**
 * 金额格式化（纯函数示例，演示使用 src/type 的共享类型）。
 * @module helper/money
 */

/**
 * 格式化为 "<amount> <currency>"。
 * @param {import('../type/money.js').Money} money
 * @returns {string}
 */
export function formatMoney(money) {
  return `${money.amount} ${money.currency}`;
}
