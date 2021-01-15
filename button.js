$(document).ready(()=>{
  let $toggleButton = $('.header__nav-toggle');
  //Hamburger button
  $toggleButton.on('click',function(){
    $(this).toggleClass('button-open');
  });

  $(".header__nav-toggle-container").on('click',()=>{
    $(".c-header__nav").slideToggle();
  })
})