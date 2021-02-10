# MTCH6301のサンプルを可視化するツール
MTCH6301のサンプルから送られてくる座標データをブラウザ上に可視化するツールです。<br>
nodejs で動きます。<br>




<br><br>

## nodejsと必要なライブラリのインストール

■ この辺りを参考にnodejsをインストールしました<br>
https://qiita.com/satoyan419/items/56e0b5f35912b9374305
<br><br>


■ライブラリ<br>
　※このコマンドはtouch_toolのディレクトリに移動してから実行
```
npm install serialport
npm install socket.io
```

<br><br>

## 起動

<br>

server.jsの5行目に開きたいポート名を指定<br>
```
const comPort = 'COM5';
```
<br><br>

コマンドプロンプトで下記コマンドを実行するとローカルサーバーが立ち上がる<br>
```
node server.js
```

<br><br>

ブラウザから下記URLを開くと可視化ツールが見れる<br>
http://localhost:3000

<br><br>


