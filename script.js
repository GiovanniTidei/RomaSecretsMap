// Inizializzazione della mappa con la vista centrata sulla Chiesa dei Santi Fabiano e Venanzio
var map = L.map('map').setView([41.884669, 12.521789], 17);


// Variabili globali
var userMarker;
var newMarkers = [];
var popupTimeout;
var lastMarkerTime = 0;
// Variabili globali per lingua e voce predefinite
var defaultLanguage = 'it-IT'; // Italiano come lingua predefinita
var defaultVoice = getVoiceForLanguage(defaultLanguage); // Voce corrispondente alla lingua predefinita


// Aggiunta del layer della mappa OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

// Funzione per aggiungere un marker personalizzato
function addCustomMarker(lat, lng, popupText, imageUrl, imageWidth, imageHeight, category) {
    var icon;
    switch (category) {
        case 'monumenti':
            icon = '<i class="fa fa-solid fa-monument"></i>';
            break;
        case 'palazzi':
            icon = '<i class="fa fa-solid fa-building"></i>';
            break;
        case 'chiese':
            icon = '<i class="fa fa-solid fa-church"></i>';
            break;
        case 'segreti':
            icon = '<i class="fa fa-solid fa-question"></i>';
            break;
        default:
            icon = '<i class="fa fa-eye awesome"></i>'; // Icona predefinita nel caso in cui la categoria non sia valida
            break;
    }

    var markerIcon = L.divIcon({
        className: 'awesome',
        html: icon,
        iconSize: [30, 30],
        iconAnchor: [15, 15]
    });

    var marker = L.marker([lat, lng], { icon: markerIcon }).addTo(map);
    if (popupText || imageUrl) {
        var popupContent = '<div>';
        if (imageUrl) {
            popupContent += '<img src="' + imageUrl + '" width="' + imageWidth + '" height="' + imageHeight + '"/><br>';
        }
        if (popupText) {
            popupContent += '<div id="popupText" style="display: none;">' + popupText + '</div>';
            popupContent += '<button id="read">Leggi</button>';
            popupContent += '<button id="speak">Ascolta</button>';
        }
        popupContent += '</div>';
        marker.bindPopup(popupContent);
    }

    marker.on('click', function() {
        map.setView([lat, lng], 18);
    });

    return marker;
}

// Aggiunta di un marker 
// Monumenti
addCustomMarker(41.8946, 12.4831,
    "L'Altare della Patria, o Monumento Nazionale a Vittorio Emanuele II, è un'iconica struttura neoclassica situata a Roma. Costruito tra il 1885 e il 1911 per onorare il primo re d'Italia, Vittorio Emanuele II, è stato progettato dagli architetti Giuseppe Sacconi e Manfredo Manfredi. Lo stile architettonico è fortemente influenzato dal neoclassicismo, con colonne corinzie, statue e rilievi che celebrano l'unità italiana. Il monumento ha un'ampia valenza simbolica, rappresentando un tempio laico dedicato metaforicamente all'Italia libera e unita, e celebrando il sacrificio per la patria e i suoi ideali, in virtù della tumulazione del Milite ignoto all'interno del monumento.",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Altare_della_Patria_%28Roma%29.jpg/520px-Altare_della_Patria_%28Roma%29.jpg",
    200, 133, 'monumenti');

// Chiese
addCustomMarker(41.885905, 12.506156,
    "La Basilica di San Giovanni in Laterano, è la più antica e prestigiosa delle quattro basiliche papali di Roma, ed è stata la residenza ufficiale del Papa fino al quattordicesimo secolo. Costruita nel quarto secolo da Costantino, presenta una facciata barocca realizzata da Alessandro Galilei nel diciottesimo secolo. L'interno ospita importanti opere d'arte, tra cui il trono papale, e il baldacchino di Gian Lorenzo Bernini.",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/San_Giovanni_in_Laterano_2021.jpg/520px-San_Giovanni_in_Laterano_2021.jpg",
    200, 133, 'chiese');

