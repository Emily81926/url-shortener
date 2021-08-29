# URL Shortener 縮網址工具
<br>
此專案可以讓使用者將輸入的網址轉換為短網址，並可以透過短網址前往原先預定的網站。

## 產品功能
<br>
* 使用者可以在首頁表單內輸入原始網址，如 https://www.google.com
* 送出表單之後，畫面會回傳格式化後的短網址
* 在伺服器啟動期間，使用者可以在瀏覽器的網址列，輸入所提供的短網址，瀏覽器就會導向原本的網站
* 可以直接點擊網頁上的複製按鈕將結果複製到剪貼簿中。

## 環境

* npm : 7.7.6
* express: 4.17.1
* express-handlebars: 5.3.3
* mongoose: ^5.13.7
* mongoDB: ^4.2.14

### 安裝
1. 開啟終端機(Terminal)將此專案Clone至本機電腦
```
git clone https://github.com/Emily81926/url-shortener.git
```
2. 進入存放此專案的資料夾
```
cd url-shortener
```
3. 安裝 npm 套件
```
npm install
```
4. 啟動 mongoDB，並在本地建立 url-shortener 資料庫
5. 啟動網頁伺服器
```
npm run dev
```
當 Terminal 出現以下文字表示成功連結本地伺服器
```
App is running on http://localhost:3000
```
6. 在任一瀏覽器中輸入 http://localhost:3000 開始使用本專案
