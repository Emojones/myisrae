$(window).load(function(){
      $("#sticker").sticky({topSpacing: 0, center:true, className:"main-navBar"});
    });

 $('#sticker').on('sticky-start', function() { console.log("Started"); });