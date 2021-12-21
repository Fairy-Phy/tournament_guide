# osu! トーナメントガイド

日本語で書かれたosu!のトーナメントを開催するための技術系の部分のガイドです

このサイトのフレームワークには[Docusaurus 2](https://docusaurus.io/)を使用してるよ！

## つかいかた？

### いんすとーる

```sh
yarn
```

### ろーかるでかいし

```sh
yarn start
```

このコマンドはローカルで動作し、コマンド実行後既定のブラウザで開きます。実行中はサーバーをいちいち再起動することなくファイルが保存された段階で自動的に反映されます。

### びるど

```sh
yarn build
```

このコマンドは`build`ディレクトリに静的コンテンツを生成し、レンタルサーバーなどで使用することができます。

### でぷろい

SSHの場合:

```sh
USE_SSH=true yarn deploy
```

SSHではない場合:

```sh
GIT_USER=<Githubユーザー名> yarn deploy
```

GitHub pagesを使用している場合はこのコマンドでサイトを構築して`gh-pages`ブランチにプッシュするのが便利らしい。

## らいせんす

これはApache License 2.0っていうのでライセンスされてるって！

-> <https://github.com/Fairy-Phy/tournament_guide/blob/main/LICENSE>
