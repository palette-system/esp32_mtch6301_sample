# ESP32 からタッチセンサー(MTCH6301)を使用するサンプルです
MTCH6301からジェスチャーデータとタッチデータを取得できます。<br>
※マルチタッチも取得できました。<br>
<br><br>

## 接続例

|  No  |  ESP32  |  MTCH6301  |
| :----: | :----: | :----: |
|  1  |  IO21  |  SDA  |
|  2  |  IO22  |  SCL  |
|  3  |  IO17  |  INT  |
|  4  |  IO18  |  RST  |

<br><br>

## 取得データ例

<br>

<b>■ ジェスチャーデータ</b><br>
　（センサーがジェスチャーと判定した時にジェスチャーのタイプを取得できます）<br>
```
start
read: 02 84 31  t: 745
start
read: 02 84 10  t: 1460
start
read: 02 84 20  t: 345
```
<br><br>

<b>■ タッチデータ</b><br>
　（タッチしている時におよそ10～30ミリ秒おきにタッチしている座標が取得できます）<br>
```
start
read: 05 81 7D 18 6A 04 [ 0 , 0]  t: 390
read: 05 81 7D 18 67 04 [ 0 , 3]  t: 10
read: 05 81 00 19 58 04 [ -3 , 15]  t: 15
read: 05 81 08 19 51 04 [ -8 , 7]  t: 10
read: 05 81 15 19 55 04 [ -13 , -4]  t: 10
read: 05 80 15 19 55 04 [ 0 , 0]  t: 25
```

<br><br>

## 使用した動作確認モジュール

[Touchpad 3 Click](https://www.mikroe.com/touchpad-3-click)
<br><br>

## MTCH6301 リンク

[MTCH6301](https://www.microchip.com/wwwproducts/en/MTCH6301)
<br>
[MTCH6301 データシート](https://ww1.microchip.com/downloads/en/DeviceDoc/40001663B.pdf)
<br><br>
