---
sidebar_position: 2
---

# Tournaments

Tournamentsでは、トーナメント情報の登録を行います。なお、TeamVS以外の専用項目は把握していません...

## 使い方

左上の`New`を押すと登録情報の入力欄が出てくるので入力します。

![入力欄]

### ① Acronym

osu!tournary設定ファイルの`tournament.cfg`内にある`acronym`と同じ設定にします。

### Name

script-chan内部で使用される名前です。わかる名前なら何でも構いません。

### Room Size

マルチ部屋作成時の最大スロット数です。

### Team Size

1チームあたりのマルチに入る人数です。

### Game Mode

大会のゲームモードを選択します。

### Win Condition

マルチ部屋のゲームの勝敗条件を選択します。

### Team Mode

対戦モードを選択します。

### Points for second ban

2回目のBanがある場合に何ポイント後2回目のBanをするかを入力します。

### All picks as freemod

すべてのピックにfreemodをつけます。

### All picks as Nofail

すべてのピックにNofailをつけます。

### Command Timer

手動で`mp!timer`コマンドを使用するときの秒数を入力します。

### Timer After Game

ゲーム終了後次のピックをするまでの選択時間の秒数を入力します。

### Timer After Pick

ピック後の全員が準備完了になるまでの準備時間の秒数を入力します。

### (Team ModeがBattleRoyaleの場合のみ) BR Initial Lives

### Welcome String

プレイヤーがマルチ部屋に入った際自動で送信されるメッセージを入力します。

### (Team ModeがHeadToHeadの場合のみ) Placing

### (Team ModeがHeadToHeadの場合のみ) Points given

## アイコンの説明

### ペンのマーク

情報の編集を行います。

### Discordのマーク

Webhookの有効設定をします。Webhooksで追加されたWebhook設定にチェックをつけることで、そのトーナメントでチェックを付けたwebhookに送信できます。

### ゴミ箱のマーク

トーナメントを削除します。
