document.addEventListener("DOMContentLoaded", () => {
  const text = "Design é resolver problemas com elegância e propósito";
  const typingText = document.getElementById("typing-text");
  typingText.style.color = "#ff0099";
  let index = 0;
  
  function typeEffect() {
    if (index < text.length) {
      typingText.textContent += text[index];
      index++;
      setTimeout(typeEffect, 85); // Velocidade da digitação
    } else {
      addPontos(); 
    }
  }

  typeEffect();
});

