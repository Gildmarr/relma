//variabili
const creatureForesta = [
  "Lupo", "Orso", "Cinghiale", "Lince", "Gufo", "Faina", "Ghiro", "Volpe", "Tasso", "Capriolo", 
  "Lepre", "Scoiattolo", "Procione", "Serpe", "Rospo", "Tartaruga", "Pecora", "Passero", "Astore", "Riccio", 
  "Fagiano", "Cervo", "Beccaccia", "Lucertola", "Tordo", "Tasso", "Marmotta", "Alce", "Quaglia", "Cornacchia", 
  "Puzzola", "Cincia", "Salamandra", "Grillotalpa", "Storno", "Merlo", "Uccello canoro", "Civetta", "Ratto", 
  "Lumaca", "Fringuello", "Allodola", "Pesce", "Donnola", "Ghiro", "Pettirosso", "Martin pescatore", "Formica", 
  "Falco", "Rondine", "Gru", "Marzaiola", "Castoro", "Rondone", "Girino", "Luccio", "Ragno", "Cane da caccia", 
  "Topo", "Lucertola", "Stiaccino", "Gambero", "Balena", "Foca", "Salamandra gigante", "Arvicola", "Gufo reale", 
  "Scoiattolo volante", "Tasso americano", "Donnola siberiana", "Iena", "Tasso melmoso", "Pipistrello", "Lontra", 
  "Uccello tucano", "Bisonte", "Vombato", "Armadillo", "Opossum", "Koala", "Wombat", "Wallaby", "Quokka", "Kiwi", 
  "Echidna", "Platypus", "Kookaburra", "Cassowary", "Possum", "Emu", "Tasmanian Devil", "Kangaroo", "Cockatoo", 
  "Wombat", "Tasmanian Tiger", "Quoll", "Dingo", "Frilled Lizard", "Sugar Glider", "Cockatoo nero"
];
const creatureMontagna = [
    "Stambecco", "Aquila reale", "Orso bruno", "Lupo", "Marmotta", "Camoscio", 
    "Gufo reale", "Volpe", "Leone di montagna (puma)", "Capra di montagna", 
    "Falco pellegrino", "Serpente a sonagli", "Corvo", "Grifone", "Drago delle caverne", 
    "Yeti", "Troll di montagna", "Chimera", "Roc", "Roccia vivente", "Nano delle montagne", 
    "Orco", "Golem di pietra", "Elementale della terra", "Pipistrello gigante", "Viverna", 
    "Gargolla", "Dragone di bronzo", "Dragone di rame", "Gnomo delle rocce", "Satiro", 
    "Manticora", "Drago bianco", "Cinghiale gigante", "Tigre dai denti a sciabola", 
    "Arpia", "Basilisco", "Gorgone", "Leopardo delle nevi", "Serpe piumata", 
    "Ragno gigante", "Mulo", "Pantera", "Roccia parlante", "Ladro di rocce", "Folletto", 
    "Sirenide", "Gigante di pietra", "Gigante di fuoco", "Ogre", "Gnoll", "Elementale del fuoco", 
    "Geni delle rocce", "Anziano della montagna", "Serpente delle nevi", "Verme della terra", 
    "Ankheg", "Bulette", "Avvoltoio gigante", "Drago blu", "Seme di roccia", "Spiritello", 
    "Drago di ferro", "Drago nero", "Orso polare", "Ippogrifo", "Griffone delle nevi", 
    "Bestia della nebbia", "Leone delle nevi", "Drago d'argento", "Dragone d'oro", 
    "Manticora delle nevi", "Serpente a sonagli gigante", "Fenice delle nevi", "Orso grizzly", 
    "Folletto delle montagne", "Demone della roccia", "Spirito delle montagne", "Titano della terra", 
    "Golem di metallo", "Drago d'ottone", "Tartaruga gigante", "Leone delle montagne", 
    "Golem di cristallo", "Guardiano della montagna", "Mostro della montagna", "Cavallo da guerra", 
    "Lupo delle nevi", "Cervo", "Cervo delle montagne", "Muflone", "Cervo rosso", "Antico della montagna", 
    "Fenice di pietra", "Drago verde", "Verme della sabbia", "Manticora di ghiaccio", "Serpente alato", 
    "Uccello del tuono", "Drago delle rocce", "Spirito del vento", "Folletto del ghiaccio", "Dragone di zaffiro"
  ];


//event listener per il bottone
const btnGenera = document.querySelector(".genera-btn");
btnGenera.addEventListener("click",generaFauna);

//variabili per i calcoli
const NumeroCreatureForesta = creatureForesta.length;
const NumeroCreatureMontagna = creatureMontagna.length;



//funzione numero random
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function aggiungiRisultato(){

}
//funzione genera fauna
function generaFauna (){
    const ambiente = document.getElementById("ambiente").value;
    const orario = document.getElementById("orario").value;
    const clima = document.getElementById("clima").value;

    

    const ranCreatureForesta = getRandomInt(0,NumeroCreatureForesta) ;
    document.getElementById("myTextArea").value=creatureForesta[ranCreatureForesta] 

    console.log(creatureForesta[ranCreatureForesta])
    
}