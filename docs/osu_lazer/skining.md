---
sidebar_position: 16
---

# スキニング

ここではトーナメントオーバーレイのスキニングについて説明します。

:::caution 事前知識が必要です

『プリセットフォルダー』という単語が出てきます、詳しくは[こちら](./common_feature.md#プリセットフォルダー)をご覧ください。

:::

:::note 細かい部分の変更をしたい場合

細かい部分(文字フォント・時間表記等)を変更したい場合ソースコードを変更する必要があります。ソースコードはC#で書かれていてプログラミングに無縁な方は大変なので『どうしてもこうしたいんだ...！』という方以外は通常使用をオススメします。

一応少しですが[こちら](#限界改変者向け-ソースコード変更)に載せておきますので良ければご覧ください...

:::

## 背景のスキニング

osu!lazerでは背景は動画ファイルで動作します(**画像ファイルでは動作しません**)。具体的にどの形式が動作するかはわかりませんが`.mp4`での使用が無難だと思います。

動画ファイルはプリセットフォルダーの`Videos`フォルダーに入れ、各画面に対応するファイル名である必要があります。

### 各画面に対応した動画ファイル名一覧

* `schedule.mp4`

  Schedule

* `ladder.mp4`

  Bracket, Bracket Editor

* `teamintro.mp4`

  Team Intro

* `seeding.mp4`

  Seeding

* `mappool.mp4`

  Map Pool

* `gameplay.mp4`

  Gameplay

* `teamwin-blue.mp4`

  Win (青チームがマッチ勝利した場合に表示される動画)

* `teamwin-red.mp4`

  Win (赤チームがマッチ勝利した場合に表示される動画)

* `drawings.mp4`

  Drawings (国の背景は残ったままなので注意)

* `showcase.mp4`

  Showcase

## Modのカスタムアイコン

Modのカスタムアイコンは画像ファイルで動作します。使用場所としては、SeedingとMap Poolで使われます。`.jpg`と`.png`が対応していますが基本透過のはずなので`.jpg`は使わないと思います。

Modアイコンはプリセットフォルダーの`Mods`フォルダーに入れ、画像のファイル名と合うように[Team EditorのEdit seeding results](./team_editor.md#-mod)や[Rounds Editor](./rounds_editor.md#-mods)のMod名に入れると動作します。

※ファイル名は既存のMod名にするとカスタムアイコンが優先的に描画されます。

できる限り高解像度が望ましいですが、Seedingは内部リスケーリングがなくそのまま描画され、Map Poolは枠に収まるように正方形にリスケーリングされるため、実際に確認しながら画像をスケーリングすることを推奨します。

<details>
  <summary>リスケーリングされていないSeeding</summary>
  <img src="/img/osu_lazer/seed_mod.png" />
</details>

<details>
  <summary>マッププール系はリスケーリングされる</summary>
  <img src="/img/osu_lazer/round_mod.png" />
</details>

## 国旗のカスタムアイコン

国旗のカスタムアイコンは画像ファイルで動作します。使用場所は、Schedule・Bracket・Team Intro・Seeding・Map Pool・Gameplay・Win・Drawingsとほぼすべての場面で使われます。`.jpg`と`.png`が対応しています。

国旗はプリセットフォルダーの`Flags`フォルダーに入れ、画像のファイル名と合うように[Team Editor](./team_editor.md#-flag)のFlag名に入れると動作します。

※ファイル名は既存の国旗名にするとカスタムアイコンが優先的に描画されます。

できる限り高解像度が望ましいです。国旗はどの場面でもリスケーリングされるのでアスペクト比さえ気にしていれば大丈夫です。

<details>
  <summary>ファイル名を入れれば使える</summary>
  <img src="/img/osu_lazer/flag_exp.png" />
  <img src="/img/osu_lazer/link_filename.png" />
</details>

## 大会タイトルとロゴ

大会タイトルとロゴは画像ファイルで動作します。使用場所はタイトルとロゴで異なり、タイトルはSchedule・Bracket・Team Intro・Map Pool・Gameplay・Winで使用され、ロゴはMap Poolで使われます。`.jpg`と`.png`が対応しています。

大会タイトルとロゴはプリセットフォルダー直下に入れ、指定されたファイル名で入れる必要があります。

### 対応ファイル名

* タイトル画像

  `header-text.png`

* ロゴ画像

  `header-logo.png`

できる限り高解像度が望ましいです。どの場面でもリスケーリングされるのでアスペクト比さえ気にしていれば大丈夫ですが、タイトル画像はリスケーリングする際に解像度によってぼやけて見える可能性があるので一概に高解像度にすればいいというわけではないのでご注意ください。

## (限界改変者向け) ソースコード変更

完全に開発者向けです。C#を履修済みであることを前提として話を勧めます。私もすべて理解しているわけではありませんのであくまで参考までにお願いします。こちらでは改変例として一番わかりにくいテキストフォントの変更を説明します。

### テキストフォントの変更

#### 事前準備

フォントを追加するにはosu!lazerのソースコードの他に`osu.Game.Resources`のソースコードが必要になるので、GitHubから[osu-resources](https://github.com/ppy/osu-resources)をクローンしてきます。

osu!lazerのソリューションファイルを開き、ソリューションにさきほどクローンした`osu.Game.Resources`を追加し、`osu.Game`の依存関係に`osu.Game.Resources`を追加します。

#### 1, フォントを追加する

`osu-resources/osu.Game.Resources/Fonts`ディレクトリに新しくディレクトリを作ります。名前は分かれば何でも大丈夫です。その中にフォントを`.bin`か`.fnt`に変換したファイルと変換した際に出た`.png`ファイルを入れます。

#### 2, `osu.Game.Graphics.Typeface`のenumにフォント名の追加

名前は分かれば何でも大丈夫です。

#### 3, `osu.Game.Graphics.OsuFont.GetFamilyString()`にcaseを追加する

2番で追加したenumTypeをcaseに追加し、戻り値を1版で追加したフォントのディレクトリ名にします。

#### 4, 新しくgetプロパティを作る

`osu.Game.Graphics.OsuFont`にある`public static FontUsage <フォント名>`をコピーして追加したフォント用に変更します。

#### 5, `osu.Game.OsuGameBase.InitialiseFonts()`にフォント読み込みを追加する

`osu.Game.OsuGameBase.InitialiseFonts()`に`AddFont(Resources, @"<フォントパス>");`を追加します。

ここまで追加するとようやくフォントが使える状態になります。

#### 使用方法

`osu.Game.Tournament.Screens`や`osu.Game.Tournament.Components`などに画面の構成コードが書かれていて、たいていファイル名通りにたどれば目当てのテキスト描画処理が書かれているコードが見つかります。

たとえば、Gameplayのスコアのフォントを変えたい場合、`osu.Game.Tournament.Screens.Gameplay.Components`の`TournamentMatchScoreDisplay`クラス内の`MatchScoreCounter`クラスの`updateFont()`に書かれている`OsuFont.Torus.With～`の部分を4番で作成したgetプロパティを参照することで変更できます。おそらくフォントによって大きさや字幅が異なるのでいい感じに引数をいじる形になります。
