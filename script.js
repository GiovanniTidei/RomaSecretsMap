//Init Overlays
var overlays = {};


//Init BaseMaps
var basemaps = {
    "OpenStreetMaps": L.tileLayer(
        "https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png", {
            minZoom: 2,
            maxZoom: 19,
            id: "osm.streets"
        }
    ),
};

//Map Options
var mapOptions = {
    zoomControl: true,
    attributionControl: true,
    center: [41.891873, 12.481490],
    zoom: 14,
    layers: [basemaps.OpenStreetMaps]
};

//Render Main Map
var map = L.map("map", mapOptions);

/*

//funzione Locate me con bottone

function onLocationFound(e) {

    var location = e.latlng

    L.marker(location).addTo(map).bindPopup("Ti trovi qui ").openPopup();

}

function onLocationError(e) {
    alert(e.message);
}

function getLocationLeaflet() {

    map.on('locationfound', onLocationFound);
    map.on('locationerror', onLocationError);

    map.locate({ setView: false, maxZoom: 16 });
}
*/

//Me locate con aggiornamento ogni tot seconti, per evitare spostamento mappa: { autoPan: false }

var current_position;

function onLocationFound(e) {
    // if position defined, then remove the existing position marker and accuracy circle from the map
    if (current_position) {
        map.removeLayer(current_position);
    }


    current_position = L.marker(e.latlng).addTo(map)
        .bindTooltip("Ti trovi qui ", { autoPan: false }).openTooltip();

}
/*
function onLocationError(e) {
    alert(e.message);
}
*/
map.on('locationfound', onLocationFound);

/*
map.on('locationerror', onLocationError);

*/

// wrap map.locate in a function    
function locate() {
    map.locate({ setView: false, watch: true, maxZoom: 16, });
}

// call locate every 3 seconds... forever
setInterval(locate, 3000);




/* // Me locate prova 1 senza aggiornamento
map.locate({ setView: false })
    .on('locationfound', function(e) {
        icon = L.divIcon({
            className: 'custom-div-icon',
            html: "<div style='background-color:#4838cc;' class='marker-pin'></div><i class='fas fa-running awesome'>",
            iconSize: [30, 42],
            iconAnchor: [15, 42]
        });

        var marker = L.marker([e.latitude, e.longitude], { icon: icon }).bindPopup('Ti trovi qui :)');
        map.addLayer(marker);
 
    })
    .on('locationerror', function(e) {
        console.log(e);
        alert("Location access denied.");
    }); */


//icon eye
icon = L.divIcon({
    className: 'custom-div-icon',
    html: "<div style='background-color:#4838cc;' class='marker-pin'></div><i class='far fa-eye awesome'>",
    iconSize: [30, 42],
    iconAnchor: [15, 42]
});

//Ipogeo dino compagni
var marker0 = L.marker([41.8714, 12.5177], { icon: icon }).addTo(map);

marker0.bindPopup(`<h6>
                    <a href="https://www.google.com/maps/dir//Ipogeo+di+via+Dino+Compagni,+Via+Latina,
                    +258,+00179+Roma+RM/@41.8714598,12.5155615,17z/data=!4m9!4m8!1m0!1m5!1m1!1s0x132f61a4
                    96ac98f9:0x572bd8a3e3559159!2m2!1d12.5177502!2d41.8714598!3e0">
                    <i class='fas fa-route' style="font-size: 22px"></i></a> &ensp;
                    Ipogeo di via Dino Compagni</h6>
                    
                    <p>«Nei sotterranei l’atmosfera è magnetica, 
                    l’emozione è grande. I colori, luminosi, avvolgono il visitatore con caldi toni
                    rossi, bruni e violacei, con chiare pennellate gialle, ocra, arancione e vibranti
                    tocchi azzurri, verdi e grigi: le scene dipinte, oltre un centinaio, rimbalzano da 
                    una parete all’altra creando un caleidoscopio variopinto e variegato… A ragion 
                    veduta viene definita dagli studiosi la “pinacoteca del IV secolo”…» <br>"L. De Sanctis" 
                   </p>

                    <img class="cap" src="ipogeo.jpg">
                    <br><br>
                    &nbsp;<a href="https://it.wikipedia.org/wiki/Ipogeo_di_via_Dino_Compagni">scopri di più</a>
                   `).closePopup();

