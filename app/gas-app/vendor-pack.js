// gas-app 的 GAS 运行时打包清单：esbuild 打包为 src/app/vendor.js 的全局 `Vendor`。
// 在此以「命名空间」re-export 即同时声明「运行时打包」与「类型」——单一真实源，
// 经 deps()(=globalThis.Vendor) 访问（如 deps().helper.xxx / deps().lib.xxx）。
// 自 workspace 的纯逻辑（用 Jest 固化，与 next/expo 同一 TDD）：
export * as helper from './src/helper/index.js';
// export * as action from './src/action/index.js'; // 追加 src/action 逻辑时取消注释
// workspace 共享库（root/shared/*）：
export * as lib from '@app/core';
// 第三方 npm 依赖：
// export * as dayjs from 'dayjs';
// export * as z from 'zod';
