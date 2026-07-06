---
name: helper
description: この claude plugin の「仕様（正本 / single source of truth）」。/<plugin>:helper で概要・コマンド・規約を提示する（実行はしない）。プレースホルダ — magdev の plugin プロファイル（prd→spec→tdd→test→review）で中身を埋める。他の skill はすべて本仕様を唯一の参照元とする。
allowed-tools: Read
---

# <plugin> — 仕様（正本 / single source of truth）

> プレースホルダ。magdev helper と同じ役割＝この plugin の正本。各 skill は規約をコピーせずここを引く。`/magdev:new <共通名> plugin` でリネーム後、magdev の plugin プロファイルで開発する。

## この plugin とは
（目的・対象ユーザを埋める）

## コマンド / skills
| コマンド | 役割 |
|---|---|
| `/<plugin>:helper` | 本仕様を提示 |
| …（追加） | … |

## コンポーネント
- `skills/` — skill 群（`helper` = 正本 + 機能 skill）
- `agents/` — サブエージェント定義（プレースホルダ）
- `hooks/hooks.json` — イベントフック（プレースホルダ）
- `.mcp.json` — MCP サーバ定義（プレースホルダ）
- `scripts/` — 低/零依存スクリプト（`package.json` + node_modules 管理）
- **`commands/` は持たない**（公式現行ガイダンス: commands は legacy、skills/ が現行）

## 規約
（この plugin 固有の規約をここに。開発フロー・配置・テストは magdev helper に従う）
