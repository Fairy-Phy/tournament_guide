---
sidebar_position: 11
---

# Map Pool

ここではトーナメントオーバーレイのMap Pool画面について説明します。

Map Poolは実際にオーバーレイで使用するマッチの選曲時の画面になります。

:::tip 補足

GameplayとMap Poolの間には、自動でGameplayからMap Poolに自動で移動する機能があり、加えて両チーム(プレイヤー)のBanが選択されていればあとは自動で選曲時にpick動作をしてGameplayに移動します。

:::

![Map Pool](/img/osu_lazer/map_pool.png)

## メイン画面

### 譜面を左クリック

Control Panelで選択されているモードによって挙動が異なります。

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
  <TabItem value="rb" label="Red Ban" default>
    選択した譜面を赤チームのBanにします
  </TabItem>
  <TabItem value="bb" label="Blue Ban">
    選択した譜面を青チームのBanにします
  </TabItem>
  <TabItem value="rp" label="Red Pick">
    選択した譜面を赤チームのPickにします
  </TabItem>
  <TabItem value="bp" label="Blue Pick">
    選択した譜面を青チームのPickにします
  </TabItem>
</Tabs>

### 譜面を右クリック

選択した譜面の装飾を取り消します。

※何も装飾されていない場合は反応しません。

### (表示されてるときのみ) 上左右の点数を左クリック

クリックしたチームの得点を1加算します。

### (表示されてるときのみ) 上左右の点数を右クリック

クリックしたチームの得点を1減算します。

## Control Panel

:::caution Ban未選択時の注意

Banが未選択のままPickを選択すると選択後自動でRed Banに戻されるのでご注意ください。

なお、Ban選択後は自動でPickにモードが移動します。

この挙動は通常の世界大会のルールの元に作られているため、以下のような挙動をします。

* 赤チームが先にBanする場合

  自動で先行ピックが青チームになります。

* 青チームが先にBanする場合

  自動で先行ピックが赤チームになります。

:::

### ① Red Ban

選択するモードを『赤チームBan』にします

### ② Blue Ban

選択するモードを『青チームBan』にします

### ③ Red Pick

選択するモードを『青チームピック』にします

### ④ Blue Pick

選択するモードを『青チームピック』にします
