const products = [
{ id: 1, name: 'Headphones', category: 'electronics' },
{ id: 2, name: 'Smartphone', category: 'electronics' },
{ id: 3, name: 'T-Shirt', category: 'clothing' },
{ id: 4, name: 'Jeans', category: 'clothing' },
{ id: 5, name: 'Camera', category: 'electronics' },
{ id: 6, name: 'Water Bottle', category: 'home' },
{ id: 7, name: 'Novel Book', category: 'books' },
{ id: 8, name: 'Charger', category: 'electronics' },
{ id: 9, name: 'Sneakers', category: 'clothing' },
{ id:10, name: 'Speaker', category: 'electronics' },
{ id:11, name: 'Socks', category: 'clothing' },
{ id:12, name: 'Cookbook', category: 'books' }
];
const productList = document.getElementById('product-list');
const btnAll = document.getElementById('btn-all');
const btnElectronics = document.getElementById('btn-electronics');
const btnClothing = document.getElementById('btn-clothing');
const searchInput = document.getElementById('search');
const countEl = document.getElementById('count');


// State variables to keep track of current filters
let currentCategory = 'all';
let currentSearch = '';


// Function to show products on the page
function render(list) {
// Clear current list
productList.innerHTML = '';


if (list.length === 0) {
productList.innerHTML = '<div class="muted">No products found.</div>';
}

// Add each product as a simple div
list.forEach(p => {
const div = document.createElement('div');
div.className = 'product';
div.innerHTML = '<strong>' + escapeHtml(p.name) + '</strong>' +
'<div class="muted">Category: ' + escapeHtml(p.category) + '</div>';
productList.appendChild(div);
});


countEl.textContent = 'Showing ' + list.length + ' products';
}


// Simple function to escape HTML to avoid injection (basic)
function escapeHtml(text) {
return text
.replace(/&/g, '&amp;')
.replace(/</g, '&lt;')
.replace(/>/g, '&gt;')
.replace(/"/g, '&quot;')
.replace(/'/g, '&#39;');
}


// Function to apply category and search filters
function applyFilters() {
const term = currentSearch.trim().toLowerCase();


const filtered = products.filter(p => {
// category check
const catMatch = (currentCategory === 'all') || (p.category === currentCategory);
// search check (search in name and category)
const searchMatch = term === '' || p.name.toLowerCase().includes(term) || p.category.toLowerCase().includes(term);
return catMatch && searchMatch;
});


render(filtered);
}


// Event listeners for buttons
btnAll.addEventListener('click', () => {
currentCategory = 'all';
applyFilters();
});


btnElectronics.addEventListener('click', () => {
currentCategory = 'electronics';
applyFilters();
});


btnClothing.addEventListener('click', () => {
currentCategory = 'clothing';
applyFilters();
});


// Event listener for search (simple, no debounce needed for beginner)
searchInput.addEventListener('input', (e) => {
currentSearch = e.target.value;
applyFilters();
});


// Initial render: show all products
applyFilters();