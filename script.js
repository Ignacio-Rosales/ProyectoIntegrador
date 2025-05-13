  const toggleButton = document.getElementById('menu-toggle');
  const navMenu = document.querySelector('nav ul');
  const dropdown = document.querySelector('.dropdown');

  toggleButton.addEventListener('click', () => {
    navMenu.classList.toggle('active');
  });

  if (window.innerWidth <= 600) {
    dropdown.addEventListener('click', () => {
      dropdown.classList.toggle('active');
    });
  }
