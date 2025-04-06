// Product array as provided in the instructions
const products = [
  {
    id: "fc-1888",
    name: "flux capacitor",
    averagerating: 4.5
  },
  {
    id: "fc-2050",
    name: "power laces",
    averagerating: 4.7
  },
  {
    id: "fs-1987",
    name: "time circuits",
    averagerating: 3.5
  },
  {
    id: "ac-2000",
    name: "low voltage reactor",
    averagerating: 3.9
  },
  {
    id: "jj-1969",
    name: "warp equalizer",
    averagerating: 5.0
  }
];

// Function to populate the product dropdown
function populateProductDropdown() {
  const productSelect = document.getElementById('product');
  
  // Loop through the products array and create an option for each product
  products.forEach(product => {
    const option = document.createElement('option');
    option.value = product.id;
    option.textContent = product.name.charAt(0).toUpperCase() + product.name.slice(1); // Capitalize first letter
    productSelect.appendChild(option);
  });
}

// Function to set the current year in the footer
function setCurrentYear() {
  const yearElement = document.getElementById('year');
  const currentYear = new Date().getFullYear();
  yearElement.textContent = currentYear;
}

// Function to set the last modified date in the footer
function setLastModified() {
  const lastModifiedElement = document.getElementById('lastModified');
  const lastModified = document.lastModified;
  lastModifiedElement.textContent = lastModified;
}

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
  populateProductDropdown();
  setCurrentYear();
  setLastModified();
});
