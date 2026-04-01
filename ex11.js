function variav() {
    let nome = prompt("Nome do funcionário:");
    let salarioBruto = parseFloat(prompt("Salário bruto:"));

    let taxa=0;
    if (salarioBruto <= 1000) {
         taxa = 0.08;
    } else if (salarioBruto <= 1500) {
         taxa = 0.085;
    } else {
         taxa = 0.09;
    }

    let desconto = salarioBruto * taxa;
    let salarioLiquido = salarioBruto - desconto;

    console.log("Nome: " + nome);
    console.log("Salário bruto: R$ " + salarioBruto.toFixed(2));
    console.log("Taxa de desconto: " + (taxa * 100) + "%");
    console.log("Desconto INSS: R$ " + desconto.toFixed(2));
    console.log("Salário líquido: R$ " + salarioLiquido.toFixed(2));
}