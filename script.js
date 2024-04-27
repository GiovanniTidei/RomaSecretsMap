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

addMarker(41.8902, 12.4922, "<b>Il Colosseo</b><br>Il Colosseo, conosciuto anche come Anfiteatro Flavio, è un anfiteatro di epoca romana situato nel centro della città di Roma. È il più grande anfiteatro mai costruito e è considerato uno dei più grandi esempi dell'architettura e dell'ingegneria romana. Ha una lunghezza di 189 metri, una larghezza di 156 metri e un'altezza di 48 metri.", "https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Colosseo_2020.jpg/1599px-Colosseo_2020.jpg", 200, 133);

function addCustomMarker(lat, lng, popupText, imageUrl, imageWidth, imageHeight) {
    addMarker(lat, lng, popupText, imageUrl, imageWidth, imageHeight);
}
// NUOVI MARKERS

addCustomMarker(41.884669, 12.521789,
    "La Chiesa dei Santi Fabiano e Venanzio è un edificio religioso di Roma, situato nel quartiere Tuscolano. Fu costruita nel 1936 dall'architetto Clemente Busiri Vici, ed eretta a parrocchia da Pio undicesimo il 10 agosto 1933. Nei locali della chiesa vi sono opere della distrutta chiesa dei Santi Venanzio e Ansovino.", "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Eglise_Santi_Fabiano_e_Venanzio.JPG/2560px-Eglise_Santi_Fabiano_e_Venanzio.JPG", 200, 133);

addCustomMarker(41.885905, 12.506156,
    "La Basilica di San Giovanni in Laterano, è la più antica e prestigiosa delle quattro basiliche papali di Roma, ed è stata la residenza ufficiale del Papa fino al quattordicesimo secolo. Costruita nel quarto secolo da Costantino, presenta una facciata barocca realizzata da Alessandro Galilei nel diciottesimo secolo. L'interno ospita importanti opere d'arte, tra cui il trono papale, e il baldacchino di Gian Lorenzo Bernini.",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/San_Giovanni_in_Laterano_2021.jpg/520px-San_Giovanni_in_Laterano_2021.jpg",
    200, 133);

function speakText(text) {
    window.speechSynthesis.cancel();
    var utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = 0.8; // Riduce la velocità del 20%
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
                    html: '<i class="fas fa-map-marker-alt awesome" style="color: blue;"></i>',
                    iconSize: [30, 30],
                    iconAnchor: [15, 30]
                });
                userMarker = L.marker(latlng, { icon: blueIcon }).addTo(map);
            } else {
                userMarker.setLatLng(latlng);
            }
            userMarker.bindPopup('Ti trovi qui').openPopup();
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