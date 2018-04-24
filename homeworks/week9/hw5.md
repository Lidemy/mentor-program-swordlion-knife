## CSS 預處理器是什麼？我們可以不用它嗎？
	的確可以不使用他，但CSS有著結構很難有組織、難維護的缺點，如果寫CSS也能像一般程式語言一樣，
	具有變數、數學運算、條件式、迴圈、函式庫等等就有很大幫助，這也是CSS預處理器產生的原因。

## 請舉出任何一個跟 HTTP Cache 有關的 Header 並說明其作用。
	Expires [Expires: Wed, 21 Oct 2017 07:28:00 GMT] cache到期的時間~

	Cache-Control 與 max-age http1.1版 Cache-Control:max-age=31536000 cache存活秒數

	max-age>Expires

	Last-Modified與If-Modified-Since
	Last-Modified: 2017-01-01 13:00:00  最後更新時間
	If-Modified-Since: 2017-01-01 13:00:00 從這個時間過後有沒有更新

	有更新的話會更新  沒更新的話就用舊的

	Etag跟If-None-Match
	Server 在回傳 Response 的時候帶上Etag表示這個檔案獨有的 hash
	快取過期後瀏覽器發送If-None-Match詢問 Server 是否有新的資料

	Cache-Control: no-store  不需要任何快取


	

## Stack 跟 Queue 的差別是什麼？

	Stack = 先進後出  first in last out 最晚進來的元素會先被拿走

	Queue = 先進先出  first in first out 最先進來的元素會最先出去