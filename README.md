## 簡介
- 本專案為一個猜數字遊戲
- 以HTML、CSS及JavaScript撰寫，為一頁式靜態網頁
- 其中應用Normalize解決不同瀏覽器預設CSS樣式不同的問題

## 功能
- 輸入猜測數，並點擊「送出答案！」按鈕時，右側將出現答案判斷結果
- 當猜測數小於謎底，猜測結果顯示「再大一點」；猜測數大於謎底，猜測結果顯示「再小一點」；猜測數與謎底相同，猜測結果以紅字顯示「答對了！」
- 每次重新整理頁面，都會隨機生成0～100之整數作為謎底
- 謎底雖為0～100之整數，但猜測數若以輸入框直接輸入，則可輸入任何數字（包括負數、非整數等）
- 若點擊輸入框的上下按鈕調整答案，則限制為0～100之整數
- 輸入框未輸入數字，卻點擊「送出答案！」按鈕時，將跳出提醒視窗

## 畫面
### 初始畫面
![截圖 2024-05-11 專案畫面](https://github.com/TamyTsai/guess-number-game/assets/97825677/685ab0ac-daf2-4120-8972-ad9a30c65c55)

### 輸入框未輸入，卻點擊「送出答案！」按鈕時
![截圖 2024-05-11 未輸入](https://github.com/TamyTsai/guess-number-game/assets/97825677/ea26b2f4-2c8e-4f01-b3b8-de5b285fb85c)

### 猜測數小於謎底
![截圖 2024-05-11 再大一點](https://github.com/TamyTsai/guess-number-game/assets/97825677/9d73ef9a-9899-4c57-a07a-a9fc8692aab5)

### 猜測數大於謎底
![截圖 2024-05-11 再小一點](https://github.com/TamyTsai/guess-number-game/assets/97825677/5eda5637-dbeb-4aa2-8135-15870231fa97)

### 猜測數與謎底相同
![截圖 2024-05-11 答對了](https://github.com/TamyTsai/guess-number-game/assets/97825677/62fec261-01af-49bf-96f6-ed0a66485a9d)


## 安裝
### 取得專案
```bash
git clone https://github.com/TamyTsai/guess-number-game.git
```
### 移動到專案內
```bash
cd guess-number-game
```

## 資料夾及檔案說明
- scripts - JS檔案放置處
  - script.js - 頁面JS檔案，負責網頁功能
- styles - 樣式放置處
  -   normalize.css - normalize檔案
  -   style.css - 頁面樣式檔案
- index.html - 頁面HTML檔

## 專案技術
- HTML
- CSS
  - Normalize v8.0.1
- JavaScript
