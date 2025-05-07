document.addEventListener("DOMContentLoaded", () => {
    const cart = [];
    const cartBtn = document.getElementById("cart-btn");
    const cartModal = document.getElementById("cart-modal");
    const cartItemsContainer = document.getElementById("cart-items");
    const totalElem = document.getElementById("total");
    const checkoutBtn = document.getElementById("checkout-btn");
    const closeCartBtn = document.getElementById("close-cart");
    
    // Add food items to cart
    const foodItems = document.querySelectorAll(".food-item");
    
    foodItems.forEach(item => {
        const addToCartBtn = item.querySelector(".add-to-cart");
        const price = parseFloat(item.querySelector(".price").textContent.replace('$', ''));
        const name = item.querySelector("h3").textContent;

        addToCartBtn.addEventListener("click", () => {
            cart.push({ name, price, quantity: 1 });
            updateCart();
        });
    });

    // Update cart
    function updateCart() {
        // Update cart button display
        cartBtn.textContent = `Cart (${cart.length})`;

        // Update cart modal
        cartItemsContainer.innerHTML = '';
        let total = 0;
        
        cart.forEach((item, index) => {
            const itemElem = document.createElement("div");
            itemElem.innerHTML = `${item.name} x${item.quantity} - $${(item.price * item.quantity).toFixed(2)}`;
            cartItemsContainer.appendChild(itemElem);
            total += item.price * item.quantity;
        });

        totalElem.textContent = `Total: $${total.toFixed(2)}`;
    }

    // Open/close cart modal
    cartBtn.addEventListener("click", () => {
        cartModal.classList.toggle("hidden");
    });

    closeCartBtn.addEventListener("click", () => {
        cartModal.classList.add("hidden");
    });

    // Checkout button
    checkoutBtn.addEventListener("click", () => {
        alert("Proceeding to checkout...");
        // Reset cart after checkout
        cart.length = 0;
        updateCart();
        cartModal.classList.add("hidden");
    });
});
