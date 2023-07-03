/*
Crie um script que exiba a mensagem "Hello World!" em um alerta no navegador.
*/

console.log("1. Hello World!");

/*
Crie um script que declare duas variáveis e exiba o resultado da soma entre elas.
*/

let a = 10;
let b = 20;

console.log(`2. A soma de a e b é ${a + b}`);

/* Crie um script que declare uma variável e verifique se o seu valor é um número. Se for, exiba a mensagem "É um número", caso contrário, exiba a mensagem "Não é um número". */

let idade = 28;

typeof idade == 'number' ? console.log("3. É um número") : console.log("3. Não é um número");

/*Crie um script que declare uma variável e verifique se o seu valor é uma string. Se for, exiba a mensagem "É uma string", caso contrário, exiba a mensagem "Não é uma string".*/

let nome = "Aldana";

typeof nome == 'string' ? console.log("4. É uma string") : console.log("4. Não é uma string");

/* Crie um script que declare uma variável e verifique se o seu valor é um booleano. Se for, exiba a mensagem "É um booleano", caso contrário, exiba a mensagem "Não é um booleano". */

let isTrue = true;

typeof isTrue == 'boolean' ? console.log("5. É um booleano") : console.log("5. Não é um booleano");

/* Crie um script que declare duas variáveis e exiba o resultado da subtração entre elas. */

let num1 = 25;
let num2 = 20;

console.log(`6. A subtração de num1 e num2 é ${num1 - num2}`);

/* Crie um script que declare duas variáveis e exiba o resultado da multiplicação entre elas. */

let salarioMensal = 1500;
let meses = 12;

console.log(`7. Salario anual: ${salarioMensal * meses}`);

/* Crie um script que declare duas variáveis e exiba o resultado da divisão entre elas. */
let valorCompra = 3999;
let qntParcelas = 10;

console.log(`8. Valor da parcelas: ${valorCompra / qntParcelas}`);

/* Crie um script que declare uma variável e verifique se o seu valor é um número par. Se for, exiba a mensagem "É um número par", caso contrário, exiba a mensagem "Não é um número par". */

let peso = 101;

(peso % 2 == 0) ? console.log("9. É um número par") : console.log("9. Não é um número par");;

/* Crie um script que declare uma variável e verifique se o seu valor é um número ímpar. Se for, exiba a mensagem "É um número ímpar", caso contrário, exiba a mensagem "Não é um número ímpar". */

let diasDeFerias = 14;

(peso % 2 == 1) ? console.log("10. É um número ímpar") : console.log("10. Não é um número ímpar");;

