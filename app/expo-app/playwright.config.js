// @ts-check
import { defineConfig } from '@playwright/test';

/**
 * Expo web 的 end2end 配置骨架（浏览器）。
 * Expo native 的 end2end 用 Maestro（src/end2end/native/*.yaml），不经 Playwright。
 * 注意：webServer 的 command/port 需按 Expo web dev 服务器（默认 Metro 8081）确认后再启用。
 */
export default defineConfig({
  testDir: './src/end2end/web',
  testMatch: ['**/*.spec.js'],
  use: { baseURL: 'http://127.0.0.1:8081' },
  // webServer: { command: 'npm run web', url: 'http://127.0.0.1:8081', timeout: 180_000, reuseExistingServer: true },
});
