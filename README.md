# magproj

[magdev](https://github.com/magcen-zone/magdev) の**デプロイ中立な monorepo テンプレート**。npm workspaces による monorepo（Next.js App Router + Expo Router + Google Apps Script + 共有ライブラリ）で、すべて **JS + JSDoc**（TypeScript 構文なし）・**ESM**・契約優先 + TDD 規約 ready・`npm run check` が緑。

> 本リポジトリは magdev プラグインの **`/magdev:new`** が消費します。**通常は手動 clone 不要** —— プロジェクトのディレクトリで `/magdev:new <共通名>` を実行すると、固定 tag で本テンプレを取得（`degit`）し、プレースホルダ名を決定論的にあなたのプロジェクト名へリネームします。

## 構成（プレースホルダ名）

```
magproj/
├─ package.json            # type:module, workspaces:["app/*","shared/*"], scripts(typecheck/test/check/...)
├─ package-lock.json       # コミット済み（外部依存の精密バージョンをロック）
├─ app/
│  ├─ next-app/            # Next.js（src/app、jsconfig checkJs、jest ESM、next.config.js transpilePackages）
│  ├─ expo-app/            # Expo Router（src/app、metro/babel.config.cjs、jest-expo、app.json web.output:single）
│  └─ gas-app/             # Google Apps Script（src/app=push 入口、vendor-pack.js→esbuild→src/app/vendor.js、clasp）
└─ shared/
   └─ fun-app/             # 共有ライブラリ @shared/fun-app（プラットフォーム非依存のロジック/型）
```

各 app / 共有ライブラリの `src/` は同形（`type/ helper/ action/ component/ endpoint/ end2end/ app/`、各 `.gitkeep` 付き。Expo の `end2end` は `web/`・`native/`）。

## リネーム規則（`/magdev:new`）

プレースホルダ名は統一パターン **`<prefix>-app`**（prefix = `next` / `expo` / `gas` / `fun`）。`/magdev:new <共通名>` が `app` 部分を共通名へ置換する:

```
/magdev:new shop
  app/next-app   → app/next-shop
  app/expo-app   → app/expo-shop
  app/gas-app    → app/gas-shop
  shared/fun-app → shared/fun-shop   （npm 名 @shared/fun-app → @shared/fun-shop）
```

`app` は共通名にできません（プレースホルダを再生成してしまうため）。npm スコープ `@shared` は不変です。

## 直接使う（手動）

```bash
npm install
npm run check                     # = npm run typecheck && npm run test
                                  #   = 全 workspace の tsc -p jsconfig.json --noEmit（型）+ jest（単体・jest-expo 含む）
npm run dev   -w app/next-app     # Next.js 開発サーバー
npm run web   -w app/expo-app     # Expo web
npm run build -w app/gas-app      # GAS: esbuild で src/app/vendor.js を生成（その後 clasp push。先に scriptId バインドが必要）
```

## バージョンと決定性

- **turborepo なし**: JS+JSDoc はビルド産物を持たない（`tsc --noEmit` + `jest` を直接実行）。gate は npm workspaces の `npm run check`（= `typecheck && test`）を全量実行（sub-second）で、簡潔かつ決定論的。
- 主要ツールチェーンは**精密バージョン固定**で再現性を担保: `jest` は `30.3.0` 固定（30.4.x の native-ESM `--experimental-vm-modules` 不具合を回避）。Next / React / Expo SDK は `package-lock.json` でロック。
- プラットフォーム非依存の `shared/fun-app` と Expo アプリの `jsconfig` は `"types": []`（Node プログラムではないため。`@types/node` 経由の `punycode` が `checkJs` 誤検出を起こすのを回避）。Next アプリは `"types": ["node"]` を保持。
- **拡張子 / 型検査規約**: `type:module` 下では一律 `.js`。`.cjs` は Expo の `babel.config` / `metro.config` のみ（同期ロードで ESM 不可）。per-file `// @ts-check` は使わない（jsconfig の `checkJs` で一括把握）。

## 手動再生成（維持者向け）

本テンプレは magdev のドキュメントに従って一度だけ生成（`create-next-app` + `create-expo-app` + Expo の TS→JS+JSDoc 変換 + 固有設定）し、`npm run check` 緑を確認して**凍結**したもの。依存が陳腐化したらその手順を繰り返し、緑を確認後にコミットして tag を打つ（`/magdev:new` は tag で固定取得する）。
