// Laver en variabel med et array for mit slideshow med alle mine billeder i om-mig
const billeder = [
    "./assets/img/fhike.webp",
    "./assets/img/chike.webp",
    "./assets/img/dhike.webp",
    "./assets/img/ehike.webp",

]

// Skal starte med første billede i arrayet.
let nummer = 0;

// Laver en funktion for at kunne skifte mellem billederne, 
function skiftSlide(retning) {
    // ved nummeret skal der lægges til i retning (+=)
    nummer += retning;

    // På betignelse af to if statement
    //Den første if, nummer (index) skal være større end eller lig med antal(length) af billeder i arrayet, så så når slideshowet går over antal af billeder i arrayet, så gå tibage til index(0)
    if (nummer >= billeder.length) {
        nummer = 0;
    }

    //Den anden if, når nummer(index) er mindre end nul, så skal index i antallet af billeder i arrayet gå en tilbage, så man kan komme tilbage i slideshowet.
    if (nummer < 0) {
        nummer = billeder.length - 1;
    }

    // Mit array med indexet er lig med mit slide id fra mine billeder i html, kilde angivelse: https://www.w3schools.com/jsref/prop_source_src.asp: tilføjer .src for at finde frem til den rette placering for img.  
    document.getElementById("slide").src = billeder[nummer];
}



