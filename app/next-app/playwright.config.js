// @ts-check
import { defineConfig } from '@playwright/test';

/**
 * 受入测试配置：endpoint（Route Handler、Playwright `request`）+ end2end（页面、浏览器）。
 * 公共/外部服务在 dev 服务器启动时以 env 桩化（不在测试进程内 mock）。
 * jest 只匹配 *.test.js，故此处的 *.spec.js 不与单测冲突。
 */
export default defineConfig({
  testDir: './src',
  testMatch: ['endpoint/**/*.spec.js', 'end2end/**/*.spec.js'],
  use: { baseURL: 'http://127.0.0.1:3100' },
  webServer: {
    command: 'npm run dev -- -p 3100',
    url: 'http://127.0.0.1:3100',
    timeout: 120_000,
    reuseExistingServer: true,
  },
});
