
var tree;
var imgFolder = "http://localhost/waibo/img/";

function load() {
  floatPanel();
}
function floatPanel() {
  var width = $(".popPanel").outerWidth();
  $(".ctrolPanel a").hover(
    function() {
      $($(this).attr('data-target')).css("width","0px").show();
      $($(this).attr('data-target')).animate({"width" : width + "px"},400);
    },function(){
      $($(this).attr('data-target')).animate({"width" : "0px"},400);
      $($(this).attr('data-target')).css("width",width + "px");
    }
  );
}
function goTop() {
  $("html,body").animate({scrollTop :0}, 800);
}
function goBottom() {
  $("html,body").animate({scrollTop : $(document).height()}, 800);
}
function bible() {
  checkWinSize();
  documentView();
	changePage();
	resizeWindow();
}
function checkWinSize() {
  var winSize = $(window).width();
  showWinSize(winSize);
  if (winSize < 768){
     hideTree();
  } else {
     showTree();
  }   
}
function documentView() {
  $("#treeview").toggle(function(){
    hideTree();
  },function(){
    showTree();
  });
}
function hideTree() {
  $("aside").hide();
  $("main").removeClass("span9").addClass("full");
	$("[id=show]:checkbox").prop("checked", false);
}
function showTree() {
  $("aside").show();
  $("main").removeClass("full").addClass("span9");
	$("[id=show]:checkbox").prop("checked", true);
}
function changePage() {
  $(document).keyup(function(ev) {
    var event = window.event  || ev;
    var code  = event.keyCode || event.which;

    if(code == 37)
      window.location.href = $("#prev").attr("href");
    if(code == 39)
      window.location.href = $("#next").attr("href");
  });
}
function resizeWindow() {
  var winSize = $(window).width();
  showWinSize(winSize);
  $(window).resize(function() {
     checkWinSize();
     showWinSize(winSize);
  });
}
function showWinSize(size) {
  $("#winSize").text(size);
}
function changeProperty() {
  $("[name=property]").click(function() {
    var name  = $('#property').text();
    var value = $('[name=property]:checked').val(); 
    window.location.href = name + "_" + value + ".html";
  });
}
function rewardMethod() {
  $("[name=method]").click(function() {
    var method = $('[name=method]:checked').val(); 
    if (method == "alipay") {
      $(".reward-alipay").removeClass('hide');
      $(".reward-weipay").addClass('hide');
    } else {
      $(".reward-weipay").removeClass('hide');
      $(".reward-alipay").addClass('hide');
    };
  });
}
function getCookie(name) {
  var arr,reg = new RegExp("(^| )"+name+"=([^;]*)(;|$)");
  if(arr = document.cookie.match(reg)) {
    return unescape(arr[2]);
  } else {
    return false;
  }
}  
function selectBook() {  
  $("select[name='book']").change(function() {
    var book = $("select[name='book']").val();
    if (book){
      document.cookie = "book="+book;
      window.location.href = location.href;
    }
  });
}