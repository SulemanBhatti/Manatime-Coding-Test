$(document).ready(function(){
      
    $(".side-window-menu-item").click(function(){
     $(".side-window-menu-item").removeClass("active");
         $(this).addClass("active");
    });


    $(".navbar-brand a").click(function(){
      if($("body").hasClass("side-window-opened")) {
         $("body").removeClass("side-window-opened");
      }
      else {
         $("body").addClass("side-window-opened");
      }
    });

 })