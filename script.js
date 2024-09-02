function LastUpdatesScroll(event) {
    event.preventDefault();
    const lastUpdatesElement = document.getElementById("last-updates-text");
    lastUpdatesElement.scrollIntoView({ behavior: "smooth" });
}