//Slide début de page

const timeline = gsap.timeline({ defaults: { ease: 'power1.out' } });

timeline.to('.intro__text', { y: '0%', duration: 1, stagger: 0.25 });
timeline.to('.slider', { y: '-100%', duration: 1.5, delay: 0.5 });
timeline.to('.intro', { y: '-100%', duration: 1 }, '-=1');

//Affichage de la Navigation

const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.header-nav');
const logo = document.querySelector('.header-logo');

hamburger.addEventListener('click', () => {
  if (nav.classList.contains('nav-off')) {
    nav.classList.replace('nav-off', 'nav-on');
  } else {
    nav.classList.replace('nav-on', 'nav-off');
  }
  if (hamburger.classList.contains('hamburger-off')) {
    hamburger.classList.replace('hamburger-off', 'hamburger-open');
  } else {
    hamburger.classList.replace('hamburger-open', 'hamburger-off');
  }
  if (logo.classList.contains('logo-on')) {
    logo.classList.replace('logo-on', 'logo-off');
  } else {
    logo.classList.replace('logo-off', 'logo-on');
  }
});

//Changement d'image et texte: Caroussel

const img = document.querySelectorAll('.caroussel-img');
const droite = document.querySelector('.header-btn-right');
const gauche = document.querySelector('.header-btn-left');
let index = 0;

function precedentImg() {
  if (index === 0) {
    index = 3;
  }
  img[index % img.length].classList.replace(
    'header-img-caroussel-active',
    'header-img-caroussel-inactive'
  );
  img[(index - 1) % img.length].classList.replace(
    'header-img-caroussel-inactive',
    'header-img-caroussel-active'
  );
  index--;
}
function prochaineImg() {
  img[index % img.length].classList.replace(
    'header-img-caroussel-active',
    'header-img-caroussel-inactive'
  );
  img[(index + 1) % img.length].classList.replace(
    'header-img-caroussel-inactive',
    'header-img-caroussel-active'
  );
  index++;
}

//Carroussel text

const heroDescrption = document.querySelector('.hero-description');
const heading = document.querySelector('.heading');
const description = document.querySelector('.description');
let textA = {
  heading: 'Discover innovative ways to decorate.',
  description:
    'We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.',
};
let textB = {
  heading: 'We are available all across the globe.',
  description:
    "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.",
};
let textC = {
  heading: 'Manufactured with the best materials.',
  description:
    'Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.',
};

let texts = [textA, textB, textC];

function changeText() {
  heroDescrption.classList.add('hero-description-transition');
  setTimeout(function () {
    heading.textContent = texts[index % texts.length].heading;
    description.textContent = texts[index % texts.length].description;
    heroDescrption.classList.remove('hero-description-transition');
  }, 600);
}

function droiteImgText() {
  prochaineImg();
  changeText();
}
function gaucheImgText() {
  precedentImg();
  changeText();
}
droite.addEventListener('click', droiteImgText);
gauche.addEventListener('click', gaucheImgText);
