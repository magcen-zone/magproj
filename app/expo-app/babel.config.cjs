// @ts-check
// 必须为 CommonJS(.cjs)：Babel 同步加载配置，ESM(.mjs/type:module 的 .js) 会抛
// "only supported when running Babel asynchronously"（babel-jest/Metro/Expo 均同步执行）。
module.exports = (api) => {
  api.cache(true);
  return { presets: ['babel-preset-expo'] };
};
