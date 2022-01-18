---
sidebar_position: 1
---

# script-chanのインストール方法

script-chanというレフェリー支援ソフトがあります。実際にさまざまな大会でも使用されています。残念ながら現時点で日本語が対応していませんが、それでもかなり有用性のあるものなので紹介します。

## 1, レポジトリからダウンロードする

[GitLabのレポジトリ](https://git.cartooncraft.fr/shARPII/script-chan/-/releases)に移動し最新バージョンの`script_chan_<バージョン>.zip`をダウンロードします。ダウンロードしたファイルを解凍するだけでインストールが完了します。解凍したフォルダーはわかりやすい場所に保存しておきましょう。

## 初期設定

`script-chan2.exe`をダブルクリックして起動します。初回起動は少々時間がかかります。

起動が完了したら、左上の横棒3本線を押してメニューバーを出します。メニューのSettingsを押して初期設定をします。

### 1, APIキーを取得して設定する

※すでに取得済みの場合取得の作業は必要ありません。

`API Key`欄の横にある`Get API key`を押してAPIキーを取得します。

:::danger フォーラムに強制移動する

ログイン後フォーラムに移動する場合、<https://old.ppy.sh/p/api>に移動してみて取得できるか試してみてください。

:::

取得するとサイトに`API Key: 5s4fd1e...`という謎の文字列が生成されるのでそれを選択コピーをしてscript-chanのAPI Keyの欄に貼り付けします。横の`Test`を押して実際に使えるかを確認できます。

### 2, IRCパスワードを取得する

※すでに取得済みの場合取得の作業は必要ありません。

`IRC Password`欄の横にある`Get IRC password`を押してパスワードを取得します。Account Verificationが出るので認証をします。

:::danger Begin Email Verificationを押したのに入力に移動しない！

おそらくバグです。でも手動で治す方法はあります。

`F12`を押して開発者ツールを表示させます。`Ctrl+Shift+C`を押してマウスで`Begin Email Verification`の枠をクリックします。すると`<div class="submit-area">`の要素に当たるので、`<div class="submit-area">`の文字を右クリックして属性の編集を押して消さず文末に`style="display:none"`を追加します。すると枠が消えるので、`<div class="submit-area">`要素の下にある要素`<div id="authentication" style="display:none">`の`style="display:none"`を同じ要領で**消します**。すると入力欄が表示されるのでいつもどおり入力して認証します。

:::

取得するとサイトにパスワード`Server Password: 2gf5g...`が生成されるのでそれを選択コピーをしてscript-chanの`IRC Password`の欄に貼り付けします。左の`IRC Username`は現在のosuの名前を入力します。
