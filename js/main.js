document.addEventListener('DOMContentLoaded', () => {
    // Initialize any global variables or setup here
});

// Example function to fetch and display data
function fetchData() {
    // Fetch data from localStorage or server
    // Update the DOM with the fetched data
}

// Example function to handle form submission
document.getElementById('itemForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const item = {
        title: formData.get('title'),
        description: formData.get('description'),
        photo: formData.get('photo'),
        price: formData.get('price'),
        condition: formData.get('condition'),
        category: formData.get('category'),
        course: formData.get('course'),
        year: formData.get('year'),
        trade: formData.get('trade')
    };

    // Save item to localStorage or send to server
    saveItem(item);
    e.target.reset();
});

// Example function to save item to localStorage
function saveItem(item) {
    let items = JSON.parse(localStorage.getItem('items')) || [];
    items.push(item);
    localStorage.setItem('items', JSON.stringify(items));
    // Update the DOM with the new item
}
