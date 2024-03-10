document.addEventListener('DOMContentLoaded', function () {
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
    });

   menBox.addEventListener('mouseout', function () {
        a.classList.add('hide');
    });  


     womenBox.addEventListener('mouseover', function () {
        b.classList.remove('hide2');
    });

   womenBox.addEventListener('mouseout', function () {
        b.classList.add('hide2');

    });   


    kidBox.addEventListener('mouseover', function () {
        c.classList.remove('hide3');
    });

   kidBox.addEventListener('mouseout', function () {
    c.classList.add('hide3');
        
    });   

    homeBox.addEventListener('mouseover', function () {
        d.classList.remove('hide4');
    });

   homeBox.addEventListener('mouseout', function () {
    d.classList.add('hide4');
        
    });   


    beautyBox.addEventListener('mouseover', function () {
        e.classList.remove('hide5');
    });

   beautyBox.addEventListener('mouseout', function () {
    e.classList.add('hide5');
        
    }); 
    
    
    studioBox.addEventListener('mouseover', function () {
        f.classList.remove('hide6');
    });

   studioBox.addEventListener('mouseout', function () {
    f.classList.add('hide6');
        
    }); 


});