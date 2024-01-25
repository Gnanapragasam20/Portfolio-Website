let container = document.querySelectorAll('div');

window.onscroll = () => {
    container.forEach(a => {
        let top = window.scrollY;
        let offset = a.offsetTop - 300;
        let height = a.offsetHeight;
        
        if (top >= offset && top < offset + height) {
            a.classList.add('show-animate');
        } else {
            a.classList.remove('show-animate');
        }
    })
}

const toTop = document.querySelector('.to-top');
window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
        toTop.classList.add("active");
    } else {
        toTop.classList.remove("active");
    }
})