// Segreti
addCustomMarker(41.876389, 12.480833,
    "La Piramide Cestia  (o Piramide di Gaio Cestio) è una tomba romana, a forma di piramide. Costruita intorno al 12 avanti Cristo, fu commissionata da Gaio Cestio Epulone, un funzionario romano. La piramide è un esempio unico di architettura egizia all'interno della Roma antica, riflette l'influenza dell'Egitto sul mondo romano in quel periodo. Costruita in travertino e marmo, la sua forma piramidale rappresentava l'esotismo e il prestigio dell'antica civiltà egizia, mentre la sua costruzione rifletteva la moda funeraria romana dell'epoca. La Piramide Cèstia rimane oggi come un'iconica testimonianza dell'interconnessione culturale nell'antichità romana. La piramide è inglobata nel perimetro del posteriore cimitero acattolico, costruito tra il diciottesimo e il diciannovesimo secolo.",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Piramide_Cestia.jpg/520px-Piramide_Cestia.jpg",
    200, 133, 'segreti');

// Palazzi
addCustomMarker(41.9038, 12.4921,
    "Il Palazzo Barberini è uno dei più importanti palazzi barocchi di Roma. Costruito nel 1625, ospita la Galleria Nazionale d'Arte Antica. Progettato da diversi architetti, tra cui Carlo Maderno e Francesco Borromini, il palazzo è celebre per la sua facciata e per la sala barocca con il soffitto affrescato da Pietro da Cortona. La collezione d'arte ospitata all'interno include opere di artisti come Raffaello, Tiziano, Caravaggio e molti altri.",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Le_Palais_Barberini_%28Rome%29_%285969782827%29.jpg/520px-Le_Palais_Barberini_%28Rome%29_%285969782827%29.jpg",
    200, 133, 'palazzi');

// Funzione per selezionare la lingua e aggiornare il testo del pulsante
function selectLanguageFromFlag(flagId) {
    var language;
    switch (flagId) {
        case 'italian-flag':
            language = 'it-IT'; // Italiano
            break;
        case 'uk-flag':
            language = 'en-US'; // Inglese (Stati Uniti)
            break;
        case 'france-flag':
            language = 'fr-FR'; // Francese
            break;
        case 'spain-flag':
            language = 'es-ES'; // Spagnolo
            break;
        case 'germany-flag':
            language = 'de-DE'; // Tedesco
            break;
        default:
            language = 'it-IT'; // Lingua predefinita (italiano)
            break;
    }
    selectLanguage(language); // Aggiorna la lingua dell'autodescrizione
    document.getElementById('dropdownMenuButton').textContent = getLanguageName(language);
}

// Funzione per ottenere il nome della lingua in base al codice della lingua
function getLanguageName(languageCode) {
    switch (languageCode) {
        case 'it-IT':
            return 'Italiano';
        case 'en-US':
            return 'English';
        case 'fr-FR':
            return 'Français';
        case 'es-ES':
            return 'Español';
        case 'de-DE':
            return 'Deutsch';
            // Aggiungi altri nomi delle lingue se necessario
        default:
            return 'Seleziona Lingua';
    }
}


// Funzione per selezionare la lingua e la voce
function selectLanguage(language) {
    var voice = getVoiceForLanguage(language);
    if (voice) {
        defaultLanguage = language;
        defaultVoice = voice;
    }
}

// Funzione per ottenere la voce corrispondente alla lingua
function getVoiceForLanguage(language) {
    var voices = window.speechSynthesis.getVoices();
    return voices.find(v => v.lang === language);
}

// Funzione per la sintesi vocale
function speakText(text) {
    window.speechSynthesis.cancel();
    var utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = defaultLanguage; // Imposta la lingua della voce
    utterance.voice = defaultVoice; // Imposta la voce
    window.speechSynthesis.speak(utterance);
}

// Funzione per interrompere la sintesi vocale
function stopSpeak() {
    window.speechSynthesis.cancel();
}


// Event listener per gestire l'interazione con i pop-up
document.addEventListener("click", function(event) {
    var targetId = event.target && event.target.id;
    if (targetId === "speak") {
        var popupText = event.target.parentElement.querySelector("#popupText").innerText;
        speakText(popupText);
        event.target.innerHTML = 'Stop';
        event.target.id = "stop";
    } else if (targetId === "stop") {
        stopSpeak();
        event.target.innerHTML = 'Ascolta';
        event.target.id = "speak";
    } else if (targetId === "read") {
        var textElement = event.target.parentElement.querySelector("#popupText");
        textElement.style.display = textElement.style.display === "block" ? "none" : "block";
        event.target.innerText = textElement.style.display === "block" ? "Nascondi" : "Leggi";
        event.target.id = textElement.style.display === "block" ? "hide" : "read";
    } else if (targetId === "hide") {
        var textElement = event.target.parentElement.querySelector("#popupText");
        textElement.style.display = "none";
        event.target.innerText = "Leggi";
        event.target.id = "read";
    } else if (event.target && event.target.classList.contains("leaflet-popup-close-button")) {
        stopSpeak(); // Interrompe la sintesi vocale quando il pop-up viene chiuso
        map.removeLayer(event.target._source); // Rimuove il marker quando viene premuta la "x"
    } else if (targetId === "yes" || targetId === "no") {
        stopSpeak(); // Interrompe la sintesi vocale quando viene creato un nuovo marker o viene premuto "No"
        map.removeLayer(event.target._source); // Rimuove il marker quando viene premuto "No"
        clearTimeout(popupTimeout); // Annulla il timeout per far sparire il marker automaticamente
    }
});