//via piccolomini

var marker1 = L.marker([41.89162574313159, 12.442772984504698], { icon: icon }).addTo(map);

marker1.bindPopup(`<h6>
                    <a href="https://www.google.com/maps/dir//Via+Nicol%C3%B2+Piccolomini,
                    +00165+Roma+RM/@41.8910867,12.4334403,15z/data=!4m9!4m8!1m0!1m5!1m1!1s0x13
                    2f600b0db623c9:0xd0369e18a4ed8c74!2m2!1d12.4421951!2d41.8910711!3e0">

                    <i class='fas fa-route' style="font-size: 22px"></i></a>&ensp;

                    Via Piccolomini</h6><p>Curioso in questa strana via è il gioco di 
                   prospettiva che fa sì che, avvicinandosi a San Pietro, sembrerebbe che
                   la cupola si allontani, mentre più si indietreggia più sembra grande e
                   a un palmo dal naso. Un’illusione ottica unica al mondo.</p>
                   <img class="cap_piccolomini" src="piccolomini.jpg">
                   `).closePopup();

//Cripta dei cappuccini

var marker2 = L.marker([41.90497601930675, 12.488493919372559], { icon: icon }).addTo(map);

marker2.bindPopup(`<h6>
                    <a href="https://www.google.com/maps/dir//Chiesa+di+Santa+Maria+della+Concezione+
                    dei+Cappuccini,+Via+Vittorio+Veneto,+27,+00187+Roma+RM/@41.905024,12.4863791,17z/data
                    =!4m9!4m8!1m0!1m5!1m1!1s0x132f61abcafbe0fb:0x89cfda62b031c220!2m2!1d12.4885678!2d41.90
                    5024!3e0">
                    
                    <i class='fas fa-route' style="font-size: 22px"></i></a>&ensp;

                    Cripta dei Cappuccini</h6><p>All'interno dell'apparentemente innoqua e 
                   tranquilla Chiesa di Santa Maria Immacolata, costruita nel 1600, si nasconde 
                   un luogo spettrale ed enigmatico.<br>Si tratta di una cripta decorata con le
                   ossa di oltre 4.000 frati. In questo luogo tenebroso si viene accolti con questa
                    scritta: “Quello che voi siete noi eravamo; quello che noi siamo voi sarete. “</p>
                     <img class="cap" src="capp.jpg"><br><br>
                     &nbsp; <a href="http://www.cappucciniviaveneto.it/il_museo_3.html">Scopri di più</a>
                   `).closePopup();

// Quadro motorizzato di Rubens

var marker3 = L.marker([41.89852, 12.4692], { icon: icon }).addTo(map);

marker3.bindPopup(`<h6><a href="https://www.google.com/maps/dir//Parrocchia+Santa+Maria+in+Vallicella,+Via+del+Governo+Vecchio,
                    +134,+00186+Roma+RM/@41.8984826,12.4669713,17z/data=!4m9!4m8!1m0!1m5!1m1!1s0x132f6044d0605291:0x22e8c66aa7d4
                    d918!2m2!1d12.46916!2d41.8984826!3e0">

                    <i class='fas fa-route' style="font-size: 22px"></i></a>&ensp;

                    Il quadro motorizzato di Rubens</h6>

                    <p>Nella chiesa di Santa Maria in Vallicella risiede un'importantissima icona miracolosa della Vergine.
                     A causa dal deterioramento, venne commissariata a Rubens una pala d'altare motorizzata in grado di custodire
                     l'icona, mostrandola e nascondendola a comando. Oggi è possibile assistere al curioso rito meccanico alla
                     fine della messa del sabato sera, quando puntualmente il sacrestano la fa "miracolosamente" ricomparire.  
                     </p>
                    <img class="cap" src="vallicella.jpg"><br><br>
                    &nbsp;<a href="https://it.wikipedia.org/wiki/Chiesa_Nuova_(Roma)">Scopri di più</a>
                  `).closePopup();

