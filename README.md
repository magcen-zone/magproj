# supa-starter

[supadevops](https://github.com/magcen-zone/supadevops) 的**部署中立**起步模板：npm workspaces + turborepo 的 monorepo（Next.js App Router + Expo Router + 共享库），全部 **JS + JSDoc**（无 TypeScript 语法）、**ESM**、契约优先 + TDD 规约就绪、`turbo run typecheck test` 为绿。

> 本仓库由 supadevops 插件的 `/supa-init` 命令消费。**一般无需手动 clone** —— 在你的项目目录运行 `/supa-init <next-名> <expo-名> <lib-名>`，它会以固定 tag 取得本模板（`degit`），并把占位名确定性重命名为你的项目名。

## 结构（占位名）

```
monorepo/
├─ package.json            # type:module, workspaces:["app/*","package/*"], packageManager
├─ turbo.json              # typecheck / test / lint / build / dev
├─ package-lock.json       # 已提交（锁定外部依赖的精确版本）
├─ app/
│  ├─ next-app/            # Next.js（src/app、jsconfig checkJs、jest ESM、next.config.mjs transpilePackages）
│  └─ expo-app/            # Expo Router（src/app、metro/babel/jest 为 .cjs、jest-expo、app.json web.output:single）
└─ package/
   └─ core/                # 共享库 @app/core（仅平台无关的逻辑/类型）
```

占位名 `next-app` / `expo-app` / `core`（npm 名 `@app/core`）会被 `/supa-init` 按你的项目名整体替换（目录名 + 文件内 token + app.json 标识 + 锁文件 workspace 项）。

## 直接使用（手动）

```bash
npm install
npx turbo run typecheck test      # 全 workspace 的 tsc --noEmit + jest（含 jest-expo）
npm run dev  -w app/next-app      # Next.js 开发服务器
npm run web  -w app/expo-app      # Expo web
```

## 版本与确定性

- 关键工具链固定**精确版本**以保证可重复：`jest` 锁定 `30.3.0`（规避 30.4.x 的 native-ESM `--experimental-vm-modules` 缺陷）。Next / React / Expo SDK 由 `package-lock.json` 锁定。
- 平台无关的 `package/core` 与 Expo 应用的 `jsconfig` 使用 `"types": []`（它们不是 Node 程序；避免 `@types/node` 在 monorepo 中经 `punycode` 触发 `checkJs` 误检）。Next 应用保留 `"types": ["node"]`。

## 手动再生成（维护者）

本模板按 supadevops 文档 §2–§6 一次性生成（`create-next-app` + `create-expo-app` + Expo 的 TS→JS+JSDoc 转换 + 固有配置），并确认 `turbo run typecheck test` 为绿后**冻结**。依赖陈旧时重复该步骤，绿后提交并打 tag（`/supa-init` 以 tag 固定取得）。
