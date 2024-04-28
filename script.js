var map = L.map('map').setView([41.884669, 12.521789], 17); // Nuove coordinate per la Chiesa dei Santi Fabiano e Venanzio

var userMarker;
var newMarkers = [];



L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

function addMarker(lat, lng, popupText, imageUrl, imageWidth, imageHeight) {
    var markerIcon = L.divIcon({
        className: 'awesome',
        html: '<i class="far fa-eye awesome"></i>',
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
}

addMarker(41.8902, 12.4922, "<b>Il Colosseo</b><br>,conosciuto anche come Anfiteatro Flavio, è il più grande anfiteatro di epoca romana. L'anfiteatro fu edificato in epoca flavia su un'area al limite orientale del Foro Romano. La sua costruzione, iniziata da Vespasiano nel 70 dopo Cristo, fu conclusa da Tito, che lo inaugurò il 21 aprile nell'80 dopo Cristo. Situato nel centro della città di Roma, vicino al foro romano, è il più grande anfiteatro mai costruito. Ha una lunghezza di 189 metri, una larghezza di 156 metri e un'altezza di 48 metri. ", "https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Colosseo_2020.jpg/1599px-Colosseo_2020.jpg", 200, 133);

function addCustomMarker(lat, lng, popupText, imageUrl, imageWidth, imageHeight) {
    addMarker(lat, lng, popupText, imageUrl, imageWidth, imageHeight);
}



// NUOVI MARKERS

addCustomMarker(41.884669, 12.521789,
    "La Chiesa dei Santi Fabiano e Venanzio è un edificio religioso di Roma, situato nel quartiere Tuscolano. Fu costruita nel 1936 dall'architetto Clemente Busiri Vici, ed eretta a parrocchia da Pio undicesimo il 10 agosto 1933. Nei locali della chiesa vi sono opere della distrutta chiesa dei Santi Venanzio e Ansovino.", "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Eglise_Santi_Fabiano_e_Venanzio.JPG/2560px-Eglise_Santi_Fabiano_e_Venanzio.JPG", 200, 133);
// san giovanni
addCustomMarker(41.885905, 12.506156,
    "La Basilica di San Giovanni in Laterano, è la più antica e prestigiosa delle quattro basiliche papali di Roma, ed è stata la residenza ufficiale del Papa fino al quattordicesimo secolo. Costruita nel quarto secolo da Costantino, presenta una facciata barocca realizzata da Alessandro Galilei nel diciottesimo secolo. L'interno ospita importanti opere d'arte, tra cui il trono papale, e il baldacchino di Gian Lorenzo Bernini.",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/San_Giovanni_in_Laterano_2021.jpg/520px-San_Giovanni_in_Laterano_2021.jpg",
    200, 133);

// Pantheon
addCustomMarker(41.898609, 12.476873,
    "Il Pantheon è uno dei monumenti più iconici di Roma. Costruito originariamente nel 27 avanti Cristo, da Agrippa, come tempio dedicato a tutti gli dei dell'Olimpo. è stato successivamente ricostruito dall'imperatore Adriano, nel 125 dopo Cristo.  È famoso per la sua cupola emisferica, che è stata un'impresa architettonica straordinaria per l'epoca, e rimane la più grande del mondo, non supportata da alcun sostegno interno. All'interno, il Pantheon ospita sepolture di personaggi illustri, tra cui il pittore Raffaello Sanzio e il re Vittorio Emanuele II. L'atmosfera solenne all'interno è arricchita dalle opere d'arte e dalle decorazioni, mentre la luce naturale che filtra attraverso l'apertura nella cupola, chiamata oculo, aggiunge un tocco mistico all'ambiente.",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Pantheon_%28Rome%29_-_Right_side_and_front.jpg/520px-Pantheon_%28Rome%29_-_Right_side_and_front.jpg",
    200, 133);
// Vittoriano
addCustomMarker(41.8946, 12.4831,
    "L'Altare della Patria, o Monumento Nazionale a Vittorio Emanuele II, è un'iconica struttura neoclassica situata a Roma. Costruito tra il 1885 e il 1911 per onorare il primo re d'Italia, Vittorio Emanuele II, è stato progettato dagli architetti Giuseppe Sacconi e Manfredo Manfredi. Lo stile architettonico è fortemente influenzato dal neoclassicismo, con colonne corinzie, statue e rilievi che celebrano l'unità italiana. Il monumento ha un'ampia valenza simbolica, rappresentando un tempio laico dedicato metaforicamente all'Italia libera e unita, e celebrando il sacrificio per la patria e i suoi ideali, in virtù della tumulazione del Milite ignoto all'interno del monumento.",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Altare_della_Patria_%28Roma%29.jpg/520px-Altare_della_Patria_%28Roma%29.jpg",
    200, 133);

//Piramide Cestia

addCustomMarker(41.876389, 12.480833,
    "La Piramide Cèstia  (o Piramide di Gaio Cestio) è una tomba romana, a forma di piramide. Costruita intorno al 12 avanti Cristo, fu commissionata da Gaio Cestio Epulone, un funzionario romano, come suo sepolcro. La piramide è un esempio unico di architettura egizia, all'interno di Roma antica, riflettendo l'influenza dell'Egitto sul mondo romano, in quel periodo. Costruita in travertino e marmo, la sua forma piramidale rappresentava l'esotismo e il prestigio dell'antica civiltà egizia, mentre la sua costruzione rifletteva la moda funeraria romana dell'epoca. La Piramide Cèstia rimane oggi come un'iconica testimonianza dell'interconnessione culturale nell'antichità romana. La piramide è inglobata nel perimetro del posteriore cimitero acattolico, costruito tra il diciottesimo e il diciannovesimo secolo.",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Piramide_Cestia.jpg/520px-Piramide_Cestia.jpg",
    200, 133);


// FINE NUOVI MARKERS

// Funzione per cambiare la lingua quando una bandiera viene cliccata

async function translatePopupsToEnglish() {
    const popups = document.querySelectorAll('.leaflet-popup-content');
    const translations = [];
    for (let i = 0; i < popups.length; i++) {
        const originalText = popups[i].innerText;
        const res = await fetch("https://libretranslate.com/translate", {
            method: "POST",
            body: JSON.stringify({
                q: originalText,
                source: "it",
                target: "en"
            }),
            headers: { "Content-Type": "application/json" }
        });
        const translatedData = await res.json();
        const translatedText = translatedData.translatedText;
        translations.push(translatedText);
    }
    return translations;
}

async function updatePopupsToEnglish() {
    const translatedTexts = await translatePopupsToEnglish();
    const popups = document.querySelectorAll('.leaflet-popup-content');
    popups.forEach(function(popup, index) {
        popup.innerText = translatedTexts[index];
    });
}

document.getElementById('uk-flag').addEventListener('click', updatePopupsToEnglish);


// Funzione per audiodescrizione

function speakText(text) {
    window.speechSynthesis.cancel();
    var utterance = new SpeechSynthesisUtterance(text);
    ////utterance.rate = 0.8;  /// per Riduce la velocità del 20%
    window.speechSynthesis.speak(utterance);
}

function stopSpeak() {
    window.speechSynthesis.cancel();
}

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
        stopSpeak(); // Stop l'audio quando il pop-up viene chiuso
    } else if (targetId === "yes") {
        stopSpeak(); // Stop l'audio quando viene creato un nuovo marker
    }
});

function updateLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            var latlng = [position.coords.latitude, position.coords.longitude];
            if (!userMarker) {
                var blueIcon = L.divIcon({
                    className: 'awesome',
                    html: '<i class="fa fa-map-pin" aria-hidden="true" style="color: blue; font-size: 3.5em;" ></i>',
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


window.onload = function() {
    updateLocation();
};

map.on('click', function(e) {
    if (!e.popup) {
        var newMarker = L.marker(e.latlng).addTo(map);
        var popupContent = "<div>Vuoi segnalare un nuovo punto d'interesse?</div>";
        popupContent += '<button id="yes">Si</button>';
        popupContent += '<button id="no">No</button>';
        newMarker.bindPopup(popupContent).openPopup();

        document.getElementById("yes").addEventListener("click", function() {
            var mailtoLink = "mailto:gmt91@protonmail.com?subject=Nuovo punto d'interesse&body=Coordinate: " + e.latlng.lat.toFixed(6) + ", " + e.latlng.lng.toFixed(6);
            window.location.href = mailtoLink;
        });

        document.getElementById("no").addEventListener("click", function() {
            map.removeLayer(newMarker);
        });

        newMarkers.push(newMarker);
        stopSpeak(); // Stop l'audio se presente
    }
});

setInterval(function() {
    newMarkers.forEach(function(marker) {
        map.removeLayer(marker);
    });
    newMarkers = [];
}, 5000);

document.getElementById('updateLocationBtn').addEventListener('click', function() {
    updateLocation();
    stopSpeak(); // Stop l'audio se presente
});