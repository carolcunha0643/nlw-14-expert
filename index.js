const perguntas = [
    {
      pergunta: "O que é JavaScript?",
      respostas: [
        "Uma linguagem de programação para estilizar páginas web",
        "Uma linguagem de programação para criar layouts responsivos",
        "Uma linguagem de programação para desenvolver interatividade em páginas web",
      ],
      correta: 2
    },
    {
      pergunta: "Qual é a sintaxe correta para declarar uma variável em JavaScript?",
      respostas: [
        "var myVar = valor;",
        "variable myVar = valor;",
        "let myVar = valor;",
      ],
      correta: 2
    },
    {
      pergunta: "Qual é a função do operador '===' em JavaScript?",
      respostas: [
        "Comparação de valor e tipo",
        "Atribuição de valor",
        "Comparação de valor apenas",
      ],
      correta: 0
    },
    {
      pergunta: "O que é uma função em JavaScript?",
      respostas: [
        "Um tipo de variável",
        "Um bloco de código reutilizável que pode ser executado quando chamado",
        "Uma declaração de condição",
      ],
      correta: 1
    },
    {
      pergunta: "Qual é a função do método 'addEventListener'?",
      respostas: [
        "Adicionar um evento ao documento HTML",
        "Adicionar um ouvinte de eventos a um elemento HTML",
        "Adicionar um estilo a um elemento HTML",
      ],
      correta: 1
    },
    {
      pergunta: "O que é uma array em JavaScript?",
      respostas: [
        "Uma estrutura de controle de fluxo",
        "Um tipo de dado que armazena uma coleção de elementos",
        "Uma função que retorna um valor booleano",
      ],
      correta: 1
    },
    {
      pergunta: "Qual é a finalidade do método 'querySelector'?",
      respostas: [
        "Selecionar vários elementos HTML",
        "Selecionar o primeiro elemento HTML que corresponde a um seletor especificado",
        "Selecionar o último elemento HTML que corresponde a um seletor especificado",
      ],
      correta: 1
    },
    {
      pergunta: "O que é o DOM em JavaScript?",
      respostas: [
        "Uma função matemática",
        "Uma biblioteca de terceiros",
        "Uma representação em memória de como os documentos HTML são estruturados",
      ],
      correta: 2
    },
    {
      pergunta: "Qual é a função do método 'getElementById'?",
      respostas: [
        "Obter o primeiro elemento HTML com um determinado nome de classe",
        "Obter o elemento HTML com um determinado ID",
        "Obter o último elemento HTML com um determinado nome de tag",
      ],
      correta: 1
    },
    {
      pergunta: "O que é um loop 'for' em JavaScript?",
      respostas: [
        "Um método para parar a execução do script",
        "Uma declaração de condição",
        "Uma estrutura de controle que permite executar uma ação repetidamente",
      ],
      correta: 2
    },
  ];
  
  const quiz = document.querySelector('#quiz')
  const template = document.querySelector('template')
  
  const corretas = new Set()
  const totalDePerguntas = perguntas.length
  const mostrarTotal = document.querySelector('#acertos span')
  mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
  
  for(const item of perguntas) {
  const quizItem = template.content.cloneNode(true)
  quizItem.querySelector('h3').textContent = item.pergunta
  
  for(let resposta of item.respostas) {
  const dt = quizItem.querySelector('dl dt').cloneNode(true)
  dt.querySelector('span').textContent = resposta
  dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
  dt.querySelector('input').value = item.respostas.indexOf(resposta)
  dt.querySelector('input').onChange = (event) => {
    const estaCorreta = event.target.value ==  item.correta
  
    corretas.delete(item)
    if(estaCorreta) {
      corretas.add(item)
    }
   
  mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
  }
  
  quizItem.querySelector('dl').appendChild(dt)
  }
  
  quizItem.querySelector('dl dt').remove()
  
  
  quiz.appendChild(quizItem)
  }
  
  