const area = document.querySelector('.hero__cursor');

area.addEventListener('mousemove', (e) => {
  const dot = document.createElement('div');
  dot.classList.add('dot');
  dot.style.left = `${e.clientX}px`;
  dot.style.top = `${e.clientY}px`;

  area.appendChild(dot);

  setTimeout(() => {
    dot.remove();
  }, 1000);
});

const links = document.querySelectorAll('.nav__link');

links.forEach(link => {
  link.addEventListener('mouseenter', () => {
    button.style.boxShadow = '0px 4px 15px rgba(33, 137, 130, 0.5)';
  });

  link.addEventListener('mouseleave', () => {
    button.style.boxShadow = 'none';
  });
});