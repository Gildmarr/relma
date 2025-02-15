//scale in km
const scala_prov = 1.5;
const scala_naz = 9;
const scala_topo = 30;
const scala_cont = 90;

//mezzi
const carovana = 4;
const carrozza_strada = 6.9;
const marcia_pian = 4.5;
const marcia_coll = 3.5;
const marcia_mont_med = 3;
const marcia_mont_alt = 1.9;
const cavallo_pianura = 6.3;
const cavallo_media_mont = 3.8;
const canoa_up = 2.3;
const canoa_no = 5;
const canoa_down = 7;
const vela = 2.8;
const vela_elf = 3.5;
const peschereccio = 4.9;
const vascello = 6.3;
const pallone_aereo = 12.1;
const cav_aerea_pic = 45;
const cav_aerea_med = 70;
const cav_aerea_gr = 110;
const piccolo_volatile = 32;
const piccione_viaggiatore = 76;

//costo mezzi
const costoVela = 0.1;
const costoVelaElfica = 0.2;
const costoVascello = 1.5;
const costoCarrozza = 0.01;
const costoCarovana = 0.10;
const costoPeschereccio = 0.8;
const costoPalloneaAereo = 3;


//funzione per il calcolo degli output
function calc() {
    var casella = document.getElementById("caselle").value;
    var scala = document.getElementById("scala").value;
    var mezzo = document.getElementById("mezzo").value;
    if (casella === "") { }
    else {
        if (scala == "provinciale") {
            calcoloCompleto(scala_prov, mezzo, casella);
        }
        else if (scala == "nazionale") {
            calcoloCompleto(scala_naz, mezzo, casella);
        }
        else if (scala == "topografica") {
            calcoloCompleto(scala_topo, mezzo, casella);
        }
        else if (scala == "continentale") {
            calcoloCompleto(scala_cont, mezzo, casella);
        }
    }

}

