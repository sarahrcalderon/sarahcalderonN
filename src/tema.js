const temaBtn = document.getElementById('theme-toggle');
const temaIcone = document.getElementById('theme-icon');
const currentTheme = localStorage.getItem('theme');

if (currentTheme === 'dark') {
  document.body.classList.add('dark-theme');
  temaIcone.classList.remove('bi-sun');
  temaIcone.classList.add('bi-moon');
} else {
  document.body.classList.add('light-theme');
  temaIcone.classList.remove('bi-moon');
  temaIcone.classList.add('bi-sun');
}
temaBtn.addEventListener('click', () => {
  if (document.body.classList.contains('light-theme')) {
    document.body.classList.remove('light-theme');
    document.body.classList.add('dark-theme');
    temaIcone.classList.remove('bi-sun');
    temaIcone.classList.add('bi-moon');
    localStorage.setItem('theme', 'dark'); 
  } else {
    document.body.classList.remove('dark-theme');
    document.body.classList.add('light-theme');
    temaIcone.classList.remove('bi-moon');
    temaIcone.classList.add('bi-sun');
    localStorage.setItem('theme', 'light'); 
  }
});
