// Temple data array
const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  // Adding three more temple objects
  {
    templeName: "Santiago Chile",
    location: "Santiago, Chile",
    dedicated: "1983, September, 15",
    area: 20831,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/santiago-chile/800x500/santiago-chile-lds-temple-1085562-wallpaper.jpg"
  },
  {
    templeName: "Kyiv Ukraine",
    location: "Kyiv, Ukraine",
    dedicated: "2010, August, 29",
    area: 22184,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/kyiv-ukraine/800x500/kyiv-ukraine-lds-temple-1129616-wallpaper.jpg"
  },
  {
    templeName: "Nauvoo Illinois",
    location: "Nauvoo, Illinois, United States",
    dedicated: "2002, June, 27",
    area: 54000,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/nauvoo-illinois/800x500/nauvoo-temple-756527-wallpaper.jpg"
  }
];

// Get current year for footer copyright
document.getElementById('currentYear').textContent = new Date().getFullYear();

// Get last modified date
document.getElementById('lastModified').textContent = document.lastModified;

// Hamburger menu functionality
const hamburgerButton = document.getElementById('hamburger-button');
const closeButton = document.getElementById('close-button');
const primaryNav = document.getElementById('primary-nav');

// Function to toggle the menu
function toggleMenu() {
    if (primaryNav.classList.contains('open')) {
        primaryNav.classList.remove('open');
        closeButton.style.display = 'none';
        hamburgerButton.style.display = 'block';
    } else {
        primaryNav.classList.add('open');
        closeButton.style.display = 'block';
        hamburgerButton.style.display = 'none';
    }
}

// Event listeners for menu buttons
hamburgerButton.addEventListener('click', toggleMenu);
closeButton.addEventListener('click', toggleMenu);

// Function to create temple cards
function displayTemples(templeList) {
    const templeGrid = document.getElementById('temple-grid');
    
    // Clear existing temple cards
    templeGrid.innerHTML = '';
    
    // Create a temple card for each temple in the list
    templeList.forEach(temple => {
        // Create temple card elements
        const templeCard = document.createElement('article');
        templeCard.classList.add('temple-card');
        
        // Create temple image with lazy loading
        const img = document.createElement('img');
        img.src = temple.imageUrl;
        img.alt = temple.templeName;
        img.loading = 'lazy'; // Enable lazy loading
        
        // Create temple info container
        const infoDiv = document.createElement('div');
        infoDiv.classList.add('temple-info');
        
        // Create temple name
        const nameElement = document.createElement('h2');
        nameElement.classList.add('temple-name');
        nameElement.textContent = temple.templeName;
        
        // Create temple location
        const locationElement = document.createElement('p');
        locationElement.classList.add('temple-location');
        locationElement.textContent = `Location: ${temple.location}`;
        
        // Create temple dedicated date
        const dedicatedElement = document.createElement('p');
        dedicatedElement.classList.add('temple-dedicated');
        dedicatedElement.textContent = `Dedicated: ${temple.dedicated}`;
        
        // Create temple area
        const areaElement = document.createElement('p');
        areaElement.classList.add('temple-area');
        areaElement.textContent = `Area: ${temple.area.toLocaleString()} square feet`;
        
        // Append all elements to the temple card
        infoDiv.appendChild(nameElement);
        infoDiv.appendChild(locationElement);
        infoDiv.appendChild(dedicatedElement);
        infoDiv.appendChild(areaElement);
        
        templeCard.appendChild(img);
        templeCard.appendChild(infoDiv);
        
        // Add the temple card to the grid
        templeGrid.appendChild(templeCard);
    });
}

// Function to filter temples by criteria
function filterTemples(filterType) {
    let filteredTemples = [];
    
    switch(filterType) {
        case 'old':
            // Temples built before 1900
            filteredTemples = temples.filter(temple => {
                const dedicatedYear = parseInt(temple.dedicated.split(', ')[0]);
                return dedicatedYear < 1900;
            });
            break;
        case 'new':
            // Temples built after 2000
            filteredTemples = temples.filter(temple => {
                const dedicatedYear = parseInt(temple.dedicated.split(', ')[0]);
                return dedicatedYear > 2000;
            });
            break;
        case 'large':
            // Temples larger than 90,000 square feet
            filteredTemples = temples.filter(temple => temple.area > 90000);
            break;
        case 'small':
            // Temples smaller than 10,000 square feet
            filteredTemples = temples.filter(temple => temple.area < 10000);
            break;
        default:
            // Home - display all temples
            filteredTemples = temples;
    }
    
    // Update active class on navigation links
    document.querySelectorAll('nav a').forEach(link => {
        link.classList.remove('active');
    });
    
    if (filterType !== 'home') {
        document.getElementById(`${filterType}-filter`).classList.add('active');
    } else {
        document.getElementById('home-filter').classList.add('active');
    }
    
    // Display the filtered temples
    displayTemples(filteredTemples);
    
    // Save the current filter to localStorage
    localStorage.setItem('templeFilter', filterType);
}

// Add event listeners to filter links
document.getElementById('home-filter').addEventListener('click', function(e) {
    e.preventDefault();
    filterTemples('home');
});

document.getElementById('old-filter').addEventListener('click', function(e) {
    e.preventDefault();
    filterTemples('old');
});

document.getElementById('new-filter').addEventListener('click', function(e) {
    e.preventDefault();
    filterTemples('new');
});

document.getElementById('large-filter').addEventListener('click', function(e) {
    e.preventDefault();
    filterTemples('large');
});

document.getElementById('small-filter').addEventListener('click', function(e) {
    e.preventDefault();
    filterTemples('small');
});

// On page load, check if there's a saved filter in localStorage
document.addEventListener('DOMContentLoaded', function() {
    const savedFilter = localStorage.getItem('templeFilter') || 'home';
    filterTemples(savedFilter);
});
