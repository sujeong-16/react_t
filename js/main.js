// 마우스 이벤트
$(function() {
  $("#menu ul li a").on("mouseenter", function(){
    $(".sub_menu").stop().slideDown(100);
  });

  $("#menu-box").on("mouseleave", function() {
    $(".sub_menu").stop().slideUp(100);
  });

  $("#banner").slick({
    autoplay: true,
    dots: true,
    infinite: true,
    autoplaySpeed: 3000
  });
});