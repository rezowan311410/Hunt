
    'use strict'


$('.banner-slider').slick({
  dots: false,
  autoplay:true,
  fade:true,
  arrows:false,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
 
});

$('.service-slider').slick({
  dots: false,
  autoplay:false,
  arrows:true,
  prevArrow:"<i class='fa fa-angle-left prev'></i>",
  nextArrow:"<i class='fa fa-angle-right next'></i>",
  infinite: true,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
  vertical:true,

        responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
 
});

$('.img-slider').slick({
  dots: false,
  autoplay:false,
  fade:false,
  arrows:true,
  infinite: true,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
  vertical:true,
  centerMode:true,
  centerPadding:0,
  asNavFor:'.text-slider',
  prevArrow:'<i class=" fa fa-angle-down prev1"></i>',
  nextArrow:'<i class=" fa fa-angle-up next1"></i>',
        responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: false,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        vertical:false,
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
 
});


$('.text-slider').slick({
  dots: false,
  autoplay:false,
  fade:false,
  arrows:false,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  asNavFor: '.img-slider',
 
});


$('.counter').counterUp({
                delay: 10,
                time: 1000
            });




$('.site-slider').slick({
  dots: false,
  autoplay:true,
  
  arrows:false,
  infinite: true,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 1,
  
    
        responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        vertical:false,
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
 
});

// var myvar = document.querySelector('#para-Id');

// function addStyle() {
	
// 	myvar.classList.add('para-style');
// }


// function removeStyle() {
	
// 	myvar.classList.remove('para-style');
// }
//  var count = 0;
// document.querySelector('#areav').addEventListener('keypress',function(event){
//   var text = event.key;
//   count++;
//   document.querySelector('#para').innerHTML = 'you have pree ' + count;
// });

// var c = document.getElementById('mycanvas');

// var ctx = c.getContext('2d');
// ctx.fillStyle = 'green';
// ctx.fillRect(10,10,380,280);
// ctx.lineWidth = 3;
// ctx.strokeStyle = 'black';
// ctx.strokeRect(12,12,300,400);

// centerx = c.width / 2;
// centery = c.height /2;

// ctx.beginPath();
// ctx.arc(centerx, centery,50,20,2*Math.PI,false);
// ctx.fillStyle = 'red';
// ctx.fill();
// ctx.stroke();

$(window).scroll(function(){
  var scrollamount = $(window).scrollTop()
  if (scrollamount > 300) {
    $('.men').addClass('fixe')
  }else{
    $('.men').removeClass('fixe')
  }
})


    var colorSheets = [
        {
            color: "#ff8400",
            title: "Switch to Default",
            href: "./css/color-default.css"
    },
        {
            color: "#ff463a",
            title: "Switch to Red",
            href: "./css/color-red.css"
    },
        {
            color: "#4bda28",
            title: "Switch to Green",
            href: "./css/color-green.css"
    },
        {
            color: "#4650dc",
            title: "Switch to Blue",
            href: "./css/color-blue.css"
    },
        {
            color: "#f41c54",
            title: "Switch to Magenta",
            href: "./css/color-magenta.css"
    },
        {
            color: "#655a40",
            title: "Switch to mati",
            href: "./css/color-mati.css"
    },

            {
            color: "#f5f5f5",
            title: "Switch to white",
            href: "/css/color-pink.css"
    },
];

    ColorSwitcher.init(colorSheets);


    // $(document).ready(function{

    // });
  // top scroll start



 $('.go-top').hide();

$(window).scroll(function(){
  var scroll = $(window).scrollTop()
  if (scroll < 200) {
   $('.go-top').fadeOut();
  }else{
    $('.go-top').fadeIn();
  }
});

$('.go-top').click(function(){
  $('body,html').animate({
    scrollTop:0,
  },2000);
});

// top scroll end

// 

// const taskone = () => {
//   console.log('taskone');
// };

// const dataLoading =() => {
//   console.log('tasktwo. dataLoading');
// };

// const tasktwo = () => {
//   setTimeout(dataLoading,10000);
// };

// const taskthree = () => {
//   console.log('taskthree');
// };

// const taskfour = () => {
//   console.log('taskfour');
// };


// taskone();
// tasktwo();
// taskthree();
// taskfour();


const taskone = () => {
  console.log('taskone');
};

const tasktwo = () => {
  console.log('tasktwo');
};
const loading = () => {
  console.log('loadi.taskthree');
};
const taskthree = () => {
  setTimeout(loading,1000)
};

const taskfour = () => {
  console.log('taskfour');
};

const taskfive = () => {
  console.log('taskfive');
};

taskone();
tasktwo();
taskthree();
taskfive();
taskfive();