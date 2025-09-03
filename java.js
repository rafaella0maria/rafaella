function verificarResposta(resposta) {
    const feedback = document.getElementById("feedback");
    if (resposta === 'c') {
      feedback.textContent = "✅ Isso aí! Ary Barroso é o compositor.";
      feedback.style.color = "green";
    } else {
      feedback.textContent = "❌ Ops! Tente novamente.";
      feedback.style.color = "red";
    }