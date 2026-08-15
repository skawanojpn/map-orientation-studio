# GAS公開

`npm run build`でViteの本番バンドルを`gas/Index.html`へインライン化します。

1. `gas/Code.gs`、`gas/Index.html`、`gas/appsscript.json`をApps Scriptプロジェクトへ配置する。
2. Apps Scriptの「デプロイ」→「新しいデプロイ」→「ウェブアプリ」を選ぶ。
3. 実行ユーザーとアクセス範囲を確認してデプロイする。

地図データはWorld Atlasの外部URLから取得します。GASの権限設定やネットワーク制限で取得できない場合は、静的公開版を使用してください。
