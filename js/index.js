(function ($) {
  $(function () {
    $('.scroll-section').scrollIndicatorBullets({
      scrollOffset: 0,
      pgKeysEnabled: true,
      scrollDuration: 1000
    });
  });
})(jQuery);



    //Check to see if the window is top if not then display button
    $(window).scroll(function(){
        if ($(this).scrollTop() > 100) {
            $('#scrollToTop').fadeIn();
        } else {
            $('#scrollToTop').fadeOut();
        }
    });

    //Click event to scroll to top
    //$('.scrollToTop').click(function(){
    //    $('html, body').animate({scrollTop : 0},800);
    //    return false;
    //});

// add event listener on load
    window.addEventListener('load', function() {
      // scroll to top
      document.querySelector('.js-scroll-to-top').addEventListener('click', function(e) {
        e.preventDefault();
        window.scroll({ top: 0, left: 0, behavior: 'smooth' });
      });
    });


 //hello preloader

 var hellopreloader = document.getElementById("hellopreloader_preload");
 function fadeOutnojquery(el){
   el.style.opacity = 1;
   var interhellopreloader = setInterval(function(){
     el.style.opacity = el.style.opacity - 0.05;
     if (el.style.opacity <=0.05){
        clearInterval(interhellopreloader);
        hellopreloader.style.display = "none";
     }
   },16);
   }
   window.onload = function(){
     setTimeout(function(){
       fadeOutnojquery(hellopreloader);
   },1000);
 };

  // columns

  /* Set the width of the side navigation to 250px */
function openNav() {
  if ($('#mySidenav').width() == 0) {
    document.getElementById("mySidenav").style.width = "300px";
    $('#menuButton').addClass('closebut');
  } else {
    document.getElementById("mySidenav").style.width = "0";
    $('#menuButton').removeClass('closebut');
  }
}

/* Set the width of the side navigation to 0 */



  //opening menu

    document.querySelector( "#yes" )
      .addEventListener( "click", function() {
        ifyes.classList.toggle( "active" );
        question.classList.toggle( "active" );
      });

    document.querySelector( "#no" )
        .addEventListener( "click", function() {
          ifno.classList.toggle( "active" );
          question.classList.toggle( "active" );
        });


$(document).ready(function(){
  $("#body").on("click","a", function (event) {
    //отменяем стандартную обработку нажатия по ссылке


    //забираем идентификатор бока с атрибута href
    var id  = $(this).attr('href'),

    //узнаем высоту от начала страницы до блока на который ссылается якорь
      top = $(id).offset().top;

    //анимируем переход на расстояние - top за 1500 мс
    $('body,html').animate({scrollTop: top}, 1500);
  });


  $('#mySidenav').find('a').click(function() {
    document.getElementById("mySidenav").style.width = "0";
    $('#menuButton').removeClass('closebut');
  });
});