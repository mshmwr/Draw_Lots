

function myFun() {
  alert('測試文字 myFun');
}


$(function () {
  //checkbox
  var _repeatable = ($('#input [name="repeatable"]').prop('checked')); //允許重複資料
  var _itemNum = ($('#input [name="itemNum"]').prop('checked')); //項目編號
  var _rangeInput = ($('#input [name="rangeInput"]').prop('checked')); //輸入數字範圍
  var _userInput = ($('#input [name="userInput"]').prop('checked')); //輸入自訂項目

  //variable
  var _number = parseInt($('#input [name="number"]').val()); //抽出數量
  var _rangeInputMax = parseInt($('#input [name="rangeInputMax"]').val()); //輸入數字範圍Max
  var _rangeInputMin = parseInt($('#input [name="rangeInputMin"]').val()); //輸入數字範圍Min

  $("#rangeInput").click(function () { //選擇"輸入數字範圍"
    if ($('#input [name="rangeInput"]').prop('checked')) { //_rangeInput) {
      alert('輸入數字範圍按鈕被選擇');
      $('#input [name="userInput"]').prop('checked', false);
      if (_rangeInputMax < _rangeInputMin)
        _result.html("輸入範圍錯誤");
    }
  })

  $("#userInput").click(function () { //選擇"輸入自訂項目"
    if ($('#input [name="userInput"]').prop('checked')) {//_userInput) {
      alert('輸入自訂項目按鈕被選擇');
      $('#input [name="rangeInput"]').prop('checked', false);

    }
  })

  $("#input button.draw").click(function () {
    // alert('測試文字');
    var _lines = $.trim($("#input textarea").val()).split("\n");


    var _result = $("#result").empty();
    if (isNaN(_number)) {
      //alert("抽出數量必須為數字");
      _result.html("抽出數量必須為數字");
      return;
    }



    if (_userInput) {
      _rangeInput = false;
      $('#input [name="rangeInput"]').prop('checked', _rangeInput);
      if (_lines.length === 1 && _lines[0] === "") {
        //alert("必須輸入資料");
        _result.html("必須輸入資料");
        return;
      }
    }
    var _list = [];
    for (var _i = 0; _i < _lines.length; _i++) {
      var _line = $.trim(_lines[_i]);
      if (_repeatable === true) {
        _list.push(_line);
      }
      else if ($.inArray(_line, _list) === -1) {
        _list.push(_line);
      }
    }

    if (_number > _list.length) {
      _number = _list.length;
    }

    // 抽出n位
    var _getRandomInt = function (min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    var _result_list = [];
    var _index = 0;
    _result.append('<div>抽籤結果(共' + _number + '位)：</div>');
    for (var _r = 0; _r < _number; _r++) {
      var _random_int = _getRandomInt(0, _list.length - 1);
      if ($.inArray(_random_int, _result_list) === -1) {
        _index++;
        _result_list.push(_random_int);

        var content = '';
        if (_itemNum === true) {
          content = content + (_index + ', ');
        }
        content = content + (_list[_random_int])
        _result.append('<div>' + content + '</div >');
      }
      else {
        _r--;
      }
    }
  });

  $("#input button.default").click(function () {
    $("#input textarea").val(
      '第一項\n第二項\n第三項\n第四項\n第五項'
    );
  });
});