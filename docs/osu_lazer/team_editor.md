---
sidebar_position: 4
---

# Team Editor

ここではトーナメントオーバーレイのTeam Editor画面について説明します。

Team Editorでは参加するチームとプレイヤーの情報を登録します。

![Team Editor](/img/osu_lazer/team_editor.png)

## メイン画面

### ① Name

チーム(プレイヤー)名を入力する欄です。

### ② Acronym

いろんな場面で使われる略称名です。プレイヤー名の場合いい感じにしてあげましょう。

### ③ Flag

そのチーム(プレイヤー)の国を指定します。国名は大文字で、`ISO 3166-1 alpha-2`基準で入力します。特殊な国名として`__`が存在し、不明な国の場合に使うことができます。

:::note カスタムフラグアイコンを使用する

カスタムフラグアイコンを使用するには、プリセットフォルダーに`Flags`フォルダーを作成して、任意の名前で画像ファイルを入れるだけです。

使用するには、Flagの入力欄に画像ファイルの名前と同じ名前を入れることで使用できます。

:::

### ④ Seed

簡単に言えば予選の総合順位を入力する場所です。Seedingで使用するテキストですが、単純にこの入力欄に入力された文字のままSeedingで使われるため、順位を入力する場合は`#1`のように入力したほうが良いです。

### ⑤ Last Year Placement

前回開かれたときの最終順位を入れる欄です。初回の場合は全員1位にしたりするのがいいです。

### ⑥ Add player

チームにプレイヤーを追加します。チームではない場合も追加しておいた方が良いです。

### ⑦ Delete Team

チーム(プレイヤー)を削除します。

### ⑧ User ID

参加するプレイヤーのユーザーIDを入力します。ユーザーIDはosu!の公式webページのプレイヤープロフィールのURLに`https://osu.ppy.sh/users/<ユーザーID>`という形で存在します。

### ⑨ Delete Player

プレイヤーを削除します。

## Control Panel

### ① Add new

チーム(プレイヤー)を作成します。

### ② Clear all

追加したチーム(プレイヤー)をすべて削除します。

### ③ Add all countries

内部に登録されている全部の国を一度に追加します。世界大会などに有効です。

## Edit seeding results

この画面は予選結果を入力する画面になります。予選が存在しない場合は入力する必要ありません。

![ESR](/img/osu_lazer/esr.png)

## メイン画面

### ① Mod

Mod名を入力します。FreeModなら`FM`だったり、NoModだったら`NM`と書いたりします。

### ② Seed(Mod別)

そのMod内での順位を入力する欄です。

### ③ Add beatmap

Modに対応した譜面を追加します。

### ④ Beatmap ID

譜面IDを入力します。BeatmapIDとBeatmapsetIDが存在しますが、こちらではBeatmapIDの方になります。BeatmapIDはosu!の公式webページの譜面情報のURLに`https://osu.ppy.sh/beatmapsets/<Beatmap*set*ID>#<モード名>/<BeatmapID>`という形で存在します。

### ⑤ Seed(譜面別)

その譜面内での順位を入力する欄です。

### ⑥ Score

その譜面のスコアを入力する欄です。

### ⑦ Delete Beatmap

譜面を削除します。

### ⑦ Delete result

そのModの結果を削除します。

## Control Panel

### ① Add new

結果を追加します。

### ② Clear all

全部の結果を削除します。
