// Initialize WOW JS
new WOW().init();

// Initialize Swippers
var aboutSwiper=new Swiper(".aboutSwiper",{
    slidesPerView:1,
    spaceBetween: 30,
    loop:true,
    speed:5000,
    autoplay:{
        delay:500,
    },
    freeMode: true,
    pagination: {
        el:".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        // when window width is <=599px
        599:{
            slidesPerView:2,
            spaceBetweenSlides:50
        },
    }
});

var planeSwiper=new Swiper(".planeSwiper",{
    loop:true,
    speed:5000,
    autoplay:{
        delay:500,
    },
    pagination:{
        el:".swiper-pagination",
        clickable:true,
    },
    navigation:{
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

// Get the elements
const menu=document.querySelector(".menu");
const menuBtn=document.querySelector(".menu-btn"); 

// Toggle the navbar menu on click Open/close
menuBtn.addEventListener("click", ()=>{
    menu.classList.toggle('nav-toggle');
});

// Get the current year and add it into the HTML
document.querySelector(".year").innerHTML=new Date().getFullYear();





// disabling inspect element
document.addEventListener("contextmenu", function(e){
    e.preventDefault(); //this prevents right click
});
document.onkeydown=function(e){
    if(event.keycode==123){
        return false;
    }
    if(e.ctrlKey && e.shiftKey && e.keyCode=="I".charCodeAt(0)){
        return false;
    }
    if(e.ctrlKey && e.shiftKey && e.keyCode=="C".charCodeAt(0)){
        return false;
    }
    if(e.ctrlKey && e.shiftKey && e.keyCode=="J".charCodeAt(0)){
        return false;
    }
    if(e.ctrlKey && e.keyCode=="U".charCodeAt(0)){
        return false;
    }
};