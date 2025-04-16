function calculate() {
    let qpp = parseFloat(document.getElementById("1").value);
    let power = parseFloat(document.getElementById("2").value);

    if (isNaN(qpp) || isNaN(power)) {
        alert("Потрібно заповнити всі поля!");
        return;
    }
    let resistance1 = (10.5 ** 2) / power;
    let resistance2 = (10.5 / 100) * (10.5 ** 2) / 6.3;
    let sum_res = resistance1 + resistance2;
    let current_value = 10.5 / ((3 ** 0.5) * sum_res);

    document.getElementById("res").innerHTML = `
        <h3>Результати розрахунків</h3>
        <ul>
            <li><h3>Сумарний опір: ${sum_res.toFixed(3)} кА</h3></li>
            <li><h3>Початкове діюче значення струму: ${current_value.toFixed(3)} кА</h3></li>
        </ul>`;
}