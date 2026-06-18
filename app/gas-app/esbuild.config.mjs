import { build, context } from 'esbuild';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));

/** @type {import('esbuild').BuildOptions} */
const options = {
  // 依赖清单见 vendor-pack.js（workspace + npm 都在那里 re-export）。
  entryPoints: [join(__dirname, 'vendor-pack.js')],
  bundle: true,
  format: 'iife',
  globalName: 'Vendor',
  target: 'es2020',
  outfile: join(__dirname, 'src/vendor.js'),
};

if (process.argv.includes('--watch')) {
  const ctx = await context(options);
  await ctx.watch();
  console.log('esbuild watching…');
} else {
  await build(options);
}
