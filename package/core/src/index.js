export { add } from './helper/sample.js';
export { formatMoney } from './helper/money.js';

// 跨 workspace 复用的类型在入口再声明（exports 仅暴露 "."，故 @typedef 需在入口可达）。

/**
 * @typedef {import('./type/money.js').Money} Money
 */
