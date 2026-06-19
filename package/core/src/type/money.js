/**
 * 共享类型示例：跨 workspace 复用的类型定义集中于 src/type，由入口 index.js 再声明对外暴露。
 * @module type/money
 */

/**
 * @typedef {object} Money
 * @property {number} amount - 金额（最小货币单位，整数）
 * @property {string} currency - ISO 4217 货币代码（如 'JPY'）
 */

export {};
