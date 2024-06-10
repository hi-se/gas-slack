# 概要

GAS 用のプロジェクトテンプレート


## 前提要件

- VSCodeがインストールされている
- VSCodeの拡張機能 [Dev Containers](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers)がインストールされている
- Dockerがインストールされている




## Getting Started

### Clone Repository

1. RepositoryのURLをコピーする
1. VSCodeのコマンドパレットで `Clone Repository in Container` と入力し、`Dev Containers: Clone Repository in Container Volume…` を選択
1. コピーしたGitHubのURLをペーストして Enter



### 初期設定

```
yarn
yarn clasp login
```


### 新規GASプロジェクトを作成する場合

1. 以下のコマンドを実行（ `{projectName}` は別の値に置き換える）

```
yarn clasp create --title={projectName}
mv build/.clasp.json .clasp.prod.json
```

2. build/appsscript.jsonをプロジェクトにあわせて修正する
  - 特に `oauthScopes`

3. 必要に応じてdev環境を用意する


### GoogleDrive上にある既存のGASプロジェクトを利用する場合

1. プロジェクトのrootDirに.clasp.prod.json（必要に応じて.clasp.dev.json）を手動で作成する
1. build/appsscript.jsonをプロジェクトにあわせて修正する
  - 特に `oauthScopes`
