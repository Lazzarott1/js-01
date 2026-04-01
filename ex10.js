function pagamento() {
    let nome = prompt("Nome do funcionário:");
    let salarioBruto = parseFloat(prompt("Salário bruto:"));

    let desconto = salarioBruto * 0.08;
    let salarioLiquido = salarioBruto - desconto;

    console.log("Nome: " + nome);
    console.log("Salário bruto: R$ " + salarioBruto.toFixed(2));
    console.log("Desconto INSS (8%): R$ " + desconto.toFixed(2));
    console.log("Salário líquido: R$ " + salarioLiquido.toFixed(2));
}