const btn = document.getElementById("btnTop")
btn.style.display = "none";

window.addEventListener('scroll', () => {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        btn.style.display = "flex";
    } else {
        btn.style.display = "none";
    }
})

const topFunction = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0
}