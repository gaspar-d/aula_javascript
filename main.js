/*
var nome = "Diogo Gaspar";
var idade = 39;
var frase = " Japão é o melhor time do mundo!";

console.log(nome + " tem " + idade + " anos.");
console.log(idade + idade);
console.log(frase);
console.log(frase.replace("Japão", "Irã"));
console.log(frase.toUpperCase());


var lista = ["maça", "pêra", "laranja"];
lista.push("uva");
//lista.pop();

console.log(lista);
console.log(lista[0]);
console.log(lista.length)
console.log(lista.reverse())
console.log(lista.toString())
console.log(lista.join(" | "))


var frutas = [{nome: "maça", cor: "vermelha"}, {nome: 'uva', cor: 'roxa'}]

console.log(frutas)
console.log(frutas[1].nome)
console.log(frutas[1].cor, frutas[0].cor)


var idade = 12;
//var idade = prompt("Qual sua idade?");

if (idade >= 18) {
    console.log("maior de idade");
} else {
    console.log("menor de idade");
}

var count = 1;
while (count < 5) {
    console.log(count);
    count++;
}

console.log('separador :)')

var contador;
for (contador = 0; contador <= 3; contador++) {
    console.log(contador);
}



var d = new Date();
console.log(d.getDay());


function soma(n1, n2) {
    return n1 + n2;
}

console.log(soma(2, 5));

function setReplace(frase, nome, novo_nome) {
    return frase.replace(nome, novo_nome);
}

console.log(setReplace("Vai Japão", "Japão", "Irã"));



function validarIdade(idade) {
    var idade;
    if (idade >= 18) {
        validar = true;
    } else {
        validar = false;
    }
    return validar;
}

var idade = prompt("Qual sua idade? ");
console.log(validarIdade(idade));

*/

function botao() {
    document.querySelector("#thanks").innerHTML = "Obrigado por clicar :)";

    console.log(document.querySelector("#thanks"));
    //alert("Obrigado por clicar")
}

function redirecionar() {
    window.open('https://www.google.com') // abre em outra página
    window.location.href = "https://www.google.com"; // abre na mesma página
}
