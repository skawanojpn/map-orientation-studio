# Map Orientation Studio

`axis-mapping` と `azi-rotate` を統合した地図投影・方位比較アプリです。

## 開発

```bash
npm install
npm run dev
```

## ビルド

```bash
npm run build
```

`dist/`に静的公開用の成果物、`gas/Index.html`にGAS HtmlService用のインラインHTMLが生成されます。
また、`docs/`にはGitHub Pages用の静的成果物が生成されます。

## 現在の投影法

- 正距方位図法
- メルカトル図法
- Equal Earth図法
- 正射方位図法
- 正距円筒図法

投影法、中心地点、ロール、縮尺、テーマ、レイヤー設定はURLハッシュへ保存されます。生成されたURLを共有すると、同じ表示状態を復元できます。

## 公開

- Vercel：プロジェクトルートを接続し、Build Commandを`npm run build`、Output Directoryを`dist`にする。
- GitHub Pages：`docs/`を公開対象にする。`npm run build`で更新できる。
- GAS：`npm run build`後、`gas/`内の3ファイルをApps Scriptプロジェクトへ配置し、Webアプリとしてデプロイ。

地図データはWorld Atlasの外部URLから取得します。

## 外部サービスへの公開に必要な認証

- GitHub：GitHub CLIで`gh auth login`を完了し、公開先リポジトリのURLを設定する。
- Vercel：Vercel CLIでログインするか、GitHubリポジトリをVercelダッシュボードへ接続する。
- GAS：Apps Scriptエディタへ`gas/`の3ファイルを配置してWebアプリとしてデプロイする。
