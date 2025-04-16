function calculate() {
    let voltage = parseFloat(document.getElementById("1").value);
    let current = parseFloat(document.getElementById("2").value);
    let cuttime = parseFloat(document.getElementById("3").value);
    let power = parseFloat(document.getElementById("4").value);
    let load = parseFloat(document.getElementById("5").value);
    let duration = parseFloat(document.getElementById("6").value);

    if (isNaN(voltage) || isNaN(current) || isNaN(cuttime) || isNaN(power) || isNaN(load) || isNaN(duration)) {
        alert("Потрібно заповнити всі поля!");
        return;
    }

    let normalCurrent = (load / 2) / ((3 ** 0.5) * voltage);
    let emergencyCurrent = normalCurrent * 2;
    let CrossSection = normalCurrent / 1.4;
    let Stability = (current * 1000 * Math.sqrt(cuttime)) / 92;

    document.getElementById("res").innerHTML = `
        <h3>Результати розрахунків</h3>
        <ul>
            <li><h3>Струм для нормального режиму: ${normalCurrent.toFixed(3)} кА</h3></li>
            <li><h3>Струм після аварії: ${emergencyCurrent.toFixed(3)} кА</h3></li>
            <li><h3>Економічний переріз: ${CrossSection.toFixed(3)} мм²</h3></li>
            <li><h3>Термічна стійкість кабелю: ${Stability.toFixed(3)}</h3></li>
        </ul>`;
}

