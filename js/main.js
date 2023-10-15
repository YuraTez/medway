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

if($('.custom-select').length){
    $('.custom-select').styler();
}


$('#product-card').slick({
    infinite: true,
    arrow: true,
    dots: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: '<div class="prev"><svg width="14" height="11" viewBox="0 0 14 11" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
        '<path d="M3.67144e-05 5.47891C0.00481464 5.66584 0.0611158 5.77851 0.133189 5.85934L4.0897 10.7289C4.27659 10.9924 4.7001 11.0341 4.96488 10.8201C5.22965 10.6062 5.24372 10.2061 5.03128 9.96805L1.88318 6.0876L13.3913 6.0876C13.7275 6.0876 14 5.81509 14 5.47891C14 5.14273 13.7275 4.87021 13.3913 4.87021L1.88318 4.87021L5.03128 0.989786C5.27225 0.749352 5.20377 0.327554 4.94941 0.101302C4.75361 -0.0728456 4.23177 -0.0173598 4.0897 0.228918L0.133189 5.09848C0.0301518 5.2246 -0.00121738 5.3184 3.67144e-05 5.47891Z"/>\n' +
        '</svg>\n</div>',
    nextArrow: '<div class="next"><svg width="14" height="11" viewBox="0 0 14 11" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
        '<path d="M14 5.47891C13.9952 5.66584 13.9389 5.77851 13.8668 5.85934L9.9103 10.7289C9.72341 10.9924 9.2999 11.0341 9.03512 10.8201C8.77035 10.6062 8.75628 10.2061 8.96872 9.96805L12.1168 6.0876L0.608695 6.0876C0.272513 6.0876 4.49523e-07 5.81509 4.78913e-07 5.47891C5.08303e-07 5.14273 0.272513 4.87021 0.608695 4.87021L12.1168 4.87021L8.96872 0.989786C8.72775 0.749352 8.79623 0.327554 9.05059 0.101302C9.24639 -0.0728456 9.76823 -0.0173598 9.9103 0.228918L13.8668 5.09848C13.9698 5.2246 14.0012 5.3184 14 5.47891Z"/>\n' +
        '</svg>\n</div>'
});

const questionsList = document.querySelectorAll(".questions-item-header");

if(questionsList !== null){
    questionsList.forEach((el)=>{
        el.addEventListener("click",function (){
            el.classList.toggle("active");
            $(this).siblings().slideToggle( "slow" );
        })
    })
}

const vacanciesList = document.querySelectorAll(".vacancies-list__btn");

if(vacanciesList !== null){
    vacanciesList.forEach((el)=>{
        el.addEventListener("click",function (){
            el.classList.toggle("active");
            $(this).parent().find(".vacancies-list__body").slideToggle( "slow" );
        })
    })
}

const maskPhone = () => {
    $("#phone").mask("+375 (99) 999-99-99");
}

maskPhone()

$("#fl_nm").on("input", function (){
    $(".fl_upld-file").text($(this)[0].files[0].name)
})

$(".job-response").on("click" , function (){
    $(".modal-form").addClass("active");
    $(".overlay").addClass("active");
});

$(".modal-cross , .overlay").on("click" , function (){
    $(".modal-form").removeClass("active");
    $(".overlay").removeClass("active");
});

$(".form-vacation").on("submit" , function (event){
    event.preventDefault();
});