function ordem(){

let numeros = [];

for (let i =0;i<4; i++){
numeros . push(Number(prompt("Digite um número:")));

}

numeros. sort((a,b) => b-a);
console. log( "Ordem decrescente:" + numeros);

}