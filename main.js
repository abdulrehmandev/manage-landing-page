
const headerToggle = document.querySelector('.header-toggle')
const primaryNav = document.getElementById('primary-navigation')

headerToggle.addEventListener('click', () => {
  var ariaExp = headerToggle.getAttribute('aria-expanded') === 'false' ? true : false

  headerToggle.setAttribute('aria-expanded', ariaExp)
  primaryNav.setAttribute('data-opened', ariaExp)
})