// Aggiunge un event listener per interrompere l'audiodescrizione quando viene chiuso il popup
map.on('popupclose', function(e) {
    // Interrompe la sintesi vocale
    stopSpeak();
});

// Funzione per aggiornare la posizione dell'utente
function updateLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            var latlng = [position.coords.latitude, position.coords.longitude];
            if (!userMarker) {
                var blueIcon = L.divIcon({
                    className: 'awesome',
                    html: '<i class="fa fa-circle" aria-hidden="true" style="color: #4285F4; font-size: 1.5em;" ></i>',
                    iconSize: [40, 30],
                    iconAnchor: [15, 30]
                });
                userMarker = L.marker(latlng, { icon: blueIcon }).addTo(map);
            } else {
                userMarker.setLatLng(latlng);
            }
            setTimeout(function() {
                userMarker.closePopup();
            }, 4000);
            map.setView(latlng, 18);
        });
    } else {
        alert("Geolocalizzazione non supportata dal tuo browser!");
    }
}

// Aggiorna la posizione dell'utente al caricamento della pagina
window.onload = function() {
    updateLocation();
};

// Aggiunge un marker alla posizione cliccata sulla mappa
map.on('click', function(e) {
    if (!e.popup) {
        addSingleMarker(e.latlng);
        stopSpeak(); // Interrompe la sintesi vocale se presente
    }
});

// Aggiunge un singolo marker sulla mappa
function addSingleMarker(latlng) {
    var currentTime = new Date().getTime();
    if (currentTime - lastMarkerTime < 3000) {
        // Non creare un nuovo marker se non è passato abbastanza tempo
        return;
    }

    // Rimuove tutti i marker esistenti
    newMarkers.forEach(function(marker) {
        map.removeLayer(marker);
    });
    newMarkers = [];

    // Aggiunge il nuovo marker
    var newMarker = L.marker(latlng).addTo(map);
    var popupContent = "<div>Vuoi segnalare un nuovo punto d'interesse?</div>";
    popupContent += '<button id="yes">Si</button>';
    popupContent += '<button id="no">No</button>';
    newMarker.bindPopup(popupContent).openPopup();

    // Event listener per la creazione di un nuovo marker
    document.getElementById("yes").addEventListener("click", function() {
        var mailtoLink = "mailto:gmt91@protonmail.com?subject=Nuovo punto d'interesse&body=Coordinate: " + latlng.lat.toFixed(6) + ", " + latlng.lng.toFixed(6);
        window.location.href = mailtoLink;
    });

    // Event listener per annullare la creazione di un nuovo marker
    document.getElementById("no").addEventListener("click", function() {
        map.removeLayer(newMarker);
    });

    newMarkers.push(newMarker);

    // Aggiorna il timestamp dell'ultimo marker creato
    lastMarkerTime = currentTime;

    // Chiude il popup e rimuove il marker dopo 4 secondi se non viene cliccato nulla
    popupTimeout = setTimeout(function() {
        map.removeLayer(newMarker);
    }, 3000);
}
// Aggiunge un event listener per rimuovere i nuovi marker associati al popup chiuso
map.on('popupclose', function(e) {
    var marker = e.popup._source;
    if (newMarkers.includes(marker)) {
        map.removeLayer(marker);
    }
});



// Event listener per aggiornare la posizione dell'utente
// document.getElementById('updateLocationBtn').addEventListener('click', function() {
//     updateLocation();
//     stopSpeak(); // Interrompe la sintesi vocale se presente
// });
// Chiamata alla funzione per abilitare la rotazione della mappa su dispositivi mobili
//enableMapRotationOnMobile(map);