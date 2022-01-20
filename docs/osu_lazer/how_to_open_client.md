---
sidebar_position: 1
---

# トーナメントオーバーレイの開き方

ここではosu!lazerに付属されているトーナメントオーバーレイの起動方法について説明します。

:::caution 注意

本番でこのトーナメントオーバーレイを使用する場合、osu!tournaryクライアントのバージョンをStableからCutting Edgeに変更する必要があります。

これは後に説明するIPCを使用する際に必要なためです。

:::

## 1. osu!lazerをGitHubからインストーラーをダウンロードする

GitHubにある[ppyの公式レポジトリ](https://github.com/ppy/osu)からosu!lazerのインストーラーをダウンロードします。

念の為ですがwindowsのインストーラーのURLは[こちら](https://github.com/ppy/osu/releases/latest/download/install.exe)です。

## 2. インストーラーを実行してインストールする

インストールが完了すると自動でosu!lazerが起動します。

インストールする際、インストールパスの指定はできません。下記のパスに保存されます。

osu!lazerがインストールされるフォルダー: `%LOCALAPPDATA%\osulazer`

osu!lazerの譜面・設定・スクリーンショット等が保存されるフォルダー: `%APPDATA%\osu`

## 3. 設定を済ませる

banchoにログインしておきましょう。その際に自動ログインをつけてログインをしてください。

ウィンドウサイズはウィンドウモードにして見やすい程度に小さくしておくことをオススメします。

## 4. トーナメントモード用ショートカットを作成

osu!lazerを閉じてosu!lazerのショートカットを作成します。作成したショートカットを右クリック→プロパティでプロパティを開き、リンク先の欄に`--tournament`を文末に半角スペースをつけて追加します。

最終的に下記の画像のようになっていれば大丈夫なはずです。

![プロパティ](/img/osu_lazer/pro.png)

## 5. 作成したショートカットで起動する

正しくできていれば下記の画面が出てきます。それがトーナメントモードになります。

:::caution 注意

この時点で、前記したウィンドウサイズを小さくする作業がないとフルスクリーンで起動します。トーナメントモードでは、通常の16:9のアスペクト比よりも横に長くなる関係上Setupで解像度を変更しようとしても変更のボタンが押せないため、実質的に変更ができない状態になります。(マルチディスプレイの場合はやり方によってはできます)

そのため、事前にウィンドウサイズを事前に変更する必要があります。

:::

![トーナメントモード](/img/osu_lazer/tournament.png)