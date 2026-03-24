function vogal(){
    const vogais = ['a','e','i','o','u'];
    let letraUser = prompt("Digite uma letra do alfabeto:");
    if (vogais.includes(letraUser)) {
        console.log("A letra é uma vogal");
    }else{
        console.log("A letra é uma consoante");
    }
}