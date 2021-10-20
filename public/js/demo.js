
//for spinner buttons  

$(function ($) {
    $('#handleCounter1').handleCounter({
 minimum: 1,
 maximize: 100,

        
 })
       
     $('#handleCounter2').handleCounter({
 minimum: 1,
 maximize: 100,
          
        })
    
  
    
    });
   


//for datepicker

addEventListener('DOMContentLoaded', function () {
 


 
 pickmeup('.range', {
     mode : 'range',
     separator: '    to   ',
     position :'bottom',
//        hide_on_select : true,
     format: 'd b-y',
   
 });
//pickmeup('.range').show();


 
});


// map
/* function initMap() {
     var uluru = {lat:  19.0760 , lng: 72.8777};  
     var map = new google.maps.Map(document.getElementById('map'), {
       zoom: 14,
       center: uluru
     });
     var marker = new google.maps.Marker({
        position: uluru,
        map: map
      }); 
    }  */


















// image slider main
$(document).ready(function(){
 

             $('.single').slick({
             autoplay : true,
               pauseOnFocus : false,
                 pauseOnHover : false,
              arrows : false,
                 draggable : false,
                      });
           
             $('.left').click(function(){
               $('.single').slick('slickPrev');
             })

             $('.right').click(function(){
               $('.single').slick('slickNext');
             })
             
             
             
              
             $('.room').slick({
             autoplay : false,
               slidesToShow :3,
               pauseOnFocus : true,
             
              arrows : false,
                 draggable : true,
              swipeToSlide : true,
               });
 
             
             $('.review').slick({
                 
             autoplay : true,
                 autoplaySpeed : 6000,
               pauseOnFocus : true,
              pauseOnHover : false,
              arrows : false,
                 draggable : true,
          
                 
                      });
 
 
 
 

     });



//scrolltotop

$(function () {
$.scrollUp({
 scrollName: 'scrollUp', // Element ID
 topDistance: '600' , // Distance from top before showing element (px)
 topSpeed: 300 , // Speed back to top (ms)
 animation: 'fade', // Fade, slide, none
 animationInSpeed: 500, // Animation in speed (ms)
 animationOutSpeed: 500, // Animation out speed (ms)
scrollText: '^',
 activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
});
});
$(function() {

  $('#login-form-link').click(function(e) {
  $("#login-form").delay(100).fadeIn(100);
   $("#register-form").fadeOut(100);
  $('#register-form-link').removeClass('active');
  $(this).addClass('active');
  e.preventDefault();
});
$('#register-form-link').click(function(e) {
  $("#register-form").delay(100).fadeIn(100);
   $("#login-form").fadeOut(100);
  $('#login-form-link').removeClass('active');
  $(this).addClass('active');
  e.preventDefault();
});

});