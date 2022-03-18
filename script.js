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

}