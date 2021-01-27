

$(window).scroll(function() {
  if ($(this).scrollTop() > 300) {
    $('.pageup').fadeIn();
  }else{
    $('.pageup').fadeOut();
  }

  
   
  });







$(document).ready(function(){
    $('.carousel__inner').slick(
        {
            infinite: true,
            slidesToShow: 4,
            slidesToScroll: 1,
            prevArrow:'<button type="button" class="slick-prev"><</button>',
            nextArrow:'<button type="button" class="slick-next">></button>',
          }
    );
  });

 

$(document).ready(function(){
    $('.slider').slick({
        arrows:false,
        dots:true,
        customPaging:function(){return ''}
      }
      );
});

