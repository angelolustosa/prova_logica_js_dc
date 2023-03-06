import imc from './images/print_imc.png'

//https://chat.openai.com/chat/e0468f42-ec0e-437b-8e78-b9bd25bdaffe

export default [
    {
        pergunta: "Qual é a sintaxe correta para criar um array vazio em JavaScript?",
        alternativas: [' let arr = [];', 'var arr = {};', 'let arr = ();', 'var arr = [];'],
        resposta: 'a) let arr = [];',
        show: true
    },
    {
        pergunta: "Qual é a função utilizada para adicionar um elemento ao final de um array em JavaScript?",
        alternativas: ['push();', 'shift();', 'unshift();', 'pop();'],
        resposta: 'a) push()'
    },
    {
        pergunta: "Qual é a sintaxe correta para acessar o segundo elemento de um array em JavaScript?",
        alternativas: ['arr[1]', 'arr(2)', 'arr{2}', 'arr.2'],
        resposta: 'a) arr[1]',
        show: true
    },
    {
        pergunta: "Qual é a estrutura condicional utilizada para testar múltiplas condições em JavaScript?",
        alternativas: [' if/else', ' switch/case', 'while/do-while', 'for/in'],
        resposta: 'b) switch/case'
    },
    {
        pergunta: "Qual é a sintaxe correta para um loop for em JavaScript?",
        alternativas: ['for (i = 0; i < 5; i++)', ' for i = 0 to 5', 'for (i < 5; i++)', 'for (i = 0; i > 5; i--)'],
        resposta: 'a) for (i = 0; i < 5; i++)'
    }, {
        pergunta: "Qual é a função utilizada para encontrar a posição de um elemento em um array em JavaScript?",
        alternativas: ['splice()', 'slice()', 'indexOf()', 'findIndex()'],
        resposta: 'c) indexOf()'
    }, {
        pergunta: "Qual é a sintaxe correta para uma função em JavaScript?",
        alternativas: [' function myFunction() {}', 'myFunction() {}', ' function = myFunction() {}', ' [] => {}'],
        resposta: 'a) function myFunction() {}',
        show: true
    }, {
        pergunta: "Qual é a função utilizada para retornar o número de elementos em um array em JavaScript?",
        alternativas: ['length()', 'size()', 'count()', 'quantity()'],
        resposta: 'a) length()',
        show: true
    }, {
        pergunta: "Qual é a sintaxe correta para chamar uma função em JavaScript?",
        alternativas: ['myFunction();', 'call myFunction;', 'run myFunction;', 'execute myFunction();'],
        resposta: 'a) myFunction();',
        show: true
    }, {
        pergunta: "Qual é a função utilizada para converter um número em uma string em JavaScript?",
        alternativas: ['toString()', 'toNumber()', 'convert()', 'stringify()'],
        resposta: 'a) toString()',
        show: true
    }, {
        pergunta: "Qual é a sintaxe correta para uma estrutura condicional if em JavaScript?",
        alternativas: ['if (condition) {}', 'if {condition} ()', 'if (condition) ()', ' if {condition} {}'],
        resposta: 'a) if (condition) {}'
    }, {
        pergunta: "Qual é a sintaxe correta para criar uma função em JavaScript que recebe um parâmetro?",
        alternativas: [' function myFunction(param) {}', 'function(param) {}', 'myFunction(param) {}', '  const myFunction = param => {}'],
        resposta: 'a) function myFunction(param) {}',
        show: true
    }, {
        pergunta: "Qual é a sintaxe correta para chamar uma função em JavaScript que recebe dois argumentos?",
        alternativas: ['myFunction(arg1, arg2)', 'myFunction(arg1 arg2)', 'myFunction(arg1: arg2)', 'myFunction(arg2, arg1)'],
        resposta: 'a) myFunction(arg1, arg2)'
    }, {
        pergunta: "Qual é o resultado da seguinte operação em JavaScript:",
        code: {
            snippet: `let arr = [1, 2, 3];
arr.push(4);
arr.pop();
arr.unshift(0);
console.log(arr);`
        },
        alternativas: ['[0, 1, 2, 3, 4]', '[0, 1, 2, 3]', '[1, 2, 3, 4]', '[1, 2, 3]'],
        resposta: 'b) [0, 1, 2, 3]',
        show: true
    }, {
        pergunta: "Qual é o resultado da seguinte operação em JavaScript:",
        code: {
            snippet: `function isEven(num) {
return num % 2 === 0;
}

let arr = [1, 2, 3, 4, 5];
let evenArr = arr.filter(isEven);
console.log(evenArr);`
        },
        alternativas: ['[1, 3, 5]', '[2, 4]', '[1, 2, 3, 4, 5]', '[]'],
        resposta: ' b) [2, 4]'
    }, {
        pergunta: "Qual é o resultado da seguinte operação em JavaScript:",
        code: {
            snippet: `function multiplyByTwo(num) {
    return num * 2;
}

let arr = [1, 2, 3, 4, 5];
let resultArr = arr.map(multiplyByTwo);
console.log(resultArr);`
        },
        alternativas: ['[1, 4, 9, 16, 25]', '[2, 4, 6, 8, 10]', ' [2, 3, 6, 7, 10]', ' [1, 2, 3, 4, 5, 6]'],
        resposta: 'b) [2, 4, 6, 8, 10]',
        show: true
    }, {
        pergunta: "Qual é o resultado da seguinte operação em JavaScript:",
        code: {
            snippet: `let arr = [1, 2, 3, 4, 5];
let sum = 0;
for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
}
console.log(sum);`,
        },
        alternativas: ['15', '10', ' 25', '20'],
        resposta: 'a) 15',
        show: true
    }, {
        pergunta: "Qual é o resultado da seguinte operação em JavaScript:",
        code: {
            snippet: `let arr = [1, 2, 3, 4, 5];
let evenCount = 0;
for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
        evenCount++;
    }
}
console.log(evenCount);`,
        },
        alternativas: ['5', '2', ' 3', '4'],
        resposta: 'b) 2'
    }, {
        pergunta: "Qual é o resultado da seguinte operação em JavaScript:",
        code: {
            snippet: `function greet(name) {
    console.log(\`Hello, \${name}!\`);
}

function greetAll(names) {
    for (let i = 0; i < names.length; i++) {
        greet(names[i]);
    }
}

let namesArr = ["Alice", "Bob", "Charlie"];
greetAll(namesArr);`,
        },
        alternativas: ['Hello, Alice! Hello, Bob! Hello, Charlie!', 'Hello, Alice! Hello, Bob!', ' Hello, Alice!', 'Hello, Charlie!'],
        resposta: 'a) Hello, Alice! Hello, Bob! Hello, Charlie!',
        show: true
    }, {
        pergunta: "Escreva um programa em JavaScript que encontra a média dos elementos de um array de 5 números.",
        resposta: {
            snippet: `let arr = [1, 2, 3, 4, 5];
let sum = 0;
for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
}
let avg = sum / arr.length;
console.log(avg);`,
            code: true
        },
        show: true
    }, {
        pergunta: "Crie uma função que receba o nome completo de uma pessoa e retorne com o nome e sobrenome e a data atual no formato (ddmmyyyy) separado por \'_\'(underline) Dado o nome \'Raimundo José dos Santos Nascimento\', o nome do arquivo deve ser: raimundo_jose_06032023 ",
        resposta: {
            snippet: `function nameFile(name){
let primeiroNome = name.split(' ')[0].toLowerCase();
let segundoNome = name.split(' ')[1].toLowerCase();

let date = new Date().toLocaleDateString().replaceAll('/', "")
console.log(date)

let fileName = \`\${removerAcentos(primeiroNome)}_\${removerAcentos(segundoNome)}_\${date}\`

console.log(fileName)
return fileName
}

function removerAcentos(text) {
return text.normalize('NFD').replace(/[\u0300-\u036f]/g, "");
}

nameFile('Raimundo José dos Santos Nascimento') // raimundo_jose_06032023`,
            code: true
        },
        show: true
    }, {
        pergunta: "Crie um programa que calcule a massa corporal (IMC) e informe em que faixa de obesidade a pessoa se encontra com html, css e js sem usar prompt e exibndo os textos segundo as condições abaixo:",
        alternativas: [
            'IMC menor que 18,5 = abaixo do peso',
            'IMC entre 18,5 e 24,9 = peso está normal',
            'IMC entre 25 e  29,9 = sobrepeso',
            'IMC entre 30 e  34,9 = obesidade grau I',
            'IMC entre 35 e  39,9 = obesidade grau II',
            'IMC maior que 39,9 exibir = obesidade grau III'
        ],
        image: imc,
        resposta: {
            link: 'https://github.com/angelolustosa/prova_logica_js_dc/tree/main/src/html/imc'
        },
        show: true
        /* resposta: {
            snippet: `function nameFile(name){
let primeiroNome = name.split(' ')[0].toLowerCase();
let segundoNome = name.split(' ')[1].toLowerCase();

let date = new Date().toLocaleDateString().replaceAll('/', "")
console.log(date)

let fileName = \`\${removerAcentos(primeiroNome)}_\${removerAcentos(segundoNome)}_\${date}\`

console.log(fileName)
return fileName
}

function removerAcentos(text) {
return text.normalize('NFD').replace(/[\u0300-\u036f]/g, "");
}

nameFile('Raimundo José dos Santos Nascimento') // raimundo_jose_06032023`,
            code: true
        } */
    }
]