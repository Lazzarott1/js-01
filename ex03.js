function anual() {
    let ganhoAnual = 0;
    let gastoAnual = 0;
    let saldoAnual = 0;
    for (let i = 1; i <= 12; i++) {
        let ganho = Number(prompt("Ganho do mês" + i));
        let gasto = Number(prompt("Gasto do mês" + i));
        ganhoAnual += ganho;
        gastoAnual += gasto;
    }
    saldoAnual = ganhoAnual - gastoAnual;
    console.log("Ganho anual:" + ganhoAnual);
    console.log("Gasto anual:" + gastoAnual);
    console.log("Saldo anual:" + saldoAnual);
    if (saldoAnual < 0) {
        console.log("Prejuízo")
    } else {
        console.log("Lucro!")
    }
}