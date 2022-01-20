---
sidebar_position: 3
---

# Setup

ここではトーナメントオーバーレイのSetup画面について説明します。

Setupではオーバーレイを使う際の初期設定的なものをします。

![Setup](/img/osu_lazer/setup.png)

## ① Current IPC source

トーナメントクライアントのフォルダーを指定するところです。フォルダーを指定をするポップアップに少々癖がありますが、基本的には`..`を押すと表示されている階層フォルダーの上の階層に移動し、フォルダーを押すとそのフォルダーに移動します。インストールされているトーナメントクライアントのフォルダー階層に移動したら`Select stable path`を押すことで適切な場合設定できます。

:::caution 注意

指定する際に、トーナメントクライアントに空の`ipc.txt`を作成する必要があります。作成をしないと`Select stable path`を押しても以下のメッセージが表示されて指定ができません。

![IPC Invalid](/img/osu_lazer/ipc_invalid.png)

```txt title=日本語訳
選択したフォルダは有効なIPCディレクトリじゃないよ！

osu!のCutting Edge版がインストールされているフォルダーを選択して、
その中に空のipc.txtファイルがあることを確認してね！なかったら作成しよう！
```

:::

## ② Current User

現在ログインしているユーザーが表示されます。もしログインされていない場合はログインしましょう。

## ③ Ruleset

大会で使用するゲームモードを指定します。

## ④ Current tournament

プリセットを選択する欄です。プリセットを新しく作成するには`%APPDATA%\osu\tournaments`に新しくフォルダーを作成するだけで作成できます。作成した後再起動しないと表示されません。

別のプリセットを選択後、`Close osu!`を押して閉じた後起動すると選択したプリセットに変更されています。

## ⑤ Stream area resolution

メイン画面のサイスを変更します(<u>**左右のツールバーはサイズに含まれないので注意してください！**</u>)。

変更する際は縦の解像度の値を入力し、`Set height`を押します。そうすると自動的にメイン画面が16:9で合わせられたサイズにウィンドウが変更します。ツールバーがあるので少し横長になるので、モニターが`1920x1080`の場合は`1280x720`で設定することを推奨します。