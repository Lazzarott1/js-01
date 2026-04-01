function tabela() {

    let codigos = ["a", "b", "c", "d", "e", "f", "g", "h", "i"];
    let sabores = ["Chocolate", "Morango", "Creme", "Manga", "Melancia", "Vanilla Ice", "Céu Azul", "Brownie", "Hawaiano"];
    let precos = ["1,50", "2,50", "2,50", "3,20", "3,40", "3,00", "3,60", "4,00", "5,00"];

    let codigo = prompt("Digite o código do sabor (a-i):");

    let indice = codigos.indexOf(codigo);

    if (indice != -1) {
        alert(sabores[indice] + " - R$ " + precos[indice]);
    } else {
        alert("Código inválido!");
    }
} 