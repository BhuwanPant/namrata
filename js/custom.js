$(function(){
    var a, b, c, d, e, g;
    a = $(".header");
    b = a.outerHeight() + 15;
    c = a.find(".nav-link");
    c.on("click", function (){
        var e = $(this).attr("href");
        var d = $(e.substr(e.indexOf("#"), e.length));
        if (window.innerWidth < 1200)
        {
            d = "#" === d ? 0 : $(d).offset().top - 80;
        }
        else
        {
            d = "#" === d ? 0 : $(d).offset().top - b;
        }
        $("html, body").stop().animate({ scrollTop: d }, 600, "swing");
        $("#myNavMenu").removeClass("show");
    });
});
(function() {
    // var $gallery = new SimpleLightbox('.galleyImages a', {});
    // var $floor1 = new SimpleLightbox('.firstFloorImage a', {});
    // var $restfloor = new SimpleLightbox('.restFloorPlan a', {});
    // var $masterPlan = new SimpleLightbox('.masterPlan a', {});
})();

window.addEventListener("resize", function(){
    // a = $(".header");
    // b = a.outerHeight();
    // $("body").css("padding-top",b);
})

window.addEventListener("load", function(){
    // a = $(".header");
    // b = a.outerHeight();
    // $("body").css("padding-top",b);
    
    // document.body.style.paddingTop = b + "px";
    setTimeout(function(){
        // $("#adsForm").modal("show");
    }, 5000);
    $(".preloader").fadeOut(500);
})


var gallery = new PhotoSwipeLightbox({
gallery: '.galleyImages',
children: 'a',
pswpModule: PhotoSwipe
});
var floor1 = new PhotoSwipeLightbox({
gallery: '.firstFloorImage',
children: 'a',
pswpModule: PhotoSwipe
});
var restfloor = new PhotoSwipeLightbox({
gallery: '.restFloorPlan',
children: 'a',
pswpModule: PhotoSwipe
});
var masterPlan = new PhotoSwipeLightbox({
gallery: '.masterPlan',
children: 'a',
pswpModule: PhotoSwipe
});
gallery.init();
floor1.init();
restfloor.init();
masterPlan.init();

const lightbox = new PhotoSwipeLightbox({
  gallery: '#videoGallery',
  children: 'a'
});

lightbox.init();


if($('.reImagineLiving .reImagineSlide').length > 2)
{
    $(".reImagineLiving").slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: true,
        nextArrow: `<div class="slickNav navNext"><i class="fa-solid fa-chevron-right"></i></div>`,
        prevArrow: `<div class="slickNav navPrev"><i class="fa-solid fa-chevron-left"></i></div>`,
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 1
            }
    
        }]
    });
}
$(".priceSlider").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: `<div class="slickNav navNext"><i class="fa-solid fa-chevron-right"></i></div>`,
    prevArrow: `<div class="slickNav navPrev"><i class="fa-solid fa-chevron-left"></i></div>`,
    responsive: [{
        breakpoint: 768,
        settings: {
            slidesToShow: 2
        }

    },{
        breakpoint: 576,
        settings: {
            slidesToShow: 1
        }

    }]
});

$(document).ready(function(){
    $(".galleyImagesCarousel").slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 5000,
        nextArrow: `<div class="slickNav navNext"><i class="fa-solid fa-chevron-right"></i></div>`,
        prevArrow: `<div class="slickNav navPrev"><i class="fa-solid fa-chevron-left"></i></div>`,
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 2
            }
    
        },{
            breakpoint: 576,
            settings: {
                slidesToShow: 1
            }
    
        }]
    });
    $(".reviewCarousel").slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        // dots: true,
        autoplay: true,
        autoplaySpeed: 4000,
        // centerMode: true,
        nextArrow: `<div class="slickNav navNext"><i class="fa-solid fa-chevron-right"></i></div>`,
        prevArrow: `<div class="slickNav navPrev"><i class="fa-solid fa-chevron-left"></i></div>`,
        responsive: [{
            breakpoint: 991,
            settings: {
                slidesToShow: 2
            }
    
        },{
            breakpoint: 786,
            settings: {
                slidesToShow: 1
            }
    
        },{
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
                arrows: false
            }
    
        }]
    });
});

$(".clubSlider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: `<div class="slickNav navNext"><i class="fa-solid fa-chevron-right"></i></div>`,
    prevArrow: `<div class="slickNav navPrev"><i class="fa-solid fa-chevron-left"></i></div>`,
    responsive: [{
        breakpoint: 768,
        settings: {
            slidesToShow: 1
        }

    }]
});

// Faq Sections

var faq = document.getElementsByClassName("faqCard");

for(let x = 0; x < faq.length; x++)
{
    faq[x].querySelector(".faqQuestion").addEventListener("click", openpara);
}

function openpara()
{
    var y = this.parentElement;
    y.classList.toggle("open");
}

new WOW().init();


