1. 什麼是DOM ?

DOM (Document Object Model) 是 HTML 跟 XML 的程式界面，它將 HTML 的標籤看成nodes 和objects。DOM 是瀏覽器提供的，可以使用程式語言 
(JavaScript或其他)來操縱 HTML 的structure、style 或content。

2. 什麼是 Ajax？

Ajax (Asynchronous JavaScript and XML) 是透過非同步的方式，使用瀏覽器提供的 API及 callback function，
讓網頁可以不更新頁面就與伺服器溝通，減少每次更新頁面浪費的時間，提高使用者體驗。

3. HTTP method 有哪幾個？有什麼不一樣？

* GET : 從伺服器端拿資料
* POST : 從客戶端送資料給伺服器
* PATCH : 附加新的資料在已經存在的資料後面。（資料必須已經存在，patch會擴充這項資料）
* PUT : 新增一項資料，如果存在就覆蓋過去。（還是只有一筆資料）
* DELETE : 刪除資料
* OPTION : 看伺服器支援的method
* HEAD : 從伺服器端拿資料 但HEAD的RESPONSE 沒有BODY
* CONNECT : 開啟客戶端與所請求資源之間的雙向通到，可用來建立TUNNEL

4. GET 跟 POST 有哪些區別，可以試著舉幾個例子嗎？

*留言板* 
假如我們現在有一個可以留言的留言板，我們通常會使用GET來取得現在已經存在的留言，
而要新增新的留言時，我們會POST新的留言到現在的留言板。

*餐廳*
假如我們要點餐，我們必須先用GET取得菜單資訊，接下來再將想要點的餐POST到服務生那裏去。

5. 什麼是 RESTful API？

Representational State Transfer，簡稱REST，是一種網路架構風格，並不是一種標準。
設計為 REST 的系統又可稱為 RESTful 。
假如直接使用API來新增或撰寫資訊的時候 API的interface會有各式各樣的method去新增或獲取資料，
但以REST風格來開發的RESTful API 會能充分使用HTTP method來達到簡潔的外觀，以及更容易操作資源。 

6. JSON 是什麼？

JSON是獨立於語言的文字格式，感覺像是用大量物件串起來的資料物件，可以用來存取大量資料。
也方便於DOM去取用或搜尋。


7. JSONP 是什麼？

JSONP是資料格式JSON的一種使用方式，可以讓網頁從別的網域要資料。

8. 要如何存取跨網域的 API？

- 用JSONP script可以跨網域的特性，在HTML裡引用API URL到script裡，然後在定義callback
function的參數，最後再在javascript檔案用call back function叫出JSONP的資料。