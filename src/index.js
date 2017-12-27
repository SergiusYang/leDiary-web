var $ = require("jquery");
$(function(){
    $(".hello-btn").click(function(){
        alert("你好,中国");
        return false;
    });
})