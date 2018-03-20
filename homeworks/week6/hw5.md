## 請說明 SQL Injection 的攻擊原理以及防範方法
	### 攻擊原理

	在不知道帳號密碼的狀況也能登入系統
	利用傳入SQL語法的漏洞 傳入input的值
	達到能簡單操控使用者資料庫的方法
	例如以下程式碼
	
	 $sql = "SELECT * FROM users WHERE username='  ' or 1=1 -- '  ' and password='' ";

	### 防範方法

	使用prepare statement
	將從使用者傳過來的資訊先用bind_param過濾之後
	再傳到系統執行SQL

	$stmt = $conn->prepare("SELECT * FROM users WHERE username=? and password=?");
	$stmt->bind_param("ss", $username, $password); //ss 表示兩個 string
	$stmt->execute();
	後面也能使用get_result 以及 fetch_assoc來達成抓取資料的結果


## 請說明 XSS 的攻擊原理以及防範方法
	### 攻擊原理

	能透過使用javascript語法 以及 網站POST的功能
	直接在HTML主結構裡面做到任何能用javascript達到的事
	例如：竄改頁面 連結 偷取COOKIE等等

	### 防範方法
	使用escape跳脫字元
	在POST我們後端能放上資料庫的位置加上htmlspecialchars
	透過以下程式碼

	  htmlspecialchars($str, ENT_QUOTES, 'utf-8')

	能讓我們即使將javascript程式碼放入資料庫中，也不會執行
	而讓他能直接顯示出完完整整的字元

## 請說明 CSRF 的攻擊原理以及防範方法

	### 攻擊原理

	透過網路會存取COOKIE以及SESSION的特性
	hacker可以透過隱藏轉址的按鈕或是超連結給使用者
	達到即使不是本人
	系統也會藉由核對COOKIE或SESSION來核准操作系統

	例如：銀行轉帳

	### 防範方法

	1. server端檢查request.referer裡面的domain是不是使用者本人  但某些瀏覽器不支援或是使用者關閉referer功能

	2. 有效手段  新增圖形驗證碼  或簡訊驗證法 
	多個網站使用  但某些基本操作  例如編輯、刪除  使用起來花時間  使用者體驗差

	3. CSRF token 
	form 裡面多一個hidden的欄位 裡面填入由server隨機產生的值，存入自己seesion中，並且每一段不同session的值就該更換一次
	使用者submit之後 server比對表單中的csrf token跟自己seesion裡存的csrf token值是否一樣  可以的話就能有效阻擋駭客
	畢竟駭即使可以偽造使用者身分，也無法拿到表單中的csrf token值

## 請舉出三種不同的雜湊函數

	1. MD5 PHP可以直接使用md5() 來做到雜湊  但安全性好像也是最差的一個
	2. SHA-1 加密
	3. SHA-256 加密
	4. bcrypt


## 請去查什麼是 Session，以及 Session 跟 Cookie 的差別

	Session是PHP內建的機制，可以透過認牌不認人的機制存取資訊
	COOKIE因為是存在client端容易被竄改或偷取
	Session除了可以存取cookie去對應資料庫的通行證之外
	製造出不易被竄改的亂數SESSION
	也能比cookie存取更多資訊
	