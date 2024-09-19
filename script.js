const parralaxContent = document.getElementById('firstPage');
const parralax_el = document.querySelectorAll('.parralax');

// Fonction pour appliquer les transformations de parallaxe
function applyParallax(xValue, yValue) {
    // Calculer l'angle de rotation en fonction de xValue
    const rotateDegree = (xValue / (parralaxContent.getBoundingClientRect().width / 2)) * 20;

    // Appliquer les transformations de parallaxe à chaque élément
    parralax_el.forEach((el) => {
        const speedx = el.dataset.speedx;
        const speedy = el.dataset.speedy;
        const speedz = el.dataset.speedz;
        const rotateSpeed = el.dataset.rotation;

        const isInLeft = parseFloat(getComputedStyle(el).left) < parralaxContent.getBoundingClientRect().width / 2 ? 1 : -1;

        const zValue = (xValue - parseFloat(getComputedStyle(el).left)) * isInLeft * 0.1;

        // Appliquer les transformations aux éléments avec l'effet parallaxe
        el.style.transform = `perspective(1000px) translateZ(${zValue * speedz
            }px) rotateY(${rotateDegree * rotateSpeed}deg) translateX(calc(-50% + ${-xValue * speedx
            }px)) translateY(calc(-50% + ${-yValue * speedy
            }px))`;
    });
}

// Événement pour ordinateur (souris)
parralaxContent.addEventListener("mousemove", (e) => {
    const rect = parralaxContent.getBoundingClientRect();

    // Calculer les coordonnées de la souris par rapport au centre de firstPage
    const xValue = e.clientX - (rect.left + rect.width / 2);
    const yValue = e.clientY - (rect.top + rect.height / 2);

    applyParallax(xValue, yValue);
});

// Événement pour mobile (orientation du téléphone)
window.addEventListener("deviceorientation", (event) => {
    // Obtenir les valeurs gamma (inclinaison gauche/droite) et beta (inclinaison haut/bas)
    const gamma = event.gamma; // Inclinaison gauche/droite
    const beta = event.beta; // Inclinaison haut/bas

    // Ajuster les valeurs pour être utilisées dans la transformation
    const xValue = gamma * 8; // Multiplier pour ajuster la sensibilité
    const yValue = beta * -5; // Multiplier pour ajuster la sensibilité

    applyParallax(xValue, yValue);
});


const navPage = document.getElementById('navPage')

const burger = document.querySelector('.burger')

burger.addEventListener('click', ()=> {
    burger.classList.toggle('active')
    navPage.classList.toggle('hidden')
})

//ca sera pour cacher la nav en scroll bas et l'afficher en scroll haut
window.addEventListener('scroll', () => {
    if (window.scrollY > previousScrollY) {
        console.log('Défilement descendant détecté');
    }
    previousScrollY = window.scrollY;
});

let previousScrollY = window.scrollY;