// Tempietto del bramante

var marker4 = L.marker([41.88875, 12.466417], { icon: icon }).addTo(map);

marker4.bindPopup(`<h6><a href="https://www.google.com/maps/dir//Via+di+S.+Pietro+in+Montorio,+Tempietto+del
                    +Bramante,+00153+Roma+RM/@41.8887454,12.4642213,17z/data=!4m9!4m8!1m0!1m5!1m1!1s0x132f603
                    f340fe569:0xc51345225939793a!2m2!1d12.46641!2d41.8887454!3e0">
                    <i class='fas fa-route' style="font-size: 22px"></i></a> &ensp;

                    Tempietto del bramante</h6>

                    <p>Il Tempietto del Bramante è posto su uno dei cortili del convento di San Pietro in Montorio, sul colle Giannicolo.
                    Considerato uno degli esempi più belli della cultura rinascimenrtale romana, secondo la tradizione è stato costruito nel
                    punto esatto in cui venne crocifisso l'apostolo Pietro. 
                     </p>
                    <img class="cap_tempietto" src="tempietto.jpg"><br><br>
                    &nbsp; <a href="https://it.wikipedia.org/wiki/Tempietto_di_San_Pietro_in_Montorio">Scopri di più</a>
                   `).closePopup()

// Cimitero acattolico di Roma

var marker5 = L.marker([41.876397, 12.479944], { icon: icon }).addTo(map);

marker5.bindPopup(`<h6><a href="https://www.google.com/maps/dir//Cimitero+Acattolico+di+Roma,+Via+Caio+Cestio,+6,+00153+Roma
                    +RM/@41.8763817,12.477285,17z/data=!4m9!4m8!1m0!1m5!1m1!1s0x132f602c343371a7:0x84c78399624f5d9b!2m2!1d12.
                    4794737!2d41.8763817!3e0">
                    
                    <i class='fas fa-route' style="font-size: 22px"></i></a> &ensp;
                    Cimitero acattolico di Roma</h6>

                    <p>Anche detto cimitero degli inglesi, in questo luogo tranquillo e romantico riposano grandi eroi del passato
                    quali Antonio Gramsci, John Keats, Percy Bysshe Shelley, Emilio Lussu.. <br> «Una mescolanza di lacrime e sorrisi, 
                    di pietre e di fiori, di cipressi in lutto e di cielo luminoso, che ci dà l'impressione di volgere uno sguardo alla
                    morte dal lato più felice della tomba»<br> "Henry James"</p>
                    <img class="cap" src="cimitero.jpg"><br><br>
                    &nbsp; &nbsp;<a href="https://it.wikipedia.org/wiki/Cimitero_acattolico_di_Roma">Scopri di più</a>
                   `).closePopup()


// Pioggia di rose Pantheon

var marker6 = L.marker([41.898561, 12.47685], { icon: icon }).addTo(map);

