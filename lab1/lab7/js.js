function calculateHarmonicSeries() {
    let nString = prompt("Введіть ціле число n (верхню межу ряду):");
    let n = parseInt(nString);
    if (isNaN(n) || n <= 0) {
        console.log("Некоректне введення. Будь ласка, введіть додатне ціле число.");
        return;
    }
    let sum = 0;          
    let seriesOutput = "S = ";
    for (let i = 1; i <= n; i++) {
  
        let term = 1.0 / i;

        sum += term;
        if (i === 1) {
            seriesOutput += "1";
        } else {
            seriesOutput += ` + 1/${i}`;
        }
    }
    console.log("--- Результати обчислення ряду ---");
    console.log(seriesOutput);
    console.log(`Сума S для n = ${n} дорівнює: ${sum.toFixed(6)}`);
    console.log("----------------------------------");
}
calculateHarmonicSeries();