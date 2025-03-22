// Function to calculate wind chill
function calculateWindChill(temperature, windSpeed) {
    // Formula to calculate wind chill in Celsius
    return 13.12 + 0.6215 * temperature - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temperature * Math.pow(windSpeed, 0.16);
}

// Function to update wind chill on the page
function updateWindChill() {
    const temperature = parseFloat(document.getElementById('temperature').textContent);
    const windSpeed = parseFloat(document.getElementById('windspeed').textContent);
    const windChillElement = document.getElementById('windchill');

    // Check if conditions meet to calculate wind chill
    if (temperature <= 10 && windSpeed > 4.8) {
        const windChill = calculateWindChill(temperature, windSpeed);
        windChillElement.textContent = `${windChill.toFixed(1)}°C`;
    } else {
        windChillElement.textContent = 'N/A';
    }
}

// Update current year and last modified date
function updateFooterDates() {
    const yearElement = document.getElementById('year');
    const lastModifiedElement = document.getElementById('lastModified');
    
    // Set current year
    yearElement.textContent = new Date().getFullYear();
    
    // Set last modified date
    lastModifiedElement.textContent = document.lastModified;
}

// Run functions when page loads
document.addEventListener('DOMContentLoaded', () => {
    updateWindChill();
    updateFooterDates();
});
