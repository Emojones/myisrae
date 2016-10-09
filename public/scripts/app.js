$(window).load(function () {
  $("#sticker").sticky({
    topSpacing: 0,
    center: true,
    className: "main-navBarSticky"
  });
});

$(".slides").slick({
  fade: true,
  autoplay: true,
  autoplaySpeed: 3000,
  arrows: true,
  dots: true
});
