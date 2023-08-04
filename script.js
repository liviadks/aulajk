function exemploWhile() {
    let num = Number(document.getElementById("entrada").value);
    let i = 0;
    while (i < num) {
        alert(i);
        i++;
    }
}

function exemploFor() {
    let num = Number(document.getElementById("entrada").value);
    for (let i = 0; i < num; i++) {
        alert(i)
    }
}

function primosWhile() {
    let num = Number(document.getElementById("entrada").value);
    let qtd = 0;
    let i = 1;
    while (i <= num) {
        let dividores = 0;
        let c = 1;
        while (c <= i) {
            if (i % c == 0) {
                dividores++;
            }
            c++;
        }
        if (dividores == 2) {
            qtd++;
        }
        i++;
    }
    alert(qtd);
}

function primosFor() {
    let num = Number(document.getElementById("entrada").value);
    let qnt = 0;
    for (let i = 1; i <= num; i++) {
        let divisor = 0
        for (c = 1; c <= i; c++) {
            if (i % c == 0) {
                divisor++;
            }
        }
        if (divisor == 2) {
            qnt++;
        }
    }
    alert(qnt)
}