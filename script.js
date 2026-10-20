//ocnsole.log() mostra uma informação mo console
console.log("Olá, Mundo!");
console.log("2" + "2");

console.log(typeof "Olá, Mundo!");//string
console.log(typeof 22);//number
console.log(typeof 10.5);//number
console.log(typeof true);//boolean
console.log(typeof false);//boolean

//Vátiavel
//const não pode ter seu valor alterado durante o programa
const nome = "Brenno";
console.log(nome);

//let pode ter seu valor alterado durante o programa
let idade = 17;
console.log(idade);

console.log("Olá " + nome + ", que tem " + idade + " anos.");

idade = 18;
console.log(idade);


console.log(`Olá ${nome}, que tem ${idade} anos.`);


//Lição

const nome2 = "Vinicius";
console.log(nome2);

let peso = 69;
console.log(peso);

console.log("Olá " + nome2 + ", que pesa " + peso + "kg.");

peso = 90;
console.log(peso);

console.log(`Olá ${nome2}, que pesa ${peso}kg.`);


//Métodos de string
const texto = "JavaScript";

//conta quantos caracteres a string tem
console.log(texto.length);

//Altera todas as letras para maíusculas
console.log(texto.toUpperCase());

//Altera todas as letras para mínusculas
console.log(texto.toLowerCase());

const nome_completo = "Brenno Oliveira Alves";

console.log(nome_completo.includes("Alves"));//true

console.log(nome_completo.includes("Pereira"))//false

console.log(10 > 5);//true
console.log(10 < 5);//false
console.log(10 >= 10);//true
console.log(10 <= 5);//false
console.log("10" == 10);//true porque compara apenas os numeros
console.log("10" === 10);//false porque compara a fonte "texto" e "numero"
console.log(10 !== 5)//true porque o sinal de "!" represneta diferente

const idadePessoas = 17

console.log(idadePessoas >= 18);//false porque é maior que 17
console.log(idadePessoas >= 16);//true porque é menor que 17

//lição 2

console.log(nome_completo == "Alan Pereira da Silva");//false



//coletamos a idade da pessoa
let PessoaIdade = 19;
//verificar se a idade é maior que 18
if(PessoaIdade >= 18){
    //se maior que 18 então ela é maior de idade 
    console.log("Já pode sre Preso HAHAHAHAHAH!")
}else{
    //senão, então ela é menor de idade
    console.log("Não vai pra balada!😂😂😂")
};

//coletamos a idade da pessoa
let idadeVotacao = 14;
//verificar se a idade da pessoa é maior que 70
if(idadeVotacao > 70){
    console.log("Você não é obrigado a votar!")
}else if(idadeVotacao >= 18){
    //senão se a idade da pessoa for maior ou igual a 18
    console.log("Você tem que votar obrigatoriamente!")
}else if(idadeVotacao >= 16){
    //senão se a idade da pessoa for igaal ou maior a 16
    console.log("Você não é obrigado a votar, mas caso queira pode")
}else{
    //senão for nenhuma das alternativas anteriores
    console.log("Você NÃO pode votar!")
};

//atividade 1 

let ponto = 2;

if(ponto >=7){
    console.log("Aprovado")
}else{
    console.log("Reprovado")
};

//Atividade 2

let numero1 = 7;
let numero2 = 7;

if(numero1 > numero2){
    console.log("numero1 maior que numero2")
}else if(numero1 < numero2){
    console.log("numero1 menor que numero2")
}else{
    console.log("Empate")
};

//Atividade 3

const senha = "senai123";

if(senha == "senai123"){
    console.log("Acesso Autorizado")
}else{
    console.log("Senha Incorreta")
};

//atividade 4

let graus = 27;

if(graus <= 18){
    console.log("Frio")
}else if(graus >= 27){
    console.log("Quente")
}else{
console.log("Agardavel")
};

//atividade 5

let nota = 10;

if(nota >= 9){
    console.log("Exelente")
}else if(nota >= 7){
    console.log("Bom")
}else if(nota = 5){
    console.log("Regular")
}else{
    console.log("Insuficiente")
};

//atividade 6

let dia = 5;

if(dia == 1){
    console.log("Domimgo")
}
if(dia == 2){
    console.log("Segunda")
}
if(dia == 3){
    console.log("Terça")
}
if(dia == 4){
    console.log("Quarta")
}
if(dia == 5){
    console.log("Quinta")
}
if(dia == 6){
    console.log("Sexta")
}
if(dia == 7){
    console.log("Sabado")
};


//Aula

let iaddeDirigir = 19;
let temCNH = true;
let temCarro = false;

if(iaddeDirigir >= 18 && temCNH == true && temCarro == true){      //E = &&
    console.log("Você pode dirigir!")
}else{
    console.log("Você não pode dirigir!")
};

let ehProfessor = false;
let ehAluno = true;

if(ehProfessor = true || ehAluno || true){      // || = ou
    console.log("Você tem direito a meia entrada")
}else{
    console.log("você nao tem direito a meia entrada")
};


//atividade 2.1

let number = 25;

if(number > 10 && number < 50){
    console.log("Incluso")
}else{
    console.log("Fora do intervalo")
};


//atividade 2.2

let idadeCandidato = 29;

if(idadeCandidato >= 16 && idadeCandidato <= 24){
    console.log("Pode se candidatar")
}else{
    console.log("Não pode se candidatar")
};

//atividade 2.3

let frete = 1000;
let asinante = false;

if(frete >= 200 || asinante == true){
    console.log("Você tem frete gratis")
}else{
    console.log("Compre mais para ter frete gratis")
};

//atividade 2.4

let diaSemana = "sexta";

if(diaSemana == "domingo" || diaSemana == "sabado"){
    console.log("Final de semana")
}else{
    console.log("Dia util")
};

//atividade 2.5

let ass = false;
let cupon = true;
let valorCompra = 150;
let desconto = 100 / 15;
let total = valorCompra - valorCompra / desconto;

if(ass == true && valorCompra >= 150 || cupon == true){
    console.log("Você tem direito a 15% de desconto")
    console.log("Sua compra ficou no valor de " + total)
}else{
    console.log("Você não tem direito a desconto")
};