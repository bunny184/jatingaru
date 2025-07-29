function navigateTo(page) {
  document.body.style.opacity = '0';
  setTimeout(() => window.location.href = page, 500);
}

document.addEventListener('DOMContentLoaded', () => {
  document.body.style.opacity = '0';
  setTimeout(() => {
    document.body.style.transition = 'opacity .5s ease-in';
    document.body.style.opacity = '1';
  }, 100);
});
