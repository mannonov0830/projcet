const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {   // scroll 50px dan oshsa
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});