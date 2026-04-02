const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {   // scroll 50px dan oshsa
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

const link = document.querySelector('a[href="#html"]');
const section = document.getElementById('html');

link.addEventListener('click', function (e) {
  e.preventDefault(); // default jumpni to'xtatamiz

  // header balandligi (px) – sizning saytingiz header balandligini kiriting
  const headerOffset = 220;

  // sectionning tepasi
  const elementPosition = section.getBoundingClientRect().top;
  const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

  // smooth scroll
  window.scrollTo({
    top: offsetPosition,
    behavior: "smooth"
  });
});