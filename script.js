/* =========================
   MOBILE NAVIGATION
========================= */

const menuButton = document.querySelector('.menu');
const nav = document.querySelector('#nav');

menuButton?.addEventListener('click', () => {
  const open = nav.classList.toggle('open');

  menuButton.setAttribute(
    'aria-expanded',
    String(open)
  );

  menuButton.textContent = open
    ? 'Close'
    : 'Menu';
});


document.querySelectorAll('#nav a').forEach(link => {
  link.addEventListener('click', () => {

    nav.classList.remove('open');

    menuButton?.setAttribute(
      'aria-expanded',
      'false'
    );

    if (menuButton) {
      menuButton.textContent = 'Menu';
    }

  });
});


/* =========================
   SCROLL REVEAL
========================= */

const observer = new IntersectionObserver(
  entries => {

    entries.forEach(entry => {

      if (entry.isIntersecting) {

        entry.target.classList.add('visible');

        observer.unobserve(entry.target);

      }

    });

  },
  {
    threshold: 0.12
  }
);


document
  .querySelectorAll('.reveal')
  .forEach(element => observer.observe(element));


/* =========================
   NEWSLETTER
========================= */

document
  .querySelector('.newsletter form')
  ?.addEventListener(
    'submit',
    event => {

      event.preventDefault();

      const form =
        event.currentTarget;

      const message =
        document.querySelector(
          '.form-message'
        );


      if (
        form.checkValidity() &&
        message
      ) {

        message.textContent =
          'You\'re on the list. Welcome.';

        form.reset();

      }

    }
  );