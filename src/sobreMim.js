const listaPalavras = document.getElementById('listaPalavras');
const palavras = listaPalavras.querySelectorAll('.palavra');
let currentIndex = 0;
let isScrollingDown = true;

function scrollToNextWord() {
  if (isScrollingDown) {
    currentIndex++;
    if (currentIndex >= palavras.length) {
      // Chegou ao final, começa a subir
      isScrollingDown = false;
      currentIndex = palavras.length - 2;
    }
  } else {
    currentIndex--;
    if (currentIndex < 0) {
      isScrollingDown = true;
      currentIndex = 1;
    }
  }

  palavras[currentIndex].scrollIntoView({
    behavior: 'smooth',
    block: 'center',
  });
}

setInterval(scrollToNextWord, 1000);
