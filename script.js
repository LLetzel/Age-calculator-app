// Seleciona os elementos do formulário
const form = document.querySelector('form');
const diaInput = document.querySelector('#day');
const mesInput = document.querySelector('#month');
const anoInput = document.querySelector('#year');
const resultadoDiv1 = document.querySelector('#result1');
const resultadoDiv2 = document.querySelector('#result2');
const resultadoDiv3 = document.querySelector('#result3');

// Adiciona um evento de submit ao formulário
form.addEventListener('submit', (evento) => {
  // Previne o comportamento padrão do formulário
  evento.preventDefault();

  // Obtém os valores dos inputs
  const diaNascimento = parseInt(diaInput.value);
  const mesNascimento = parseInt(mesInput.value);
  const anoNascimento = parseInt(anoInput.value);

  // Verifica se os valores são válidos
  if (diaNascimento > 0 && diaNascimento <= 31 && mesNascimento > 0 && mesNascimento <= 12 && anoNascimento >= 1900 && anoNascimento <= 2024) {
    // Cria uma data com a data de nascimento
    const dataNascimento = new Date(anoNascimento, mesNascimento - 1, diaNascimento);

    // Obtém a data atual
    const dataAtual = new Date();

    // Calcula a diferença em milissegundos entre as duas datas
    const diferencaEmMilissegundos = dataAtual - dataNascimento;

    // Calcula a idade em anos, meses e dias
    const idadeEmAnos = Math.floor(diferencaEmMilissegundos / (1000 * 60 * 60 * 24 * 365));
    const idadeEmMeses = Math.floor((diferencaEmMilissegundos % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30));
    const idadeEmDias = Math.floor(((diferencaEmMilissegundos % (1000 * 60 * 60 * 24 * 365)) % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24));

    // Exibe o resultado na div de resultado
    resultadoDiv1.innerHTML = `<span style="color: #864ff7; font-style: normal;">${idadeEmAnos}</span> anos`;
    resultadoDiv2.innerHTML = `<span style="color: #864ff7; font-style: normal;">${idadeEmMeses}</span> meses`;
    resultadoDiv3.innerHTML = `<span style="color: #864ff7; font-style: normal;">${idadeEmDias}</span> dias`;




    
  } else {
    // Exibe uma mensagem de erro se os valores não forem válidos
    alert('Por favor, insira uma data válida.');
  }
});