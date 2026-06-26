# add-app — claude plugin 雛形（magproj）

magproj の claude plugin 開発用ワークスペース雛形。`/magdev:new <共通名> plugin` で `add-<共通名>` にリネームされ、magdev の **plugin プロファイル**（prd→spec→tdd→test→review）で開発する。

## 中身（commands 以外すべてプレースホルダ）
- `.claude-plugin/plugin.json` / `marketplace.json`（marketplace = `magcen-zone`）
- `skills/helper/`（**正本** = この plugin の仕様）+ `skills/example/`（プレースホルダ）
- `agents/example.md` / `hooks/hooks.json` / `.mcp.json` / `scripts/`（零/低依存 + jest）
- **`commands/` は無し**（公式現行ガイダンス: commands は legacy、skills/ が現行）

## 開発
- `package.json` + node_modules で plugin scripts の依存を管理。`npm run check`（typecheck + jest）に統合済み。
- 規約・配置・テスト層は magdev の `/magdev:helper`（plugin プロファイル）に従う。
