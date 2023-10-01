$('.main-slider').slick({
    infinite: true,
    arrow: false,
    dots: true,
    appendDots: '.dots-container',
    dotsClass: 'dots-slider',
    slidesToShow: 1,
    slidesToScroll: 1,
});

document.addEventListener("scroll", function (){
    const positionTop = window.pageYOffset
    if(positionTop > 100){
        $(".header").addClass("scroll");
    }else{
        $(".header").removeClass("scroll");
    }
})

$(".burger").on("click",function (){
    $(this).toggleClass("active")
    $(".header-top").toggleClass("active");
})

$("#search").on("input",function (){
    const value = this.value
    if(value.length > 0){
        $(".search-cross").addClass("active");
        $(".result-search").addClass("active");
    }else{
        $(".search-cross").removeClass("active");
        $(".result-search").removeClass("active");
    }
})

$(".search-cross").on("click" , function (){
    $("#search").val("");
    $(".result-search").removeClass("active");
    $(this).removeClass("active");
})

document.addEventListener("scroll", function (){
    const positionTop = window.pageYOffset
    if(positionTop > 1000){
        $(".btn-scroll-top").addClass("active");
    }else{
        $(".btn-scroll-top").removeClass("active");
    }
})

$(".btn-scroll-top").on("click", function (){
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

$('.custom-select').styler();