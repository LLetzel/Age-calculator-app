// Seleciona os elementos do formulário
const form = document.querySelector('form');
const diaInput = document.querySelector('#day');
const mesInput = document.querySelector('#month');
const anoInput = document.querySelector('#year');
const resultadoDiv = document.querySelector('#result');

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
    resultadoDiv.textContent = `${idadeEmAnos} anos ${idadeEmMeses} meses e ${idadeEmDias} dias`;
  } else {
    // Exibe uma mensagem de erro se os valores não forem válidos
    alert('Por favor, insira uma data válida.');
  }
});

// Seleciona o elemento form do documento HTML
// const form = document.querySelector('form');

// // Seleciona o elemento div do resultado do HTML
// const resultDiv = document.querySelector('#result');

// // Adiciona um ouvinte de eventos ao evento de submissão do formulário
// form.addEventListener('submit', (e) => {
//   // Impede o comportamento de submissão de formulário padrão
//   e.preventDefault();

//   // Obtém os valores dos campos de entrada de dia, mês e ano
//   const day = parseInt(document.querySelector('#day').value);
//   const month = parseInt(document.querySelector('#month').value);
//   const year = parseInt(document.querySelector('#year').value);

//   // Cria um novo objeto Date para a data atual
//   const today = new Date();

//   // Cria um novo objeto Date para a data de nascimento
//   const birthDate = new Date(year, month - 1, day);

//   // Chama a função calculateAge com as datas de nascimento e atual
//   const age = calculateAge(birthDate, today);

//   // Exibe o resultado no elemento div do resultado
//   resultDiv.textContent = `Sua idade é: ${age.years} anos, ${age.months} meses e ${age.days} dias`;
// });

// // Função para calcular a idade com base nas datas de nascimento e atual
// function calculateAge(birthDate, today) {
//   let years = today.getFullYear() - birthDate.getFullYear();
//   let months = today.getMonth() - birthDate.getMonth();
//   let days = today.getDate() - birthDate.getDate();

//   // Se o mês de nascimento for maior que o mês atual, subtrai 1 do ano
//   if (months < 0) {
//     years--;
//     months += 12;
//   }

//   // Se o dia de nascimento for maior que o dia atual, subtrai 1 do mês
//   if (days < 0) {
//     months--;
//     days += getDaysInMonth(birthDate.getMonth() + 1, birthDate.getFullYear());
//   }

//   // Retorna a idade como um objeto com as propriedades anos, meses e dias
//   return { years, months, days };
// }

// // Função para obter o número de dias no mês especificado
// function getDaysInMonth(month, year) {
//   return new Date(year, month, 0).getDate();
// }