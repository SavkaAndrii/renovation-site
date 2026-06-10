
//menu burger 

const iconMenu = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.header__menu');
if (iconMenu) {
  iconMenu.addEventListener('click', function (e) {
    document.body.classList.toggle('_lock');
    iconMenu.classList.toggle('_active');
    menuBody.classList.toggle('_active');

  });
}

// click scroll

const listLink = document.querySelectorAll('.list-link[data-goto]');
if (listLink.length > 0) {
  listLink.forEach(listLink => {
    listLink.addEventListener('click', onMenuLinkClick);
  });

  function onMenuLinkClick(e) {
    const menuLink = e.target;
    if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
      const gotoBlock = document.querySelector(menuLink.dataset.goto);
      const gotoBlockValue = gotoBlock.getBoundingClientRect().top + window.scrollY - document.querySelector('header').offsetHeight;

      if (iconMenu.classList.contains('_active')) {
        document.body.classList.remove('_lock');
        iconMenu.classList.remove('_active');
        menuBody.classList.remove('_active');
      }


      window.scrollTo({
        top: gotoBlockValue,
        behavior: 'smooth'
      });
      e.preventDefault();
    }
  }
}

//scroll visible

// Спостерігаємо за всіма .reveal-on-scroll
const options = { threshold: 0.15 };              // 15 % секції у вʼюпорті
const onScroll = (entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');   // додаємо клас
      observer.unobserve(entry.target);           // one-shot (прибрати, якщо потрібна «повторна» анімація)
    }
  });
};

const observer = new IntersectionObserver(onScroll, options);
document.querySelectorAll('.reveal-on-scroll').forEach(el => observer.observe(el));

