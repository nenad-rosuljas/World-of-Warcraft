setTimeout(function(){        
  $('.c-header').css("opacity", 0);
}, 0);

setTimeout(function(){        
  $('.preloader').delay(150).fadeOut('slow'); 
  $('.c-header').css("opacity", 1);
}, 3000);