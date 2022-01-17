---
sidebar_position: 14
---

# Drawings

ここではトーナメントオーバーレイのDrawings画面について説明します。

Drawingsは実際にオーバーレイで使用するグループステージを決定する際に使用する画面です。単純に予選をする場合には使用しないので大会の方針によって使用しない可能性があります。

![Drawings](/img/osu_lazer/drawings.png)

## 初期設定

:::caution 使用する前に

『プリセットフォルダー』という単語が出てきます、詳しくは[こちら](./common_feature.md#プリセットフォルダー)をご覧ください。

:::

### 1, ファイルを作成

プリセットフォルダー直下に空の`drawings.txt`と`drawings.ini`を作成します。

```txt title="ディレクトリツリー (%APPDATA%\osu\tournaments\<プリセット名>)"
.
├── drawings.txt ←
└── drawings.ini ←この2つがあればOK
└── bracket.json
```

### 2, `drawings.txt`を編集する

`drawings.txt`はグループステージに入れるチーム(プレイヤー)の情報を入力します。Team Editorとは別に作成しなければいけませんが、基本的にはTeam Editorと同じような内容を入力します。

```txt title="drawings.txt"
flag名 : チーム(プレイヤー)名 : チーム(プレイヤー)の略称名
例: JP : Japan : JPN
```

### 3, `drawings.ini`を編集する

`drawings.ini`にはグループステージの設定を入力します。

```ini title="drawings.ini"
// 合計グループ数
Groups = 4
// 1グループに対して何チーム(プレイヤー)入るか
TeamsPerGroup = 2
```

## 使い方(Control Panel)

`drawings.txt`に書かれたチーム(プレイヤー)を`GROUP A`→`GROUP B`という順番にシャッフルを回して振り分けていきます。振り分けられた結果はプリセットフォルダーに`drawings_results.txt`という名前で保存されています。

:::danger この項目について

このControl Panelは<u>**上記の初期設定を済ませた状態でosu!Lazerを起動しないと表示されません**</u>！

:::

### ① Begin random

シャッフルを開始します。Stopを押さない限りは回り続けたままなのでご注意ください。

### ② Stop random

シャッフルを停止し、グループに振り分けます。

### ③ Reload

`drawings.txt`を再読込します。シード順で割り振る場合に`drawings.txt`を入れ替えることで順番に割り振ることができます。割り振ったチーム(プレイヤー)を`drawings.txt`から削除しても消えません。

### ④ Reset

割り振った情報をリセットし、`drawings_results.txt`に書かれた情報も削除します。
