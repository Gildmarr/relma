//scale in km
const scala_prov = 1.5;
const scala_naz = 9;
const scala_cont = 90;



//mezzi
const carovana = 2.5;
const carrozza_strada = 6.9;
const marcia_pian = 3.4;
const marcia_coll = 2.9;
const marcia_mont_med = 2.5;
const marcia_mont_alt = 1.9;
const cavallo_pianura = 6.3;
const cavallo_mont_alt = 3.8;
const piccola_imb=5;
const vela = 10;
const vela_elf = 12.5;
const vascello = 7;
const cav_aerea = 36.3;
const cav_aerea_vel = 60;




function calc(){
    var casella = document.getElementById("caselle").value;
    var scala = document.getElementById("scala").value;
    var mezzo = document.getElementById("mezzo").value;

    if (scala==="provinciale"){
        switch(mezzo){
                case 'carovana':
                    //km percorsi
                    var km = document.getElementById("km").value= scala_prov * casella;
                    
                    //ore impiegate
                    var ore = document.getElementById("ore").value= km/carovana;
                    
                    //giorni impiegati
                    var giorni = (Math.round((ore/8) * 100) / 100).toFixed(2);
                    document.getElementById("giorni").value= giorni;
                    
                break;

                case 'carrozza':
                    //km percorsi
                    var km = document.getElementById("km").value= scala_prov * casella;
                    //ore impiegate
                    var ore = document.getElementById("ore").value= km/carrozza_strada;
                    //giorni impiegati
                    var giorni = (Math.round((ore/8) * 100) / 100).toFixed(2);
                    document.getElementById("giorni").value= giorni;
                break;

                case 'marcia_pianura':
                    //km percorsi
                    var km = document.getElementById("km").value= scala_prov * casella;
                    //ore impiegate
                    var ore = document.getElementById("ore").value= km/marcia_pian;
                    //giorni impiegati
                    var giorni = (Math.round((ore/8) * 100) / 100).toFixed(2);
                    document.getElementById("giorni").value= giorni;
                break;

                case 'marcia_collina':
                    //km percorsi
                    var km = document.getElementById("km").value= scala_prov * casella;
                    //ore impiegate
                    var ore = document.getElementById("ore").value= km/marcia_coll;
                    //giorni impiegati
                    var giorni = (Math.round((ore/8) * 100) / 100).toFixed(2);
                    document.getElementById("giorni").value= giorni;
                break;

                case 'marcia_mont_med':
                    //km percorsi
                    var km = document.getElementById("km").value= scala_prov * casella;
                    //ore impiegate
                    var ore = document.getElementById("ore").value= km/marcia_mont_med;
                    //giorni impiegati
                    var giorni = (Math.round((ore/8) * 100) / 100).toFixed(2);
                    document.getElementById("giorni").value= giorni;
                break;

                case 'marcia_mont_alt':
                    //km percorsi
                    var km = document.getElementById("km").value= scala_prov * casella;
                    //ore impiegate
                    var ore = document.getElementById("ore").value= km/marcia_mont_alt;
                    //giorni impiegati
                    var giorni = (Math.round((ore/8) * 100) / 100).toFixed(2);
                    document.getElementById("giorni").value= giorni;
                break;

                case 'cavallo_pianura':
                    //km percorsi
                    var km = document.getElementById("km").value= scala_prov * casella;
                    //ore impiegate
                    var ore = document.getElementById("ore").value= km/cavallo_pianura;
                    //giorni impiegati
                    var giorni = (Math.round((ore/8) * 100) / 100).toFixed(2);
                    document.getElementById("giorni").value= giorni;
                break;

                case 'cavallo_mont_alt':
                    //km percorsi
                    var km = document.getElementById("km").value= scala_prov * casella;
                    //ore impiegate
                    var ore = document.getElementById("ore").value= km/cavallo_mont_alt;
                    //giorni impiegati
                    var giorni = (Math.round((ore/8) * 100) / 100).toFixed(2);
                    document.getElementById("giorni").value= giorni;
                break;

                case 'piccola_imb':
                    //km percorsi
                    var km = document.getElementById("km").value= scala_prov * casella;
                    //ore impiegate
                    var ore = document.getElementById("ore").value= km/piccola_imb;
                    //giorni impiegati
                    var giorni = (Math.round((ore/8) * 100) / 100).toFixed(2);
                    document.getElementById("giorni").value= giorni;
                break;

                case 'vela':
                    //km percorsi
                    var km = document.getElementById("km").value= scala_prov * casella;
                    //ore impiegate
                    var ore = document.getElementById("ore").value= km/vela;
                    //giorni impiegati
                    var giorni = (Math.round((ore/8) * 100) / 100).toFixed(2);
                    document.getElementById("giorni").value= giorni;
                break;

                case 'vela_elf':
                    //km percorsi
                    var km = document.getElementById("km").value= scala_prov * casella;
                    //ore impiegate
                    var ore = document.getElementById("ore").value= km/vela_elf;
                    //giorni impiegati
                    var giorni = (Math.round((ore/8) * 100) / 100).toFixed(2);
                    document.getElementById("giorni").value= giorni;
                break;

                case 'vascello':
                    //km percorsi
                    var km = document.getElementById("km").value= scala_prov * casella;
                    //ore impiegate
                    var ore = document.getElementById("ore").value= km/vascello;
                    //giorni impiegati
                    var giorni = (Math.round((ore/8) * 100) / 100).toFixed(2);
                    document.getElementById("giorni").value= giorni;
                break;

                case 'cav_aerea':
                    //km percorsi
                    var km = document.getElementById("km").value= scala_prov * casella;
                    //ore impiegate
                    var ore = document.getElementById("ore").value= km/cav_aerea;
                    //giorni impiegati
                    var giorni = (Math.round((ore/8) * 100) / 100).toFixed(2);
                    document.getElementById("giorni").value= giorni;
                break;

                case 'cav_aerea_vel':
                    //km percorsi
                    var km = document.getElementById("km").value= scala_prov * casella;
                    //ore impiegate
                    var ore = document.getElementById("ore").value= km/cav_aerea_vel;
                    //giorni impiegati
                    var giorni = (Math.round((ore/8) * 100) / 100).toFixed(2);
                    document.getElementById("giorni").value= giorni;
                break;
        }

    }
    else if (scala==="nazionale"){
        switch(mezzo){
            case 'carovana':
                //km percorsi
                var km = document.getElementById("km").value= scala_naz* casella;
                //ore impiegate
                var ore = document.getElementById("ore").value= km/carovana;
                //giorni impiegati
                document.getElementById("giorni").value=ore/8;
            break;
    }
    }
    else{
        console.log("cont");
    }
}

