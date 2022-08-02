const EuropaiUnio = [
    "Ausztria:1995.01.01",


    "Belgium:1958.01.01",


    "Bulgária:2007.01.01",


    "Ciprus:2004.05.01",

    "Csehország:2004.05.01",

    "Dánia:1973.01.01",

    "Egyesült Királyság:1973.01.01",

    "Észtország:2004.05.01",
    "Finnország:1995.01.01",

    "Franciaország:1958.01.01",

    "Görögország:1981.01.01",

    "Hollandia:1958.01.01",

    "Horvátország:2013.07.01",

    "Írország:1973.01.01",

    "Lengyelország:2004.05.01",

    "Lettország:2004.05.01",

    "Litvánia:2004.05.01",

    "Luxemburg:1958.01.01",

    "Magyarország:2004.05.01",

    "Málta:2004.05.01",

    "Németország:1958.01.01",

    "Olaszország:1958.01.01",

    "Portugália:1986.01.01",

    "Románia:2007.01.01",

    "Spanyolország:1986.01.01",

    "Svédország:1995.01.01",

    "Szlovákia:2004.05.01",

    "Szlovénia:2004.05.01",

]

function objektumFeltolto(feltoltesreVaroElem) {
    const feldolgozottAdatok = [];
    for (i = 0; i < feltoltesreVaroElem.length; i++) {
        let objektum = {};
        let felDaraboltAdatok = feltoltesreVaroElem[i].split(':');
        objektum.orszag = felDaraboltAdatok[0];
        objektum.csatlakozas = felDaraboltAdatok[1];
        feldolgozottAdatok.push(objektum);
    }
    return feldolgozottAdatok;
}
const euOrszagok = objektumFeltolto(EuropaiUnio);


//Megoldások

function members() {
    const adatok = euOrszagok;
    document.getElementById('result').innerHTML = 'Az Európai Uniónak jelenleg ' + adatok.length + ' tagállama van!'; //document.getElementById!!!! nem pedig documentgetById
}

function voltECsatlakozas(evNegyKarakter, vizsgaltElem) {
    let voltEBelepes = false;
    let eredmeny = '';
    for (let i = 0; i < vizsgaltElem.length; i++) {
        if (vizsgaltElem[i].csatlakozas.substr(0, 4) == evNegyKarakter) {
            eredmeny += '<hr>' + vizsgaltElem[i].orszag + ' ' + evNegyKarakter + '-ban/ben lépett be.';
            document.getElementById('result').innerHTML = eredmeny;
            voltEBelepes = true;
        }
    }
    if (voltEBelepes == false) {
        document.getElementById('result').innerHTML = evNegyKarakter + '-ban/ben NEM történt belépés';
    }


}


function kiCsatlakozott(orszag, vizsgaltElem) {
    let tagE = false;
    for (i = 0; i < vizsgaltElem.length; i++) {
        if (vizsgaltElem[i].orszag == orszag) {
            document.getElementById("result").innerHTML = ` ${orszag} ${vizsgaltElem[i].csatlakozas}-ban/ben lépett be az Unióba`;
            tagE = true;
        }
    }
    if (tagE == false) {

        document.getElementById("result").innerHTML = `${orszag} NEM lépett be az Unióba <br>`;
    }
}

function haviBelepok(honap, vizsgaltElem) {
    let ho = honap;
    let eredmeny = '';
    if (honap < 10) {
        ho = '0' + honap;
    }
    let igazE = false;
    for (i = 0; i < vizsgaltElem.length; i++) {
        if (vizsgaltElem[i].csatlakozas.includes('.' + ho + '.') == true) {
            eredmeny += `<hr> ${ho} hónapban ${vizsgaltElem[i].orszag} lépett be az Unióba`;
            document.getElementById('result').innerHTML = eredmeny;
            igazE = true;
        }
    }
    if (igazE == false) {
        document.getElementById("result").innerHTML = `${ho} hónapban NEM volt belépő`;
    }
}

function utoljaraCsatlakozott(vizsgaltAdatok) {
    let utoljaraCsatlakozottMaxIndex = 0;
    for (i = 0; i < vizsgaltAdatok.length; i++) {
        if (vizsgaltAdatok[i].csatlakozas > vizsgaltAdatok[utoljaraCsatlakozottMaxIndex].csatlakozas) {
            utoljaraCsatlakozottMaxIndex = i;
        }
    }
    document.getElementById('result').innerHTML = `${vizsgaltAdatok[utoljaraCsatlakozottMaxIndex].orszag} csatlakozott utoljára az EU-ba!`;
}

function Statisztika(vizsgaltAdatok) {
    let kivalogatottEvek = [];

    for (i = 0; i < vizsgaltAdatok.length; i++) {
        let szerepelE = false;
        for (j = 0; j < kivalogatottEvek.length; j++) {
            if (kivalogatottEvek[j] == vizsgaltAdatok[i].csatlakozas.substr(0, 4)) {
                szerepelE = true;
            }
        }
        if (szerepelE == false) {
            kivalogatottEvek.push(vizsgaltAdatok[i].csatlakozas.substr(0, 4))
        }
    }

    let segedLista = [];
    for (i = 0; i < kivalogatottEvek.length; i++) {
        segedLista.push(0)
    }
    for (i = 0; i < vizsgaltAdatok.length; i++) {
        for (j = 0; j < kivalogatottEvek.length; j++) {
            if (kivalogatottEvek[j] == vizsgaltAdatok[i].csatlakozas.substr(0, 4)) {
                segedLista[j]++;
            }
        }
    }

    document.getElementById('result').innerHTML = 'Statisztika: <br>';
    for (i = 0; i < kivalogatottEvek.length; i++) {
        document.getElementById('result').innerHTML += '<hr>' + kivalogatottEvek[i] + '-ben :' + segedLista[i] + ' ország csatlakozott az EU-hoz';
    }
}