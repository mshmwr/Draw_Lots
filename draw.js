// @ts-check //debug工具，但還需要再安裝一些東西: https://medium.com/html-test/%E5%BE%9E%E9%9B%B6%E9%96%8B%E5%A7%8B-%E4%BD%BF%E7%94%A8npm%E5%A5%97%E4%BB%B6-317beefdf182

function myFun() {
  alert("測試文字 myFun");
}

//checkbox
var _repeatable = $('#input [name="repeatable"]').prop("checked"); //允許重複資料
var _rangeInput = false; //($('#input [name="rangeInput"]').prop('checked')); //輸入數字範圍
var _userInput = false; // ($('#input [name="userInput"]').prop('checked')); //輸入自訂項目

$(function () {
  //variable
  var _number; //抽出數量
  var _rangeInputMax = 0; //=  //輸入數字範圍Max
  var _rangeInputMin = 0; //= parseInt($('#input [name="rangeInputMin"]').val()); //輸入數字範圍Min

  //Start
  // $("textarea").hide(); //隱藏輸入框
  $("#userInputBlock").hide();

  //Checkbox functions
  SelectRangeInput();
  SelectUserInput();

  //Click button
  $("#input button.draw").click(function () {
    // alert('Click button(_userInput, _rangeInput)' + _userInput + ", " + _rangeInput);

    //initialize
    var _lines = []; //記錄每一行資料
    var _list = [];
    var _result = $("#result").empty();

    var _itemNum = $('#input [name="itemNum"]').prop("checked"); //項目編號
    _number = parseInt($('#input [name="number"]').val());

    if (isNaN(_number)) {
      //alert("抽出數量必須為數字");
      _result.html("抽出數量必須為數字");
      return;
    }

    //輸入自訂內容
    if (_userInput) {
      // alert("_userInput");
      _lines = $.trim($("#input textarea").val()).split("\n");
      if (_lines.length === 1 && _lines[0] === "") {
        _result.html("必須輸入資料");
        return;
      }
      //add data to the item list
      for (var _i = 0; _i < _lines.length; _i++) {
        var _line = $.trim(_lines[_i]);
        if (_repeatable === true) {
          _list.push(_line);
        } else if ($.inArray(_line, _list) === -1) {
          _list.push(_line);
        }
      }
    }

    //輸入數字範圍
    if (_rangeInput) {
      _rangeInputMax = parseInt($('#input [name="rangeInputMax"]').val());
      _rangeInputMin = parseInt($('#input [name="rangeInputMin"]').val());
      // alert("_rangeInput(Max, Min) = " + _rangeInputMax + ", " + _rangeInputMin);
      if (_rangeInputMax < _rangeInputMin) {
        _result.html("輸入範圍錯誤");
        return;
      }

      for (var _i = _rangeInputMin; _i <= _rangeInputMax; _i++) {
        _list.push(_i);
      }
    }

    if (_number > _list.length) {
      _number = _list.length;
    }

    // 抽出n位
    var _getRandomInt = function (min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    var _result_list = [];
    var _index = 0;
    _result.append("<div>抽籤結果(共" + _number + "位)：</div>");
    for (var _r = 0; _r < _number; _r++) {
      var _random_int = _getRandomInt(0, _list.length - 1);
      if ($.inArray(_random_int, _result_list) === -1) {
        _index++;
        _result_list.push(_random_int);

        var content = "";
        if (_itemNum === true) {
          content = content + (_index + ", ");
        }
        content = content + _list[_random_int];
        _result.append("<div>" + content + "</div >");
      } else {
        _r--;
      }
    }
  });

  $("#input button.default").click(function () {
    $("#input textarea").val("第一項\n第二項\n第三項\n第四項\n第五項");
  });
});

function SelectRangeInput() {
  //選擇"輸入數字範圍"
  $("#rangeInput").click(function () {
    if ($('#input [name="rangeInput"]').prop("checked")) {
      // alert('輸入數字範圍按鈕被選擇');

      // 顯示輸入框
      $("#userInputBlock").hide();
      _rangeInput = true;
      _userInput = false;
      $('#input [name="userInput"]').prop("checked", false);
    } else {
      _rangeInput = false;
    }
  });
}

function SelectUserInput() {
  $("#userInput").click(function () {
    //選擇"輸入自訂項目"
    if ($('#input [name="userInput"]').prop("checked")) {
      // alert('輸入自訂項目按鈕被選擇');

      // 顯示輸入框
      $("#userInputBlock").show();
      // 顯示
      _userInput = true;
      _rangeInput = false;
      $('#input [name="rangeInput"]').prop("checked", false);
    } else {
      _userInput = false;
    }
  });
}
