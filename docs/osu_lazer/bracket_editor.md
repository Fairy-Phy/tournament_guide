---
sidebar_position: 6
---

# Bracket Editor

ここではトーナメントオーバーレイのBracket Editor画面について説明します。

Bracket Editorではブラケットデザインとマッチ情報の登録をします。

![Bracket Editor](/img/osu_lazer/bracket_editor.png)

## メイン画面

## なにもないところで右クリック

### ① Create new match

右クリック場所に新しくマッチを作成します。

### ② Reset teams

マッチの設定をリセットします。ただし、マッチ自体は残ります。

## マッチを右クリック

### ① Set as current

配信対象を選択したマッチに変更します。

### ② Join with

選択したマッチに勝利したチーム(プレイヤー)が次に行くマッチを線で結びます。選択したマッチ以外のマッチを選択することで青色の線を結ぶことができます。

### ③ Join with (loser)

選択したマッチに敗北したチーム(プレイヤー)が次に行くマッチを線で結びます。選択したマッチ以外のマッチを選択することで薄い黄色の線を結ぶことができます。

:::note 薄い黄色と濃い黄色の違い

薄い黄色は[Join with (loser)](#-join-with-loser)で結んだ際になる色です。濃い黄色は[Losers Bracket](#-losers-bracket)が付いているマッチ間を結ぶと表示されます。

薄い黄色はBracket Editorでのみ表示され、本番で使うBracketには表示されません。一方、濃い黄色は本番のBracketに表示されます。

:::

### ④ Remove

選択したマッチを削除します。

## マッチをドラッグアンドドロップ

マッチを移動できます。

## 右上の欄(LADDER)

### ① Team 1

赤チームに入るチーム(プレイヤー)を選択する欄です。

### ② Team 2

青チームに入るチーム(プレイヤー)を選択する欄です。

### ③ Round

マッチで使用するラウンド(マッププール)を選択する欄です。

### ④ Losers Bracket

選択しているマッチが敗者復活のブラケットの場合はトグルを付けます。主にダブルエリミネーション以上の形式で使用されます。

:::caution ラウンド名表記の注意

Losers Bracketのラウンド名はRounds Editorで新しく作成しなくても自動で『Losers～』のラウンド名が付きます。

:::

### ⑤ Match Time

マッチの開始時刻を入力します。この時刻はSchedule画面で使用されます。デフォルトでUTC時間表示になります。

時刻のフォーマットはISO 8601に沿って入力してください。ISO 8601については <https://qiita.com/kidatti/items/272eb962b5e6025fc51e> のSample1を参照してください。
