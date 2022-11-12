
const headerToggle = document.querySelector('.header-toggle')
const primaryNav = document.getElementById('primary-navigation')

headerToggle.addEventListener('click', () => {
  var ariaExp = headerToggle.getAttribute('aria-expanded') === 'false' ? true : false

  headerToggle.setAttribute('aria-expanded', ariaExp)
  primaryNav.setAttribute('data-opened', ariaExp)
})

const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: false,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  // scrollbar: {
  //   el: '.swiper-scrollbar',
  // },

});