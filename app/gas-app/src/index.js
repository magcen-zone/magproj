// @ts-check
/** @typedef {typeof import('@app/core')} VendorApi 由 src/vendor.js 注入的全局依赖集合 */

/**
 * Web 应用入口（GET）。占位实现：替换为真实逻辑。
 * @param {GoogleAppsScript.Events.DoGet} e
 * @returns {GoogleAppsScript.Content.TextOutput}
 */
function doGet(e) {
  const V = /** @type {VendorApi} */ (/** @type {any} */ (globalThis).Vendor);
  return ContentService.createTextOutput(String(V.add(1, 2)));
}

/**
 * 时间驱动触发器 / 手动运行入口。占位实现。
 * @returns {void}
 */
function main() {
  const V = /** @type {VendorApi} */ (/** @type {any} */ (globalThis).Vendor);
  console.log(String(V.add(1, 2)));
}
