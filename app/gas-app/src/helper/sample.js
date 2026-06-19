/**
 * GAS 业务逻辑示例（平台无关纯函数，用 Jest 固化；经 vendor-pack→src/app/vendor.js 注入 GAS 运行时）。
 * @module helper/sample
 */

/**
 * 求数值数组之和。
 * @param {number[]} nums
 * @returns {number} 合计
 */
export function tally(nums) {
  return nums.reduce((sum, n) => sum + n, 0);
}
