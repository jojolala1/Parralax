const parralax_el = document.querySelectorAll('.parralax');

let xValue = 0, 
    yValue = 0

    let rotateDegree =0;

window.addEventListener("mousemove", (e)=>{
    xValue = e.clientX - window.innerWidth/2
    yValue = e.clientY - window.innerHeight/2

    rotateDegree =( xValue / ( window.innerWidth/2)) * 20;

    parralax_el.forEach((el) => {
        let speedx = el.dataset.speedx;
        let speedy = el.dataset.speedy;
        let speedz = el.dataset.speedz;
        let rotateSpeed = el.dataset.rotation;


        let isInLeft = parseFloat(getComputedStyle(el).left) < window.innerWidth/2 ? 1 : -1;

        let zValue = (e.clientX - parseFloat(getComputedStyle(el).left)) * isInLeft * 0.1;

        el.style.transform = `perspective(2300px) translateZ(${
            zValue * speedz
        }px) rotateY(${rotateDegree * rotateSpeed}deg) translateX(calc(-50% + ${
            -xValue * speedx
        }px)) translateY(calc(-50% + ${
            -yValue *speedy
        }px))`;
    })
})



const burger = document.querySelector('.burger')

burger.addEventListener('click', ()=> {
    burger.classList.toggle('active')
})

//ca sera pour cacher la nav en scroll bas et l'afficher en scroll haut
window.addEventListener('scroll', () => {
    if (window.scrollY > previousScrollY) {
        console.log('Défilement descendant détecté');
    }
    previousScrollY = window.scrollY;
});

let previousScrollY = window.scrollY;







