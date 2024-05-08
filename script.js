// function calcularIdade(dataNascimento) {
//     // 1. Obter data de nascimento do usuário
//     const anoNascimento = parseInt(dataNascimento.ano);
//     const mesNascimento = parseInt(dataNascimento.mes) - 1; // Ajustar o mês para 0 (baseado em zero)
//     const diaNascimento = parseInt(dataNascimento.dia);
  
//     // 2. Obter data atual
//     const dataAtual = new Date();
//     const anoAtual = dataAtual.getFullYear();
//     const mesAtual = dataAtual.getMonth();
//     const diaAtual = dataAtual.getDate();
  
//     // 3. Calcular diferença de tempo em milisegundos
//     const diferencaMilisegundos = Date.UTC(anoAtual, mesAtual, diaAtual) -
//                                Date.UTC(anoNascimento, mesNascimento, diaNascimento);
  
//     // 4. Converter diferença de tempo em anos
//     const diferencaSegundos = diferencaMilisegundos / 1000;
//     const diferencaMinutos = diferencaSegundos / 60;
//     const diferencaHoras = diferencaMinutos / 60;
//     const diferencaDias = diferencaHoras / 24;
//     let anos = Math.floor(diferencaDias / 365);
  
//     // 5. Ajustar para anos bissextos (a cada 4 anos, exceto em anos múltiplos de 100 que não são múltiplos de 400)
//     if ((anoNascimento % 4 === 0) && (anoNascimento % 100 !== 0) || (anoNascimento % 400 === 0)) {
//       if (mesNascimento === 1 && diaNascimento > 28) {
//         anos++;
//       } else if (mesNascimento === 2 && diaNascimento > 29) {
//         anos++;
//       }
//     }
  
//     // Apresentar o resultado
//     return anos;
//   }

//------------------------------------------------------------------------------------------------------

// Função para validar e formatar a data de nascimento
function formatarData(data) {
  const partes = data.split('/');
  if (partes.length !== 3) {
    return null;
  }
  const dia = parseInt(partes[0], 10);
  const mes = parseInt(partes[1], 10) - 1; // Mês começa em 0
  const ano = parseInt(partes[2], 10);
  if (isNaN(dia) || isNaN(mes) || isNaN(ano) || dia < 1 || dia > 31 || mes < 0 || mes > 11) {
    return null;
  }
  return new Date(ano, mes, dia);
}

// Função para calcular a idade a partir da data de nascimento
function calcularIdade(dataNascimento) {
  // Obter data atual
  const dataAtual = new Date();
  const anoAtual = dataAtual.getFullYear();
  const mesAtual = dataAtual.getMonth();
  const diaAtual = dataAtual.getDate();

  // Obter idade em dias
  const diferencaMilisegundos = Date.UTC(anoAtual, mesAtual, diaAtual) - Date.UTC(dataNascimento.ano, dataNascimento.mes - 1, dataNascimento.dia);
  const diferencaDias = Math.floor(diferencaMilisegundos / (1000 * 60 * 60 * 24));

  // Calcular idade em anos
  let anos = Math.floor(diferencaDias / 365);

  // Ajustar para anos bissextos
  if ((dataNascimento.ano % 4 === 0) && (dataNascimento.ano % 100 !== 0) || (dataNascimento.ano % 400 === 0)) {
    if (dataNascimento.mes === 1 && dataNascimento.dia > 28) {
      anos++;
    } else if (dataNascimento.mes === 2 && dataNascimento.dia > 29) {
      anos++;
    }
  }

  // Retornar idade
  return anos;
}

// Obter referência para os elementos HTML
const form = document.getElementById('form');
const dataNascimentoInput = document.getElementById('data-nascimento');
const idadeOutput = document.getElementById('idade');

// Adicionar evento de envio de formulário
form.addEventListener('submit', function(event) {
  event.preventDefault();

  // Obter data de nascimento do usuário
  const dataNascimento = {
    ano: parseInt(dataNascimentoInput.value.substring(0, 4)),
    mes: parseInt(dataNascimentoInput.value.substring(5, 7)),
    dia: parseInt(dataNascimentoInput.value.substring(8, 10))
  };

  // Calcular idade
  const idade = calcularIdade(dataNascimento);

  // Exibir idade
  idadeOutput.textContent = idade;
});