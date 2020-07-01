

function myFun() {
  alert('測試文字 myFun');
}


$(function () {

  $("#input button.draw").click(function () {
    // alert('測試文字');
    var _lines = $.trim($("#input textarea").val()).split("\n");
    var _repeatable = ($('#input [name="repeatable"]').prop('checked'));
    var _itemNum = ($('#input [name="itemNum"]').prop('checked')); //項目編號
    var _number = parseInt($('#input [name="number"]').val()); //抽出數量
    var _result = $("#result").empty();
    if (isNaN(_number)) {
      //alert("抽出數量必須為數字");
      _result.html("抽出數量必須為數字");
      return;
    }
    if (_lines.length === 1 && _lines[0] === "") {
      //alert("抽出數量必須為數字");
      _result.html("必須輸入資料");
      return;
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