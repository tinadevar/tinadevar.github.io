window.addEventListener('DOMContentLoaded', () => {
    // Inject navbar
    fetch('navbar.html')
      .then(res => res.text())
      .then(html => {
        document.body.insertAdjacentHTML('afterbegin', html);
      });
  
    // Inject footer
    fetch('footer.html')
      .then(res => res.text())
      .then(html => {
        document.body.insertAdjacentHTML('beforeend', html);
      });
  });
  