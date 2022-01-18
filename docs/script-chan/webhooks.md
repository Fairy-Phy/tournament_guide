---
sidebar_position: 6
---

# Webhooks

Webhooksでは、Discordにマッチの情報を送信する際の送信設定を行います。

## 使い方

左上の`New`を押すと登録情報の入力欄が出てくるので入力します。

![入力欄](/img/script_chan/webhook.png)

### Name

script-chanで表記される名前です。

### URL

DiscordでWebhookを追加した際に生成されるURLを入力します。

### 送信を許可するものにチェックを付ける

#### 1, Match created

マッチが作成された際にマッチが作成された旨を自動送信します。基本いらないのでチェックを外しておきましょう。

#### 2, Ban recap

Banの要約を送信するかどうか。

#### 3, Pick recap

ピックの要約を送信するかどうか。

#### 4, Game recap

ゲーム結果の要約を送信するかどうか。

### Username

Discordで表示される名前を入力します。未入力の場合はDiscordのWebhook作成時に入力した名前が使用されます。

### Avater

Discordで使用されるアバター画像を**URL形式**で入力します。未入力の場合はDiscordのWebhook作成時に設定したアバターが使用されます。

### Footer text

Embedの下の方に表示されるテキスト文を入力します。未入力でも大丈夫です。

### Footer icon

Embedの下の方に表示されるアイコン画像を**URL形式**で入力します。未入力でも大丈夫です。

### Win image/gif

ゲームが終了した際の`Game recap`で表示される画像(gif)を**URL形式**で入力します。デフォルトが一番しっくりきます。

### Author icon

Embedの上の方に表示されるアイコン画像を**URL形式**で入力します。未入力でも大丈夫です。

## アイコンの説明

### ペンのマーク

情報の編集を行います。

### ゴミ箱のマーク

Webhookを削除します。
