let osztas_lapok = (pakli) => {
    pakli = Math.floor(Math.random() * pakli.length);
    for (let i = 0; i < pakli.length; i++) {
        if (pakli[i] == "J" || pakli[i] == "Q" || pakli[i] == "K") {
            pakli[i] = 10;
        } else if (pakli[i] == "A") {
            pakli[i] = 11;
        }
    }
    return pakli;
}

let dontes = (total1, total2) => {
    if (total1 > 21 && total2 > 21) {
        console.log("Játékos és gép is veszített!");
    } else if (total1 <= 21 && total1 > total2 || total1 <= 21 && total2 > 21) {
        console.log("Játékos nyert!");
    } else if (total1 == 21 && total2 == 21 || total1 == total2) {
        console.log("Döntetlen!");
    } else {
        console.log("Vesztettél.");
    }
}

let jatek = (pakli) => {
    var kezben1 = [];
    var kezben2 = [];
    var jatekos_total = 0;
    var gep_total = 0;
    var i = 0;
    while (i < 2) {
        let jatekos = osztas_lapok(pakli);
        kezben1.push(jatekos);
        let gep = osztas_lapok(pakli);
        kezben2.push(gep);
        i += 1;
    }
    jatekos_total = kezben1.reduce((a, b) => a + b, 0);
    gep_total = kezben2.reduce((a, b) => a + b, 0);
    console.log("Játékos lapok: " + kezben1 + " Pontszám: " + jatekos_total);
    console.log("Gép lapjai: " + kezben2 + " Pontszáma: " + gep_total);
    while (jatekos_total < 21 && gep_total < 21 && prompt("Kérsz még egy lapot? i/n") === "i") {
        jatekos = osztas_lapok(pakli)
        kezben1.push(jatekos)
        jatekos_total = kezben1.reduce((a, b) => a + b, 0);
        gep = osztas_lapok(pakli)
        kezben2.push(gep)
        gep_total = kezben2.reduce((a, b) => a + b, 0);
        console.log("játékos: " + kezben1, jatekos_total);
        console.log("gép: " + kezben2, gep_total);
    }

    dontes(jatekos_total, gep_total);
    console.log("Vége a játéknak!");
}
var lapok = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];

jatek(lapok);