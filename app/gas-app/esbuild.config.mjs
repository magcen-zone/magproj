import { build, context } from 'esbuild';
import { fileURLToPath } from 'node:url';
import { dirname } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));

/** @type {import('esbuild').BuildOptions} */
const options = {
  // 内联入口：仅把依赖（@app/core 等）打包进 src/vendor.js，暴露为全局 Vendor。
  stdin: { contents: "export * from '@app/core';", resolveDir: __dirname, loader: 'js' },
  bundle: true,
  format: 'iife',
  globalName: 'Vendor',
  target: 'es2020',
  outfile: 'src/vendor.js',
};

if (process.argv.includes('--watch')) {
  const ctx = await context(options);
  await ctx.watch();
  console.log('esbuild watching…');
} else {
  await build(options);
}
