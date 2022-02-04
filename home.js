let loginForm = document.querySelector('.login-container');
document.querySelector('#login-btn').onclick = () =>{
    loginForm.classList.toggle('active');
}
document.querySelector('#close-login').onclick = () =>{
    loginForm.classList.remove('active');
}


let regForm = document.querySelector('.login-container-1');
document.querySelector('#reg').onclick = () =>{
    regForm.classList.toggle('active');
}
document.querySelector('#close-login-1').onclick = () =>{
    regForm.classList.remove('active');
}

let returnForm = document.querySelector('.login-container-1');
document.querySelector('#back').onclick = () =>{
    returnForm.classList.toggle('active');
}

let returnHome = document.querySelector('.login-container');
document.querySelector('#back2').onclick = () =>{
    returnHome.classList.toggle('active');
}






window.onscroll = () =>{
    if(window.scrollY > 80){
        document.querySelector('.header .header-2').classList.add('active');
    }
    else{
        document.querySelector('.header .header-2').classList.remove('active');
    }
}
window.onload = () =>{
    if(window.scrollY > 80){
        document.querySelector('.header .header-2').classList.add('active');
    }
    else{
        document.querySelector('.header .header-2').classList.remove('active');
    }
}

var swiper = new Swiper(".new-slider", {
    spaceBetween: 10,
    loop:true,
    centeredSlides: true,
    autoplay: {
      delay: 9500,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      450: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 3,
      },
      1024: {
        slidesPerView: 4,
      },
    },
  });


  var swiper = new Swiper(".category-slider", {
    spaceBetween: 10,
    grabCursor:true,
    loop:true,
    centeredSlides: true,
    autoplay: {
      delay: 9500,
      disableOnInteraction: false,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });