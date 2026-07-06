/**
 * プレースホルダ・ヘルパー（零依存）。実際の plugin スクリプトに置き換える。
 * 第三者依存が必要なら package.json に追加し node_modules で管理する。
 * @param {string} input - 入力文字列
 * @returns {string} 前後空白を除去した文字列
 */
export function example(input) {
  return input.trim();
}
