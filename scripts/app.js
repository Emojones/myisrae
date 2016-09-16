$(window).load(function(){
      $("#main-navBar").sticky({topSpacing: 0, center:true});
    });

 $('#main-navBar').on('sticky-start', function() { console.log("Started"); });