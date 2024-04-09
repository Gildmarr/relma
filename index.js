//scale in km
const scala_prov = 1.5;
const scala_naz = 9;
const scala_cont = 30;
const scala_mond = 90;



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
        var km = document.getElementById("km").value= scala_prov * casella;
        switch(mezzo){
                case 'carovana':
                    //ore impiegate
                    var ore = document.getElementById("ore").value=(Math.round((km/carovana) * 100) / 100).toFixed(2);
                    
                    //giorni impiegati
                    
                    document.getElementById("giorni").value = (Math.round((ore/8) * 100) / 100).toFixed(2);
                    
                break;

                case 'carrozza':
                    //ore impiegate
                    var ore = document.getElementById("ore").value=(Math.round((km/carrozza_strada) * 100) / 100).toFixed(2);
                    
                    //giorni impiegati
                    
                    document.getElementById("giorni").value= (Math.round((ore/8) * 100) / 100).toFixed(2);
                break;

                case 'marcia_pianura':
                   //ore impiegate
                   var ore = document.getElementById("ore").value=(Math.round((km/marcia_pian) * 100) / 100).toFixed(2);
                    
                   //giorni impiegati
                   
                   document.getElementById("giorni").value= (Math.round((ore/8) * 100) / 100).toFixed(2);
                break;

                case 'marcia_collina':
                    //ore impiegate
                    var ore = document.getElementById("ore").value=(Math.round((km/marcia_coll) * 100) / 100).toFixed(2);
                    
                    //giorni impiegati
                    
                    document.getElementById("giorni").value= (Math.round((ore/8) * 100) / 100).toFixed(2);
                break;

                case 'marcia_mont_med':
                    //ore impiegate
                    var ore = document.getElementById("ore").value=(Math.round((km/marcia_mont_med) * 100) / 100).toFixed(2);
                    
                    //giorni impiegati
                    
                    document.getElementById("giorni").value= (Math.round((ore/8) * 100) / 100).toFixed(2);
                break;

                case 'marcia_mont_alt':
                    //ore impiegate
                    var ore = document.getElementById("ore").value=(Math.round((km/marcia_mont_alt) * 100) / 100).toFixed(2);
                    
                    //giorni impiegati
                    
                    document.getElementById("giorni").value= (Math.round((ore/8) * 100) / 100).toFixed(2);
                break;

                case 'cavallo_pianura':
                    //ore impiegate
                    var ore = document.getElementById("ore").value=(Math.round((km/cavallo_pianura) * 100) / 100).toFixed(2);
                    
                    //giorni impiegati
                    
                    document.getElementById("giorni").value= (Math.round((ore/8) * 100) / 100).toFixed(2);
                break;

                case 'cavallo_mont_alt':
                    //ore impiegate
                    var ore = document.getElementById("ore").value=(Math.round((km/cavallo_mont_alt) * 100) / 100).toFixed(2);
                    
                    //giorni impiegati
                    
                    document.getElementById("giorni").value= (Math.round((ore/8) * 100) / 100).toFixed(2);
                break;

                case 'piccola_imb':
                    //ore impiegate
                    var ore = document.getElementById("ore").value=(Math.round((km/piccola_imb) * 100) / 100).toFixed(2);
                    
                    //giorni impiegati
                    
                    document.getElementById("giorni").value= (Math.round((ore/8) * 100) / 100).toFixed(2);
                break;

                case 'vela':
                    //ore impiegate
                    var ore = document.getElementById("ore").value=(Math.round((km/vela) * 100) / 100).toFixed(2);
                    
                    //giorni impiegati
                    
                    document.getElementById("giorni").value= (Math.round((ore/8) * 100) / 100).toFixed(2);
                break;

                case 'vela_elf':
                    //ore impiegate
                    var ore = document.getElementById("ore").value=(Math.round((km/vela_elf) * 100) / 100).toFixed(2);
                    
                    //giorni impiegati
                    
                    document.getElementById("giorni").value= (Math.round((ore/8) * 100) / 100).toFixed(2);
                break;

                case 'vascello':
                    //ore impiegate
                    var ore = document.getElementById("ore").value=(Math.round((km/vascello) * 100) / 100).toFixed(2);
                    
                    //giorni impiegati
                    
                    document.getElementById("giorni").value= (Math.round((ore/8) * 100) / 100).toFixed(2);
                break;

                case 'cav_aerea':
                    //ore impiegate
                    var ore = document.getElementById("ore").value=(Math.round((km/cav_aerea) * 100) / 100).toFixed(2);
                    
                    //giorni impiegati
                    
                    document.getElementById("giorni").value= (Math.round((ore/8) * 100) / 100).toFixed(2);
                break;

                case 'cav_aerea_vel':
                    //ore impiegate
                    var ore = document.getElementById("ore").value=(Math.round((km/cav_aerea_vel) * 100) / 100).toFixed(2);
                    
                    //giorni impiegati
                    
                    document.getElementById("giorni").value= (Math.round((ore/8) * 100) / 100).toFixed(2);
                break;
        }

    }
    else if (scala==="nazionale"){
        var km = document.getElementById("km").value= scala_naz * casella;
        switch(mezzo){
                case 'carovana':
                    //ore impiegate
                    var ore = document.getElementById("ore").value=(Math.round((km/carovana) * 100) / 100).toFixed(2);
                    
                    //giorni impiegati
                    
                    document.getElementById("giorni").value = (Math.round((ore/8) * 100) / 100).toFixed(2);
                    
                break;

                case 'carrozza':
                    //ore impiegate
                    var ore = document.getElementById("ore").value=(Math.round((km/carrozza_strada) * 100) / 100).toFixed(2);
                    
                    //giorni impiegati
                    
                    document.getElementById("giorni").value= (Math.round((ore/8) * 100) / 100).toFixed(2);
                break;

                case 'marcia_pianura':
                   //ore impiegate
                   var ore = document.getElementById("ore").value=(Math.round((km/marcia_pian) * 100) / 100).toFixed(2);
                    
                   //giorni impiegati
                   
                   document.getElementById("giorni").value= (Math.round((ore/8) * 100) / 100).toFixed(2);
                break;

                case 'marcia_collina':
                    //ore impiegate
                    var ore = document.getElementById("ore").value=(Math.round((km/marcia_coll) * 100) / 100).toFixed(2);
                    
                    //giorni impiegati
                    
                    document.getElementById("giorni").value= (Math.round((ore/8) * 100) / 100).toFixed(2);
                break;

                case 'marcia_mont_med':
                    //ore impiegate
                    var ore = document.getElementById("ore").value=(Math.round((km/marcia_mont_med) * 100) / 100).toFixed(2);
                    
                    //giorni impiegati
                    
                    document.getElementById("giorni").value= (Math.round((ore/8) * 100) / 100).toFixed(2);
                break;

                case 'marcia_mont_alt':
                    //ore impiegate
                    var ore = document.getElementById("ore").value=(Math.round((km/marcia_mont_alt) * 100) / 100).toFixed(2);
                    
                    //giorni impiegati
                    
                    document.getElementById("giorni").value= (Math.round((ore/8) * 100) / 100).toFixed(2);
                break;

                case 'cavallo_pianura':
                    //ore impiegate
                    var ore = document.getElementById("ore").value=(Math.round((km/cavallo_pianura) * 100) / 100).toFixed(2);
                    
                    //giorni impiegati
                    
                    document.getElementById("giorni").value= (Math.round((ore/8) * 100) / 100).toFixed(2);
                break;

                case 'cavallo_mont_alt':
                    //ore impiegate
                    var ore = document.getElementById("ore").value=(Math.round((km/cavallo_mont_alt) * 100) / 100).toFixed(2);
                    
                    //giorni impiegati
                    
                    document.getElementById("giorni").value= (Math.round((ore/8) * 100) / 100).toFixed(2);
                break;

                case 'piccola_imb':
                    //ore impiegate
                    var ore = document.getElementById("ore").value=(Math.round((km/piccola_imb) * 100) / 100).toFixed(2);
                    
                    //giorni impiegati
                    
                    document.getElementById("giorni").value= (Math.round((ore/8) * 100) / 100).toFixed(2);
                break;

                case 'vela':
                    //ore impiegate
                    var ore = document.getElementById("ore").value=(Math.round((km/vela) * 100) / 100).toFixed(2);
                    
                    //giorni impiegati
                    
                    document.getElementById("giorni").value= (Math.round((ore/8) * 100) / 100).toFixed(2);
                break;

                case 'vela_elf':
                    //ore impiegate
                    var ore = document.getElementById("ore").value=(Math.round((km/vela_elf) * 100) / 100).toFixed(2);
                    
                    //giorni impiegati
                    
                    document.getElementById("giorni").value= (Math.round((ore/8) * 100) / 100).toFixed(2);
                break;

                case 'vascello':
                    //ore impiegate
                    var ore = document.getElementById("ore").value=(Math.round((km/vascello) * 100) / 100).toFixed(2);
                    
                    //giorni impiegati
                    
                    document.getElementById("giorni").value= (Math.round((ore/8) * 100) / 100).toFixed(2);
                break;

                case 'cav_aerea':
                    //ore impiegate
                    var ore = document.getElementById("ore").value=(Math.round((km/cav_aerea) * 100) / 100).toFixed(2);
                    
                    //giorni impiegati
                    
                    document.getElementById("giorni").value= (Math.round((ore/8) * 100) / 100).toFixed(2);
                break;

                case 'cav_aerea_vel':
                    //ore impiegate
                    var ore = document.getElementById("ore").value=(Math.round((km/cav_aerea_vel) * 100) / 100).toFixed(2);
                    
                    //giorni impiegati
                    
                    document.getElementById("giorni").value= (Math.round((ore/8) * 100) / 100).toFixed(2);
                break;
        }
    }
    else{
        var km = document.getElementById("km").value= scala_cont * casella;
        switch(mezzo){
                case 'carovana':
                    //ore impiegate
                    var ore = document.getElementById("ore").value=(Math.round((km/carovana) * 100) / 100).toFixed(2);
                    
                    //giorni impiegati
                    
                    document.getElementById("giorni").value = (Math.round((ore/8) * 100) / 100).toFixed(2);
                    
                break;

                case 'carrozza':
                    //ore impiegate
                    var ore = document.getElementById("ore").value=(Math.round((km/carrozza_strada) * 100) / 100).toFixed(2);
                    
                    //giorni impiegati
                    
                    document.getElementById("giorni").value= (Math.round((ore/8) * 100) / 100).toFixed(2);
                break;

                case 'marcia_pianura':
                   //ore impiegate
                   var ore = document.getElementById("ore").value=(Math.round((km/marcia_pian) * 100) / 100).toFixed(2);
                    
                   //giorni impiegati
                   
                   document.getElementById("giorni").value= (Math.round((ore/8) * 100) / 100).toFixed(2);
                break;

                case 'marcia_collina':
                    //ore impiegate
                    var ore = document.getElementById("ore").value=(Math.round((km/marcia_coll) * 100) / 100).toFixed(2);
                    
                    //giorni impiegati
                    
                    document.getElementById("giorni").value= (Math.round((ore/8) * 100) / 100).toFixed(2);
                break;

                case 'marcia_mont_med':
                    //ore impiegate
                    var ore = document.getElementById("ore").value=(Math.round((km/marcia_mont_med) * 100) / 100).toFixed(2);
                    
                    //giorni impiegati
                    
                    document.getElementById("giorni").value= (Math.round((ore/8) * 100) / 100).toFixed(2);
                break;

                case 'marcia_mont_alt':
                    //ore impiegate
                    var ore = document.getElementById("ore").value=(Math.round((km/marcia_mont_alt) * 100) / 100).toFixed(2);
                    
                    //giorni impiegati
                    
                    document.getElementById("giorni").value= (Math.round((ore/8) * 100) / 100).toFixed(2);
                break;

                case 'cavallo_pianura':
                    //ore impiegate
                    var ore = document.getElementById("ore").value=(Math.round((km/cavallo_pianura) * 100) / 100).toFixed(2);
                    
                    //giorni impiegati
                    
                    document.getElementById("giorni").value= (Math.round((ore/8) * 100) / 100).toFixed(2);
                break;

                case 'cavallo_mont_alt':
                    //ore impiegate
                    var ore = document.getElementById("ore").value=(Math.round((km/cavallo_mont_alt) * 100) / 100).toFixed(2);
                    
                    //giorni impiegati
                    
                    document.getElementById("giorni").value= (Math.round((ore/8) * 100) / 100).toFixed(2);
                break;

                case 'piccola_imb':
                    //ore impiegate
                    var ore = document.getElementById("ore").value=(Math.round((km/piccola_imb) * 100) / 100).toFixed(2);
                    
                    //giorni impiegati
                    
                    document.getElementById("giorni").value= (Math.round((ore/8) * 100) / 100).toFixed(2);
                break;

                case 'vela':
                    //ore impiegate
                    var ore = document.getElementById("ore").value=(Math.round((km/vela) * 100) / 100).toFixed(2);
                    
                    //giorni impiegati
                    
                    document.getElementById("giorni").value= (Math.round((ore/8) * 100) / 100).toFixed(2);
                break;

                case 'vela_elf':
                    //ore impiegate
                    var ore = document.getElementById("ore").value=(Math.round((km/vela_elf) * 100) / 100).toFixed(2);
                    
                    //giorni impiegati
                    
                    document.getElementById("giorni").value= (Math.round((ore/8) * 100) / 100).toFixed(2);
                break;

                case 'vascello':
                    //ore impiegate
                    var ore = document.getElementById("ore").value=(Math.round((km/vascello) * 100) / 100).toFixed(2);
                    
                    //giorni impiegati
                    
                    document.getElementById("giorni").value= (Math.round((ore/8) * 100) / 100).toFixed(2);
                break;

                case 'cav_aerea':
                    //ore impiegate
                    var ore = document.getElementById("ore").value=(Math.round((km/cav_aerea) * 100) / 100).toFixed(2);
                    
                    //giorni impiegati
                    
                    document.getElementById("giorni").value= (Math.round((ore/8) * 100) / 100).toFixed(2);
                break;

                case 'cav_aerea_vel':
                    //ore impiegate
                    var ore = document.getElementById("ore").value=(Math.round((km/cav_aerea_vel) * 100) / 100).toFixed(2);
                    
                    //giorni impiegati
                    
                    document.getElementById("giorni").value= (Math.round((ore/8) * 100) / 100).toFixed(2);
                break;
        }
    }
}



