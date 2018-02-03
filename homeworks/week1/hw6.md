## 請解釋後端與前端的差異。

課程概述： 所有能看的見的東西都略分為前端 例如：圖形用戶介面、 cmder
           隱藏在背後看不見的皆為後端   
軟體層面： 用戶透過前端與軟體系統溝通，而後端運行軟體，控制軟體輸出，與電腦對話
編譯器層面： 前端將程式語言原始碼轉換為中間代碼
             後端將中間代碼在轉換為計算機的二進位代碼(機械語言)

## 假設我今天去 Google 首頁搜尋框打上：javascript 並且按下 Enter，請說出從這一刻開始到我看到搜尋結果為止發生在背後的事情。

1.前端工程師先創造出google首頁供人使用，創造出一個重視使用者體驗的UI介面。
2.我們透過前端工程師創造出的搜尋框，打上javascript這個文字，這個文字也許是後端工程師所寫的function的傳入值。
3.傳入function之後執行搜尋。
4.function轉化為機械語言回傳向server並在server中找尋答案。
5.server完成搜索後，轉化機械語言為程式語言response回客戶端。
6.客戶端透過一些網頁構築語言回傳結果
7.建構出一個顯示搜尋結果的網頁

## 請列舉出 5 個 command line 指令並且說明功用

1. git add 將add後的參數  例如：git add . 就可以把所有的檔案加入現有branch中

2. git branch -v 知道現在有哪些branch
   git branch -d ___ 刪除branch
   git branch ___  創造branch
   git checkout ____ 切換到某某branch

3. cd 切換資料夾
   touch ___ 創造檔案

4. git push 遠端資料庫 本地倉庫  把本地倉庫上傳遠端資料庫
   git pull 將遠端資料庫檔案拉到現有倉庫

5. git status 觀看有無需要commit 以及有無modified程式

6. git commit -m "敘述"  確認改動 

   