const cartContainer = document.getElementById('cart-container');

// Function to render cart items
function renderCartItems() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];

    cartContainer.innerHTML = ''; // Clear previous content
    cart.forEach(user => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <h3>${user.name}</h3>
            <p>${user.email}</p>
            <button class="delete" onclick="deleteFromCart(${user.id})">Delete</button>
        `;
        cartContainer.appendChild(card);
    });
}

// Function to delete user from cart
function deleteFromCart(id) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart = cart.filter(user => user.id !== id);
    localStorage.setItem('cart', JSON.stringify(cart));
    renderCartItems();
}

renderCartItems();