// 必须为 CommonJS(.cjs)：Expo/Metro 以同步 require 加载 metro.config（不支持 ESM）。
const { getDefaultConfig } = require('expo/metro-config');

module.exports = getDefaultConfig(__dirname);
