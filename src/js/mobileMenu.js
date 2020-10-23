const mobileMenu = () => {
  const mobileMenuBtn = document.querySelector('#mobileMenuBtn');
  const mobileMenu = document.querySelector('#mobileMenu');
  const closeMobileMenu = document.querySelector('#closeMobileMenu');
  const mobileMenuItems = document.querySelector('#mobileMenuItems');

  mobileMenuBtn.addEventListener('click', (e) => {
    mobileMenu.classList.toggle('hidden');
  })

  mobileMenuItems.addEventListener('click', (e) => {
    mobileMenu.classList.add('hidden');
  })

  closeMobileMenu.addEventListener('click', (e) => {
    mobileMenu.classList.toggle('hidden');
  })

}

mobileMenu();