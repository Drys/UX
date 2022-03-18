function openMenu() {
    var x = document.getElementById("mobileLinks");
    if (x.style.display === "flex") {
        x.style.display = "none";
    } else {
        x.style.display = "flex";
    }
}

function filterOutdoor() {
    hideFilters()
}

function filterEvents() {
    hideFilters()
}

function filterIndoor() {
    hideFilters()
}

function filterBarsel() {
    hideFilters()
}

function hideFilters() {
    let loungeBanner = document.getElementById("lounge-banner");
    let udvalgteSection = document.getElementById("udvalgte-section");
    let outdoorSection = document.getElementById("outdoor-section");
    let eventsSection = document.getElementById("begivenheder-section");
    let indoorSection = document.getElementById("indoor-section");
    let barselSection = document.getElementById("barsel-section");

    loungeBanner.style.display = "none";
    udvalgteSection.style.display = "none";
    outdoorSection.style.display = "none";
    eventsSection.style.display = "none";
    indoorSection.style.display = "none";
    barselSection.style.display = "none";
}