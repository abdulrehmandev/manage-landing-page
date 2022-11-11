
const headerToggle = document.querySelector('.header-toggle')
const primaryNav = document.getElementById('primary-navigation')

headerToggle.addEventListener('click', () => {
  const ariaExp = !headerToggle.getAttribute
  console.log('click')
  headerToggle.setAttribute('aria-expanded', ariaExp)
  primaryNav.setAttribute('data-opened', ariaExp)
})