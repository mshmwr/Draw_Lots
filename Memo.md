# Draw_Lots

## 20.05.31

### Basic Draw Lots

You can

1. input the options
2. input how many options should be chosen
3. insert default datas which can be modified (@draw.js)
4. draw lots

## 20.07.05

1. Add "Set Check Box Selected And Canceled"

### Memo

- Set **input id="rangeInput"** to use Click function:

```javascript=
$("#rangeInput").click(function () ){...}
```

## 20.07.06

1. Add "Show/Hide the textarea"

```javascript=
$("textarea").hide(); //隱藏輸入框
```

## 20.07.09

1. Add "userInputBlock" block which contains textarea and checkbox

   1. Modify "Show/Hide the textarea" to "Show/Hide the textarea and checkbox(repeatable)" by adding \<div id = "userInputBlock">

## 20.07.19

1. Add "Simple RWD"

   1. In "HTML"

   ```html=
   <!-- 在針對要實作 RWD 的網頁中，HTML 的 head 部分必須設定 viewport -->
   <meta name="viewport" content="width=device-width, initial-scale=1" />
   ```

   2. In "CSS"

      1. div 區塊要使用 block
         ```css=
         div {
           display: block;
         }
         ```
      2. 上下 100%直式排列的大區塊(A)
         ```css=
         .col {
           width: 100%;
           float: left;
           box-sizing: border-box; /*處理寬度破版的問題*/
         }
         ```
      3. 大區塊(A)內的小區塊(B)
         ```css=
         .intro {
           width: 30%;
           height: 250px; /*要指定高度，不然 B 區塊會根據區塊內的文字內容調整大小，排版會亂掉*/
           float: left;
           position: relative;
         }
         ```
      4. 設定螢幕尺寸
         ```css=
         @media (max-width: 800px) {
           .intro {
             width: 80%;
           }
         }
         ```

   3. ref:
      1. website: https://kirbycafe.jp/tokyo/
      2. RWD Setting: https://www.injerry.com/blog-view.php?PID=5&sn=5
      3. box-sizing: https://blog.darkthread.net/blog/css-boxsizing/
