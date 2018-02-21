## 請找出三個課程裡面沒提到的 HTML 標籤並一一說明作用。
1. <br />  換行!!
2. <b></b>粗體字 <i></i>斜體字 <u></u>底線 <sup></sup>上標字 <sub></sub>下標字
3. <img src = "圖片路徑"/> 插入圖片
4. <embed src = "音樂路徑" align = "位置" autostart="true or false"></embed>文字  鑲嵌音樂

## 請問什麼是盒模型（box modal）

element(元素)=>padding(內邊距)=>border(邊框)=>margin(外邊距)
### element 元素內容
### padding 直接包含內容的內層框，呈現元素背景
### border 邊框 隔離內邊距跟外邊距
### margin 外邊距  最外層

## 請問 display: inline, block 跟 inline-block 的差別是什麼？

inline (行內元素)
可以使用span包裹一些文字，用CSS改變其樣式之後也不會打亂原本的版面配置

block (區塊元素)
一個區塊元素可以讓其內容換行，並盡可能稱滿container

inline-block
跟inline類似，但可以不使用float，轉而使用inline-block去達到自動排版的效果

## 請問 position: static, relative, absolute 跟 fixed 的差別是什麼？

static
不會被特別定位，照著瀏覽器預設自動排版在頁面上

relative
可以透過不同元素設定relative屬性來達到相對位置，也可以設定上下左右使元素相對地調整原本該出現的所在位置

absolute
跟fixed屬性類似，但absolute屬性的元素會相對他所屬上層容器移動，如果沒有就會相對於body元素最左上角的絕對位置

fixed
設定fixed屬性的元素會相對於瀏覽器視窗來定位，即使頁面捲動fixed屬性的元素還是會固定在相同的位置