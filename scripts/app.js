$(window).load(function(){
      $("#sticker").sticky({topSpacing: 0, center:true, className:"main-navBar"});
    });

 $('#sticker').on('sticky-start', function() { console.log("Started"); });

$(".slides").slick({
        fade: true,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        dots: true  
            });