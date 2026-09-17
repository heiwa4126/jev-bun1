# jev-bun1

TypeSafe の Jev を TypeScript API で使ってみる。

## 開発

初期設定:

```bash
# 依存パッケージをインストール
bun ci
# APIキーを設定
cp .env.example .env
## で .env を編集
```

最初の実行:

```bash
# https://docs.typesafe.ai/sdk/javascript にあるサンプルそのまま
bun run ex0
```

上記の実行例:

```console
$ bun run ex0
billing
```

This project was created using `bun init` in bun v1.4.2.
[Bun](https://bun.com) is a fast all-in-one JavaScript runtime.
