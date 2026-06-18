// @ts-check

/**
 * 取得 src/vendor.js 在运行时注入的全局依赖集合。
 * 类型源为 vendor-pack.js（单一真实源，与打包内容自动一致）。
 * @returns {typeof import('../vendor-pack.js')}
 */
function deps() {
  /** @type {any} */
  const g = globalThis;
  return g.Vendor;
}

/**
 * Web 应用入口（GET）。占位实现：替换为真实逻辑。
 * @param {GoogleAppsScript.Events.DoGet} e
 * @returns {GoogleAppsScript.Content.TextOutput}
 */
function doGet(e) {
  return ContentService.createTextOutput(String(deps().add(1, 2)));
}

/**
 * 时间驱动触发器 / 手动运行入口。占位实现。
 * @returns {void}
 */
function main() {
  console.log(String(deps().add(1, 2)));
}
