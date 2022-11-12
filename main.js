
const headerToggle = document.querySelector('.header-toggle')
const primaryNav = document.getElementById('primary-navigation')

headerToggle.addEventListener('click', () => {
  var ariaExp = headerToggle.getAttribute('aria-expanded') === 'false' ? true : false

  headerToggle.setAttribute('aria-expanded', ariaExp)
  primaryNav.setAttribute('data-opened', ariaExp)
})

const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  loop: false,

  pagination: {
    el: '.swiper-pagination',
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});