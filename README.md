# supa-starter

[supadevops](https://github.com/magcen-zone/supadevops) 的**部署中立**起步模板：npm workspaces 的 monorepo（Next.js App Router + Expo Router + Google Apps Script + 共享库），全部 **JS + JSDoc**（无 TypeScript 语法）、**ESM**、契约优先 + TDD 规约就绪、`npm run check` 为绿。

> 本仓库由 supadevops 插件的 `/supa-init` 命令消费。**一般无需手动 clone** —— 在你的项目目录运行 `/supa-init <next-名> <expo-名> <gas-名> <lib-名>`，它会以固定 tag 取得本模板（`degit`），并把占位名确定性重命名为你的项目名。

## 结构（占位名）

```
monorepo/
├─ package.json            # type:module, workspaces:["app/*","package/*"], scripts(typecheck/test/check/...)
├─ package-lock.json       # 已提交（锁定外部依赖的精确版本）
├─ app/
│  ├─ next-app/            # Next.js（src/app、jsconfig checkJs、jest ESM、next.config.js transpilePackages）
│  ├─ expo-app/            # Expo Router（src/app、metro/babel.config.cjs、jest-expo、app.json web.output:single）
│  └─ gas-app/             # Google Apps Script（src/app=push 入口、vendor-pack.js→esbuild→src/app/vendor.js、clasp）
└─ package/
   └─ core/                # 共享库 @app/core（仅平台无关的逻辑/类型）
```

每个 app/lib 的 `src/` 同形（`helper/ action/ component/ type/ endpoint/ end2end/ app/`，各含 `.gitkeep`）。占位名 `next-app` / `expo-app` / `gas-app` / `core`（npm 名 `@app/core`）会被 `/supa-init` 按你的项目名整体替换。

## 直接使用（手动）

```bash
npm install
npm run check                     # 全 workspace 的 tsc --noEmit + jest（含 jest-expo）
npm run dev   -w app/next-app     # Next.js 开发服务器
npm run web   -w app/expo-app     # Expo web
npm run build -w app/gas-app      # GAS：esbuild 打包为 src/app/vendor.js（之后 clasp push，需先绑定 scriptId）
```

## 版本与确定性

- **无 turborepo**：JS+JSDoc 无构建产物（tsc `--noEmit` + jest 直跑），gate 以 npm workspaces 的 `npm run check`（= `typecheck && test`）全量执行（sub-second），简洁且确定。
- 关键工具链固定**精确版本**以保证可重复：`jest` 锁定 `30.3.0`（规避 30.4.x 的 native-ESM `--experimental-vm-modules` 缺陷）。Next / React / Expo SDK 由 `package-lock.json` 锁定。
- 平台无关的 `package/core` 与 Expo 应用的 `jsconfig` 使用 `"types": []`（它们不是 Node 程序；避免 `@types/node` 经 `punycode` 触发 `checkJs` 误检）。Next 应用保留 `"types": ["node"]`。
- **扩展名/类型检查规范**：`type:module` 下一律 `.js`；`.cjs` 仅限 Expo 的 `babel.config`/`metro.config`（同步加载不接受 ESM）；不使用 per-file `// @ts-check`（统一由 jsconfig `checkJs` 把关）。

## 手动再生成（维护者）

本模板按 supadevops 文档一次性生成（`create-next-app` + `create-expo-app` + Expo 的 TS→JS+JSDoc 转换 + 固有配置），并确认 `npm run check` 为绿后**冻结**。依赖陈旧时重复该步骤，绿后提交并打 tag（`/supa-init` 以 tag 固定取得）。
