// Product array (same as in form.js)
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

// Function to get URL parameters
function getUrlParams() {
  const params = new URLSearchParams(window.location.search);
  return params;
}

// Function to find product name by ID
function getProductNameById(productId) {
  const product = products.find(p => p.id === productId);
  return product ? product.name.charAt(0).toUpperCase() + product.name.slice(1) : 'Unknown Product';
}

// Function to display review details
function displayReviewDetails() {
  const params = getUrlParams();
  const reviewSummary = document.getElementById('review-summary');
  
  // Get form data from URL parameters
  const productId = params.get('product');
  const rating = params.get('rating');
  const installationDate = params.get('installation-date');
  const features = params.getAll('features');
  const review = params.get('review');
  const username = params.get('username');
  
  // Create HTML for review summary
  let summaryHTML = '';
  
  if (productId) {
    const productName = getProductNameById(productId);
    summaryHTML += `<p><strong>Product:</strong> ${productName}</p>`;
  }
  
  if (rating) {
    summaryHTML += `<p><strong>Rating:</strong> ${rating} star${rating !== '1' ? 's' : ''}</p>`;
  }
  
  if (installationDate) {
    const formattedDate = new Date(installationDate).toLocaleDateString();
    summaryHTML += `<p><strong>Installation Date:</strong> ${formattedDate}</p>`;
  }
  
  if (features && features.length > 0) {
    summaryHTML += `<p><strong>Useful Features:</strong> ${features.join(', ')}</p>`;
  }
  
  if (review) {
    summaryHTML += `<p><strong>Review:</strong> "${review}"</p>`;
  }
  
  if (username) {
    summaryHTML += `<p><strong>Submitted by:</strong> ${username}</p>`;
  }
  
  reviewSummary.innerHTML = summaryHTML;
}

// Function to update the review counter
function updateReviewCounter() {
  // Get current count from localStorage or initialize to 0
  let reviewCount = localStorage.getItem('reviewCount');
  
  // If it doesn't exist yet, initialize it
  if (reviewCount === null) {
    reviewCount = 0;
  } else {
    reviewCount = parseInt(reviewCount);
  }
  
  // Increment the counter
  reviewCount++;
  
  // Save back to localStorage
  localStorage.setItem('reviewCount', reviewCount);
  
  // Update the display
  document.getElementById('review-count').textContent = reviewCount;
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
  displayReviewDetails();
  updateReviewCounter();
  setCurrentYear();
  setLastModified();
});
