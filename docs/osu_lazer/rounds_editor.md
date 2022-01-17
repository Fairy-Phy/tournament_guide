---
sidebar_position: 5
---

# Rounds Editor

ここではトーナメントオーバーレイのRounds Editor画面について説明します。

Rounds Editorでは大会で使うラウンドごとのマッププールを登録します。

![Rounds Editor](/img/osu_lazer/rounds_editor.png)

## メイン画面

### ① Name

ラウンド名を入力する欄です。

### ② Description

ラウンドの説明です、Bracketに表示されます。基本的には「Week 1」のように何周目にあるかなどを入力します。

### ③ Start Time

ラウンドの開始時刻を入力します。デフォルトでUTC時間表示になります。

時刻のフォーマットはISO 8601に沿って入力してください。ISO 8601については <https://qiita.com/kidatti/items/272eb962b5e6025fc51e> のSample1を参照してください。

### ④ beat of

ラウンドのBOを入力する欄です。BOについては[こちら](../osu_tournary/feature.md#-ベスト)をご覧ください。

### ⑤ Add beatmap

譜面を追加します。

### ⑥ Beatmap ID

譜面IDを入力します。BeatmapIDとBeatmapsetIDが存在しますが、こちらではBeatmapIDの方になります。BeatmapIDはosu!の公式webページの譜面情報のURLに`https://osu.ppy.sh/beatmapsets/<Beatmap*set*ID>#<モード名>/<BeatmapID>`という形で存在します。

### ⑦ Mods

Mod名を入力します。FreeModなら`FM`だったり、NoModだったら`NM`と書いたりします。

:::note カスタムアイコンを使用する

[スキニング](./skining#modのカスタムアイコン)をご覧ください。

:::

### ⑧ Delete Beatmap

譜面を削除します。

### ⑨ Delete Round

ラウンドを削除します。

## Control Panel

### ① Add new

新しくラウンドを作成します。

### ② Clear all

すべてのラウンドを削除します。