//funzione per i calcoli di tutti i mezzi
function calcoloCompleto(scala, mezzo, casella) {
    var km = document.getElementById("km").value = scala * casella;
    console.log(km);
    switch (mezzo) {
        case 'carovana':
            //ore impiegate
            var ore = document.getElementById("ore").value = (Math.round((km / carovana) * 100) / 100).toFixed(2);

            //giorni impiegati
            document.getElementById("giorni").value = (Math.round((ore / 8) * 100) / 100).toFixed(2);

            //costo
            document.getElementById("costo").value = (Math.round((km * costoCarovana) * 100) / 100).toFixed(2);
            break;


        case 'carrozza':
            //ore impiegate
            var ore = document.getElementById("ore").value = (Math.round((km / carrozza_strada) * 100) / 100).toFixed(2);

            //giorni impiegati
            document.getElementById("giorni").value = (Math.round((ore / 8) * 100) / 100).toFixed(2);

            //costo
            document.getElementById("costo").value = (Math.round((km * costoCarrozza) * 100) / 100).toFixed(2);
            break;


        case 'marcia_pianura':
            //ore impiegate
            var ore = document.getElementById("ore").value = (Math.round((km / marcia_pian) * 100) / 100).toFixed(2);

            //giorni impiegati
            document.getElementById("giorni").value = (Math.round((ore / 8) * 100) / 100).toFixed(2);
            document.getElementById("costo").value = 0;
            break;


        case 'marcia_collina':
            //ore impiegate
            var ore = document.getElementById("ore").value = (Math.round((km / marcia_coll) * 100) / 100).toFixed(2);

            //giorni impiegati
            document.getElementById("giorni").value = (Math.round((ore / 8) * 100) / 100).toFixed(2);
            document.getElementById("costo").value = 0;
            break;


        case 'marcia_mont_med':
            //ore impiegate
            var ore = document.getElementById("ore").value = (Math.round((km / marcia_mont_med) * 100) / 100).toFixed(2);

            //giorni impiegati
            document.getElementById("giorni").value = (Math.round((ore / 8) * 100) / 100).toFixed(2);
            document.getElementById("costo").value = 0;
            break;


        case 'marcia_mont_alt':
            //ore impiegate
            var ore = document.getElementById("ore").value = (Math.round((km / marcia_mont_alt) * 100) / 100).toFixed(2);

            //giorni impiegati
            document.getElementById("giorni").value = (Math.round((ore / 8) * 100) / 100).toFixed(2);
            document.getElementById("costo").value = 0;
            break;


        case 'cavallo_pianura':
            //ore impiegate
            var ore = document.getElementById("ore").value = (Math.round((km / cavallo_pianura) * 100) / 100).toFixed(2);

            //giorni impiegati
            document.getElementById("giorni").value = (Math.round((ore / 8) * 100) / 100).toFixed(2);
            document.getElementById("costo").value = 0;
            break;


        case 'cavallo_mont_med':
            //ore impiegate
            var ore = document.getElementById("ore").value = (Math.round((km / cavallo_media_mont) * 100) / 100).toFixed(2);

            //giorni impiegati
            document.getElementById("giorni").value = (Math.round((ore / 8) * 100) / 100).toFixed(2);
            document.getElementById("costo").value = 0;
            break;


        case 'canoa_up':
            //ore impiegate
            var ore = document.getElementById("ore").value = (Math.round((km / canoa_up) * 100) / 100).toFixed(2);

            //giorni impiegati
            document.getElementById("giorni").value = (Math.round((ore / 8) * 100) / 100).toFixed(2);
            document.getElementById("costo").value = 0;
            break;


        case 'canoa_no':
            //ore impiegate
            var ore = document.getElementById("ore").value = (Math.round((km / canoa_no) * 100) / 100).toFixed(2);

            //giorni impiegati
            document.getElementById("giorni").value = (Math.round((ore / 8) * 100) / 100).toFixed(2);
            document.getElementById("costo").value = 0;
            break;


        case 'canoa_down':
            //ore impiegate
            var ore = document.getElementById("ore").value = (Math.round((km / canoa_down) * 100) / 100).toFixed(2);

            //giorni impiegati
            document.getElementById("giorni").value = (Math.round((ore / 8) * 100) / 100).toFixed(2);
            document.getElementById("costo").value = 0;
            break;


        case 'vela':
            //ore impiegate
            var ore = document.getElementById("ore").value = (Math.round((km / vela) * 100) / 100).toFixed(2);

            //giorni impiegati
            document.getElementById("giorni").value = (Math.round((ore / 24) * 100) / 100).toFixed(2);

            //costo
            document.getElementById("costo").value = (Math.round((km * costoVela) * 100) / 100).toFixed(2);
            break;


        case 'vela_elf':
            //ore impiegate
            var ore = document.getElementById("ore").value = (Math.round((km / vela_elf) * 100) / 100).toFixed(2);

            //giorni impiegati
            document.getElementById("giorni").value = (Math.round((ore / 24) * 100) / 100).toFixed(2);

            //costo
            document.getElementById("costo").value = (Math.round((km * costoVelaElfica) * 100) / 100).toFixed(2);
            break;


        case 'peschereccio':
            //ore impiegate
            var ore = document.getElementById("ore").value = (Math.round((km / peschereccio) * 100) / 100).toFixed(2);

            //giorni impiegati
            document.getElementById("giorni").value = (Math.round((ore / 24) * 100) / 100).toFixed(2);

            //costo
            document.getElementById("costo").value = (Math.round((km * costoPeschereccio) * 100) / 100).toFixed(2);
            break;


        case 'vascello':
            //ore impiegate
            var ore = document.getElementById("ore").value = (Math.round((km / vascello) * 100) / 100).toFixed(2);

            //giorni impiegati
            document.getElementById("giorni").value = (Math.round((ore / 24) * 100) / 100).toFixed(2);

            //costo
            document.getElementById("costo").value = (Math.round((km * costoVascello) * 100) / 100).toFixed(2);
            break;


        case 'pallone_aereo':
            //ore impiegate
            var ore = document.getElementById("ore").value = (Math.round((km / pallone_aereo) * 100) / 100).toFixed(2);

            //giorni impiegati
            document.getElementById("giorni").value = (Math.round((ore / 24) * 100) / 100).toFixed(2);

            //costo
            document.getElementById("costo").value = (Math.round((km * costoPalloneaAereo) * 100) / 100).toFixed(2);
            break;


        case 'cav_aerea_pic':
            //ore impiegate
            var ore = document.getElementById("ore").value = (Math.round((km / cav_aerea_pic) * 100) / 100).toFixed(2);

            //giorni impiegati
            document.getElementById("giorni").value = (Math.round((ore / 8) * 100) / 100).toFixed(2);

            //costo
            document.getElementById("costo").value = 0;
            break;


        case 'cav_aerea_med':
            //ore impiegate
            var ore = document.getElementById("ore").value = (Math.round((km / cav_aerea_med) * 100) / 100).toFixed(2);

            //giorni impiegati
            document.getElementById("giorni").value = (Math.round((ore / 8) * 100) / 100).toFixed(2);

            //costo
            document.getElementById("costo").value = 0;
            break;


        case 'cav_aerea_gr':
            //ore impiegate
            var ore = document.getElementById("ore").value = (Math.round((km / cav_aerea_gr) * 100) / 100).toFixed(2);

            //giorni impiegati
            document.getElementById("giorni").value = (Math.round((ore / 8) * 100) / 100).toFixed(2);

            //costo
            document.getElementById("costo").value = 0;
            break;


        case 'piccolo_volatile':
            //ore impiegate
            var ore = document.getElementById("ore").value = (Math.round((km / piccolo_volatile) * 100) / 100).toFixed(2);

            //giorni impiegati
            document.getElementById("giorni").value = (Math.round((ore / 12) * 100) / 100).toFixed(2);

            //costo
            document.getElementById("costo").value = 0;
            break;


        case 'piccione_viaggiatore':
            //ore impiegate
            var ore = document.getElementById("ore").value = (Math.round((km / piccione_viaggiatore) * 100) / 100).toFixed(2);

            //giorni impiegati
            document.getElementById("giorni").value = (Math.round((ore / 12) * 100) / 100).toFixed(2);

            //costo
            document.getElementById("costo").value = 0;
            break;

    }
}

