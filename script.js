
document.addEventListener('DOMContentLoaded', function () {
    let fade = document.querySelector('.fade-box');

    let a = document.querySelector('.men-category-hide');
    let menBox = document.querySelector('.box1');

    let b = document.querySelector('.women-category-hide');
    let womenBox = document.querySelector('.box2');

    let c = document.querySelector('.kid-category-hide');
    let kidBox = document.querySelector('.box3');

    let d = document.querySelector('.home-category-hide');
    let homeBox = document.querySelector('.box4');

    let e = document.querySelector('.beauty-category-hide');
    let beautyBox = document.querySelector('.box5');

    let f = document.querySelector('.studio-category');
    let studioBox = document.querySelector('.box6');

    menBox.addEventListener('mouseover', function () {
        a.classList.remove('hide');
        fade.classList.remove('fade-hide');
    });

   menBox.addEventListener('mouseout', function () {
        a.classList.add('hide');
        fade.classList.add('fade-hide');
    });  


     womenBox.addEventListener('mouseover', function () {
        b.classList.remove('hide2');
        fade.classList.remove('fade-hide');
    });

   womenBox.addEventListener('mouseout', function () {
        b.classList.add('hide2');
        fade.classList.add('fade-hide');

    });   


    kidBox.addEventListener('mouseover', function () {
        c.classList.remove('hide3');
        fade.classList.remove('fade-hide');
    });

   kidBox.addEventListener('mouseout', function () {
    c.classList.add('hide3');
    fade.classList.add('fade-hide');
        
    });   

    homeBox.addEventListener('mouseover', function () {
        d.classList.remove('hide4');
        fade.classList.remove('fade-hide');
    });

   homeBox.addEventListener('mouseout', function () {
    d.classList.add('hide4');
    fade.classList.add('fade-hide');
        
    });   


    beautyBox.addEventListener('mouseover', function () {
        e.classList.remove('hide5');
        fade.classList.remove('fade-hide');
    });

   beautyBox.addEventListener('mouseout', function () {
    e.classList.add('hide5');
    fade.classList.add('fade-hide');
        
    }); 
    
    
    studioBox.addEventListener('mouseover', function () {
        f.classList.remove('hide6');
        fade.classList.remove('fade-hide');
    });

   studioBox.addEventListener('mouseout', function () {
    f.classList.add('hide6');
    fade.classList.add('fade-hide');
        
    }); 


});