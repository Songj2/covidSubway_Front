function loadJQuery() {
  var oScript = document.createElement("script");
  oScript.type = "text/javascript";
  oScript.charset = "utf-8";		  
  oScript.src = "http://code.jquery.com/jquery-2.1.4.js";	
  document.getElementsByTagName("head")[0].appendChild(oScript);
}


$(document).ready(function(){
  //jQuery Test
  // console.log("Jquery");

  //// 플로팅 베너 관련
  // 기본 위치(top)값
  var floatPosition = parseInt($("aside").css('top'))

  // scroll 인식
  $(window).scroll(function() {
      
      // 현재 스크롤 위치
      var currentTop = $(window).scrollTop();
      var bannerTop = currentTop + floatPosition + "px";

      //이동 애니메이션
      $("aside").stop().animate({
          "top" : bannerTop
      }, 500);

  }).scroll();


  //// 스파이 스크롤
  var scrollSpy = new bootstrap.ScrollSpy(document.body, {
    target: '#navbar-example2'
  })
});