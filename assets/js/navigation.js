let goTop = document.querySelector('.back_to_top');
window.addEventListener('scroll', trackScroll);
goTop.addEventListener('click', backToTop);
function trackScroll() {
    let scroll = window.pageYOffset;
    let coord = document.documentElement.clientHeight;

    if (scroll > coord) {
        goTop.classList.add('back_to_top-show');
    }
    else {
        goTop.classList.remove('back_to_top-show');
    }
} function backToTop() {
    if (window.pageYOffset > 0) {
        window.scrollBy(0, -80);
        setTimeout(backToTop, 0);
    }
}

let nav1 = document.getElementById('nav-1'),
    nav2 = document.getElementById('nav-2'),
    nav3 = document.getElementById('nav-3'),
    nav_1 = document.getElementById('nav1'),
    nav_2 = document.getElementById('nav2'),
    nav_3 = document.getElementById('nav3');


nav1.addEventListener('click', (e) => {
    e.preventDefault();
    console.log('scrooll');
    scrollTo(0, 0)
});
nav2.addEventListener('click', (e) => {
    e.preventDefault();
    scrollTo(0, 700);
});
nav3.addEventListener('click', (e) => {
    e.preventDefault();
    scrollTo(0, 2000);
})
nav_1.addEventListener('click', (e)=>{
    e.preventDefault();
    scrollTo(0,0);
})
nav_2.addEventListener('click', (e)=>{
    e.preventDefault();
    scrollTo(0, 450);
})
nav_3.addEventListener('click', (e)=>{
    e.preventDefault();
    scrollTo(0, 6000);
})