// header
window.onscroll = function() {scrollFunction()};
function scrollFunction(){
    if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80 ){
        document.querySelector('.header').style.height = "112px"
        document.querySelector('.header').style.background ="#e7e7e7"
    }
    else{
        document.querySelector('.header').style.height = "136px"
        document.querySelector('.header').style.background = "transparent"
    }
}
//  accordion
 var button = document.querySelector('.button-submenu')
 button.addEventListener("click",function(){
     document.querySelector('.n-sub').classList.toggle("open")
})
// menu
var menu = document.querySelector('.style_icon')
menu.addEventListener("click",function(e){
    console.log(e.target)
    document.querySelector('.menu_mobile').style.transform = 'translateX(0)'
    document.querySelector('.menu_mobile').style.opacity ="1";
    document.querySelector('.overlay').style.display ='block';
})
var MenuClose = document.querySelector('.close-mmenu')
MenuClose.addEventListener("click",function(e){
    console.log(e.target)
    document.querySelector('.menu_mobile').style.transform = 'translateX(-100%)';
    document.querySelector('.overlay').style.display ='none';
})
var Overlay = document.querySelector('.overlay')
Overlay.addEventListener("click",function(e){
    document.querySelector('.menu_mobile').style.transform = 'translateX(-100%)';
    document.querySelector('.overlay').style.display ='none';
})
// slidershow
var slideIndex = 1
var change = setInterval(function(){
    showSlider(++slideIndex)
},2000)
showSlider(slideIndex)
function plusSlides(n){
    showSlider(slideIndex += n)
    clearInterval(change)
    change = setInterval(function(){
        showSlider(++slideIndex)
    },2000)
}
 function  currentSlider(n){
     showSlider(slideIndex=n)
     clearInterval(change);
     change = setInterval(function(){
        showSlider(++slideIndex)
    },2000)
 }
function showSlider(n){
    var i;
    var slider = document.getElementsByClassName('boxhome-img')
    var dots = document.getElementsByClassName('dot');
    if(n> slider.length){
        slideIndex =1
    }
    if(n<1){
        slideIndex = slider.length;
    }
    for( i =0; i<slider.length;i++){
        slider[i].style.display = "none";
    }
    for( i =0 ; i<dots.length; i++){
        dots[i].className = dots[i].className.replace("active","")  
    }
    slider[slideIndex-1].style.display = 'block';
    dots[slideIndex-1].className += " active";
}
// register
var logUp = document.getElementsByClassName('actives')[0]
logUp.onclick = function(e){
    document.querySelector('.infopopaccount ').style.display = 'block';
    document.querySelector('.inforsignin').style.display = 'none';
    document.querySelector('.actives .logUp').style.opacity = '1';
    document.querySelector('.actives .logIn').style.opacity = '0.3';
}
var logIn = document.getElementsByClassName('actives')[1]
logIn.onclick = function(e){
    document.querySelector('.inforsignin').style.display = 'block';
    document.querySelector('.infopopaccount ').style.display = 'none';
    document.querySelector('.actives .logIn').style.opacity = '1';
    document.querySelector('.actives .logUp').style.opacity = '0.3';
}
// show register
 var register = document.querySelector('.register')
function User(){
    register.classList.toggle('regis')
}