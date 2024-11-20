// Initialize total price
let totalPrice = 0;

// Function to add product to the billing table
function addProduct() {
    const customerPhone=document.getElementById('contact-number').value;
    const customerName = document.getElementById('customer-name').value;
    const productName = document.getElementById('product-name').value;
    const productPrice = parseFloat(document.getElementById('product-price').value);
    const productQuantity = parseInt(document.getElementById('product-quantity').value);

    if (productName === '' || isNaN(productPrice) || isNaN(productQuantity) || productQuantity <= 0 || productPrice <= 0) {
        alert('Please enter valid product details.');
        return;
    }

    const subtotal = productPrice * productQuantity;
    totalPrice += subtotal;

    const billingBody = document.getElementById('billing-body');
    const row = billingBody.insertRow();
    row.innerHTML = `

        <td>${productName}</td>
        <td>${productPrice.toFixed(2)}</td>
        <td>${productQuantity}</td>
        <td>${subtotal.toFixed(2)}</td>
    `;

    document.getElementById('total-price').textContent = totalPrice.toFixed(2);

    // Clear inputs after adding the product
    document.getElementById('contact-number').value = '';
    document.getElementById('customer-name').value = '';
    document.getElementById('product-name').value = '';
    document.getElementById('product-price').value = '';
    document.getElementById('product-quantity').value = '';
}

// Function to process payment
function processPayment() {
    if (totalPrice === 0) {
        alert('No products added to the bill.');
        return;
    }

    alert(`Total payment is ${totalPrice.toFixed(2)}. Payment processed successfully!`);
    resetBilling();
}

// Reset the billing table after payment
function resetBilling() {
    document.getElementById('billing-body').innerHTML = '';
    totalPrice = 0;
    document.getElementById('total-price').textContent = '0.00';
}
