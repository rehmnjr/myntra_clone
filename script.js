
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

    let g = document.querySelector('.profile-category');
    let profileBox = document.querySelector('.Nav-profile');

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

    profileBox.addEventListener('mouseover', function () {
        g.classList.remove('hide7');
    });

    profileBox.addEventListener('mouseout', function () {
        g.classList.add('hide7');
    });


});

function redirectToWish() {
    window.location.href = './wishlist.html';
}

function redirectToSignup() {
    window.location.href = './signup.html';
}


const shopURLs = [
    './men.html',
    './page2.html',
    //we can add more URLS here: this is OBJ

];


let arr = document.querySelectorAll('.home_category_img');
for (let i = 0; i < arr.length; i++) {
    arr[i].addEventListener('click', function () {
        window.location.href = shopURLs[i];
    });
}

// function myfun(event){
// //    event.target.style.cursor = 'pointer';
// }




//login function and predefined database here //
let logArr = [
    { mobile: "7065047573", pswrd: "@myntrame" },
    { mobile: "8130771969", pswrd: "@myntrapa" },
    { mobile: "7289866631", pswrd: "@myntramom" },
    { mobile: "8800897516", pswrd: "@myntrabro" }
];

function load() {
    event.preventDefault();
    let flag = 1;
    let pswrd = document.querySelector('#password').value;
    let num = document.querySelector('#num').value;

    pswrd = pswrd.trim();

    let num_msg = document.querySelector('.num_msg');
    let pass_msg = document.querySelector('.pass_msg');

    if (num === "") {
        flag = 0; 
        num_msg.innerHTML ="*number cannot be empty"
    }else{
        num_msg.innerHTML ="";
    }
    if (pswrd == "") {
        flag = 0;
        pass_msg.innerHTML ="*password cannot be empty";
    }else{
        pass_msg.innerHTML ="";
}

    if (flag === 1) {
        let flag2 = 1;
        for (let i = 0; i < logArr.length; i++) {
            if (logArr[i].mobile === num && logArr[i].pswrd === pswrd) {
                flag2 = 1;
                break;
            } else {
                flag2 = 0;
            }
        }
        if (flag2 == 0) {
            alert('Login info not found');
        } else {
            window.location.href = "./index.html";
        }
    }

}
// load function ends here// 