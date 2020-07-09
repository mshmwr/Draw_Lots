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