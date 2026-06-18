// gas-app 暴露给 GAS 的依赖清单：esbuild 打包为 src/vendor.js 的全局 `Vendor`。
// 在此 re-export 即同时声明「运行时打包」与「类型」——追加依赖只改本文件（单一真实源）。
// workspace 共享代码（root/package/*）：
export * from '@app/core';
// export * from '@app/api-client';
// 第三方 npm 依赖：
// export * as dayjs from 'dayjs';
// export { z } from 'zod';
