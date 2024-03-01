/*ホバー(CSSで実装したのでボツ)
$(function(){
  $("a").hover(function(){
    $(this).addClass('is-hover');
},
    function(){
    $(this).removeClass('is-hover');
});*/

/*移動*/

$('.scroll_line').hover(function(){
  $(this).stop().animate({'right': '10px'}, 300);
},
function(){
  $(this).stop().animate({'right': 0}, 300);
});
$('.scroll_text > a').hover(function(){
  $('.scroll_line').stop().animate({'right': '10px'}, 300);
},
function(){
  $('.scroll_line').stop().animate({'right': 0}, 300);
});

/*右*/
$('.next_line').hover(function(){
  $(this).stop().animate({'right': '-10px'}, 300);
},
function(){
  $(this).stop().animate({'right': 0}, 300);
});
$('.news_next_message > a').hover(function(){
  $('.next_line').stop().animate({'right': '-10px'}, 300);
},
function(){
  $('.next_line').stop().animate({'right': 0}, 300);
});


$(".next_action").click(function(){     
  $(".next_action").animate({top:"10px"}, 300); 
  $(".next_action").animate({top:"0px"}, 300); 
});
$('.back_button').click(function(){
  $('html,body').animate({scrollTop:0},300);
  return false;
});

/*トップへ */
const pageTop = $(".back_button");
  pageTop.hide();
  $(window).on('scroll',function () {
    if ($(this).scrollTop() > 100) {
      $('.back_button').fadeIn();
    } else {
      $('.back_button').fadeOut();
    }
  });
  
$(".back_button").hide();
  $(window).on("scroll", function () {
    scrollHeight = $(document).height();
    scrollPosition = $(window).height() + $(window).scrollTop();
    footHeight = $(".footer_outer").innerHeight();
    if (scrollHeight - scrollPosition <= footHeight) {
      $(".back_button").css({
        'position': "absolute",
        'bottom': '40px',
        'rifht' : '30px',
      });

    } else {
      $(".back_button").css({
        'position': "fixed",
        'bottom': '0',
      });
    }
    
  });

/*hamburger*/
const ham = $('#js-hamburger'); 
const nav = $('#js-nav'); 
ham.on('click', function () { 

ham.toggleClass('active'); 
nav.toggleClass('active'); 
  $('.ham_bg').fadeToggle();
}); 
  

