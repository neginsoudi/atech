var slide = document.getElementsByClassName('slide');
var prev = document.querySelector('#prev');
var next = document.querySelector('#next');
var n = 0;
var i;

function disno(){
    for(i = 0; i<slide.length ; i++){
        slide[i].style.display ='none';
    }
}

next.addEventListener('click',function(){
n++;
if(n> slide.length-1){
    n=0;
}
disno();
slide[n].style.display = 'block';
})
prev.addEventListener('click',function(){
    n--;
    if(n < 0){
        n = slide.length - 1;
    }
    disno();
    slide[n].style.display = 'block';
    })
    // ---------------------------------------
    

    $('.slickslider').slick({
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 3,
        autoplay: true,
        autoplaySpeed: 2000,
        slickslider: [
          {
            breakpoint: 768,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 3
            }
          },
          {
            breakpoint: 480,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 1
            }
          }
        ]
      });
//////////////////////////////////////////
$('.slider-text').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  });
     