marker6.bindPopup(`<h6><a href="https://www.google.com/maps/dir//Pantheon,+Piazza+della+Rotonda,+
                   00186+Roma+RM/@41.8986108,12.4746842,17z/data=!4m9!4m8!1m0!1m5!1m1!1s0x132f604f
                   678640a9:0xcad165fa2036ce2c!2m2!1d12.4768729!2d41.8986108!3e0">
                    <i class='fas fa-route' style="font-size: 22px"></i></a> &ensp;
                    Petali di rosa al Pantheon</h6>

                    <p>Durante la messa di pentecoste nella chiesa del Pantheon è riservato ai fedeli uno spettacolo 
                    unico. Alla fine della liturgia, dall'apertura centrale, piovono migliaia di petali di rosa che simboleggiano
                    la discesa dello spirito santo. Questa tradizione, oggi poco diffusa, risale alla chiesa primitiva, dove 
                    la rosa simboleggiava lo spirito santo e il colore rosso il sangue versato da Gesù per la redenzione.
                    La "Pasqua rosata", dopo essere stata sospesa per molti anni, è stata reintrodotta nel 1995. </p>
                    <img class="cap" src="rose.jpg"><br><br>
                   `).closePopup()

// Cupola Piatta della cheisa di Sant'Ignazio

var marker7 = L.marker([41.8988, 12.47978], { icon: icon }).addTo(map);

marker7.bindPopup(`<h6><a href="https://www.google.com/maps/dir//Chiesa+di+Sant'+Ignazio+di+Loyola,+Via+
                    del+Caravita,+8a,+00186+Roma+RM/@41.9177214,12.4925862,10.07z/data=!4m9!4m8!1m0!1m5!1
                    m1!1s0x132f60526de4e0cd:0xc6e56f7f632dc7f!2m2!1d12.4798693!2d41.8987532!3e0">
                    
                    <i class='fas fa-route' style="font-size: 22px"></i></a> &ensp;
                    Cupola piatta di Sant'Ignazio</h6>

                    <p>La chiesa di Sant'Ignazio nasconde un'incredibile particolarità che spesso sfugge ai visitatori: 
                    la sua cupola. Questa non fu mai costruita a causa di problemi tecnici e lo spazio circolare che le 
                    era destinato rimase piatto. Padre Pozzo utilizzò tale spazio con la tecnica del <i>trompe-l'œil</i>
                    e vi dipinse <i>La Gloria di Sant'Ignazio</i>. Molto curiosa è la sensazione che si prova entrando in questa chiesa:
                    procedendo infatti verso l'altare e fissando il lucernario della cupola, ci si rende conto gradualmente che
                    la cupola in realtà non esiste.</p>
                    <img class="cap_cup" src="cupolaPiatta.jpg"><br><br>
                    &nbsp; &nbsp;<a href="https://it.wikipedia.org/wiki/Chiesa_di_Sant%27Ignazio_di_Loyola_in_Campo_Marzio">Scopri di più</a>
                   `).closePopup()

// Finestra murata piazza Mattei

var marker8 = L.marker([41.893806, 12.4775], { icon: icon }).addTo(map);

marker8.bindPopup(`<h6><a href="https://www.google.com/maps/dir//Piazza+Mattei,+17,+00186+Roma+RM/@42.5292147,12.1907776
                  ,8z/data=!4m8!4m7!1m0!1m5!1m1!1s0x132f604ead397891:0x5573aa11229a1d5!2m2!1d12.4775807!2d41.8939556">
                    
                    <i class='fas fa-route' style="font-size: 22px"></i></a> &ensp;
                    Finestra murata di Piazza Mattei</h6>

                    <p>La finestra murata del civico 17 di Piazza Mattei ha un'origine storica e al tempo stesso leggendaria.
                     Nella metà del 1500 il duca Mattei perdette al gioco una così indecente quantità di denaro da far desistere
                     il suocero a concedergli in moglie sua figlia. Il duca, per ristabilire il suo onore, fece costurire in 
                     una sola notte la fontana delle tartarughe, proprio di fronte al palazzo. All'alba fece affacciare dalla suddetta
                     finestra suocero e fidanzata che poterono ammirare la fontana appena costurita. Il suocero perdonò il duca
                    che fece murare la finestra per sugellare la fine della sua vita da scapestrato.</p>
                    <img class="cap" src="murata.jpg"><br><br>
                    
                   `).closePopup()