//script aggiungere contenuto valore testo
var costoTotale = 0;
var kmTotali = 0;
var giorniTotali = 0;

function calcolaViaggio() {

    var km = Math.round(document.getElementById("km").value);
    var gg = Math.round((document.getElementById("giorni").value) * 10) / 10;
    var costo = document.getElementById("costo").value;
    var mezzo = document.getElementById("mezzo").value;
    var caselle = document.getElementById("caselle").value;
    var scala = document.getElementById("scala").value;

    costoTotale = Math.round((costoTotale + parseFloat(costo)) * 10) / 10;
    kmTotali = kmTotali + parseInt(km);
    giorniTotali = Math.round((giorniTotali + gg) * 10) / 10;

    if (caselle === "" || km === 0) {
        alert("controllare campi inseriti")
    }
    else {
        if (mezzo === "vascello" || mezzo === "vela" || mezzo === "vela_elf" || mezzo === "peschereccio" || mezzo === "pallone_aereo") {
            document.getElementById("myTextArea").value += "Partenza da:\nArrivo a:\nMezzo: " + mezzo + "\nCaselle: " + caselle + "  (" + scala + ")\nKM: " + km + "\nViaggerete per gg(24h): " + gg + "\nVi costera' MO: " + costo + "\n------------------------------\n\n";
        }
        else {
            document.getElementById("myTextArea").value += "Partenza da:\nArrivo a:\nMezzo: " + mezzo + "\nCaselle: " + caselle + " (" + scala + ")\nKM: " + km + "\nViaggerete per gg(8h): " + gg + "\nVi costera' MO: " + costo + "\n------------------------------\n\n";
        }
    }


}

//calcoli per il bottone Calcolo totale
function calcoloFinale() {
    if (document.getElementById("caselle").value === "" || document.getElementById("myTextArea").value === "") {

    }
    else {
        document.getElementById("myTextArea").value += "COSTO TOTALE: " + costoTotale + " MO\nKM TOTALI: " + kmTotali + "\nGIORNI TOTALI: " + giorniTotali + "\n\n\n";
    }

}

function resetta() {

    document.getElementById("myTextArea").value = "";
    costoTotale = 0;
    kmTotali = 0;
    giorniTotali = 0;

}

function download() {

    var data = document.getElementById("myTextArea").value;
    if (data === "") {
        alert("Il viaggio è vuoto");
    }
    else {
        var blob = new Blob([data], { type: 'text' });
        var url = URL.createObjectURL(blob);
        var anchore = document.createElement("a");
        anchore.href = URL.createObjectURL(blob);
        anchore.download = "viaggio.txt";
        anchore.click();

    }


}
