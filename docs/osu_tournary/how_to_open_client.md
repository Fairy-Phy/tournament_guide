---
sidebar_position: 1
---

# osu!tourneyの開き方

ここではosu!tournaryクライアントの起動方法について説明します。

:::danger 開始する前に

osu!tourneyクライアントはosu!サポータータグを持っていないと開くことができません！

持っていなくても開けるケースがあるようですが基本的には持っていないとその旨を伝えるウィンドウが表示されて開けません。

:::

## 1. osu!をインストールする (推奨)

※この工程はあくまで推奨項目です。すでにインストールされているosu!でも可能なためそちらで実行することも可能ですが、本番環境ではクライアントは分けることを推奨します。

[公式サイト](https://osu.ppy.sh/home)からosu!インストーラーをダウンロードしosu!をインストールします。

インストール先はわかりやすいところに入れておくと後に便利になります。

:::caution インストールが完了したら

ユーザーアカウント制御が発動し、管理者権限を求められるシーンがありますがすべて『いいえ』を選択してください。

もし許可してしまうと、`.osz`や`.osr`といった拡張子の既定のソフトウェアが元あるosu!からインストールしたosu!に切り替わってしまいます。

:::

## 2. インストールしたosu!でログインをする

1の工程をした方は自動的にosu!が起動します、していない方はすでに持っているosu!を起動してください。

banchoサーバーにログインします。このとき、『ユーザーとパスワードの保存』のチェックボックスを忘れずにチェックしておきましょう。

ログインが完了したら終了してしまって構いません。

## 3. `tournament.cfg`を作成する

エクスプローラーでosu!のインストールフォルダーを開き、`右クリック`→`新規作成`→`テキストドキュメント`でtxtを作成し名前を`tournament.cfg`にします。 (拡張子が表示されていない場合設定で表示させてください)

作成したとき中身は空のままにしておきます。

## 4. osu!を開く

`tournament.cfg`がフォルダー内にある状態でosu!を開くと次のような文章のウィンドウが表示されます。

```log
Please note that the streaming client is only meant for use by !  tournament hosts and streamers. It is not made for end-users and we cannot support high volumes of concurrent use. 
(以下日本語訳)
ストリーミングクライアントは、トーナメント主催者とストリーマーのみが使用することを目的としています。それはエンドユーザーのために作られたものではなく、私たちは大量の同時使用をサポートすることはできません。
```

`OK`を押します、このメッセージは初回のみでこれをOK押すと空の`tournament_accepted`ファイルが作成されます。

OK押すと晴れてトーナメントマネージャー(osu!tournaryクライアント)が起動します、これでトーナメントクライアントの起動は完了です。各設定は`tournament.cfg`に起動した際自動的に記述されています。設定の説明は[`tournament.cfg`説明](./tournament_cfg.md)に書いてあります。