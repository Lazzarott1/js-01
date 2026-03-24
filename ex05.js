function parimpar() {
    let numero = (Number(prompt("Digite um número inteiro: ")))
    if (numero % 2 === 0) {
        console.log("O número era par, impar é ", numero + 1)
    } else {
        console.log("O número era ímpar, par é ", numero + 1)
    }
}