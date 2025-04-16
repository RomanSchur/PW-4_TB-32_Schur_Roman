function calculate() {
    let Ik = parseFloat(document.getElementById("1").value);
    let tk = parseFloat(document.getElementById("2").value);
    let S = parseFloat(document.getElementById("3").value);

    if (isNaN(Ik) || isNaN(tk) || isNaN(S)) {
        alert("Потрібно заповнити всі поля!");
        return;
    }
    let K = 143; // коефіцієнт для мідного кабелю
    let S_required = (Ik * 1000 * Math.sqrt(tk)) / K;

    let thermal;
    if (S >= S_required) {
        thermal = "Термічна стійкість: витримано";
    } else {
        thermal = "Термічна стійкість: не витримано";
    }

    let dynamic;
    if (Ik <= (S * 60)) {
        dynamic = "Динамічна стійкість: витримано";
    } else {
        dynamic = "Динамічна стійкість: не витримано";
    }
    document.getElementById("res").innerHTML = `
        <h3>Результати розрахунків</h3>
        <ul>
            <li><h3>${dynamic}</h3></li>
            <li><h3>${thermal} </h3></li>
        </ul>`;
}