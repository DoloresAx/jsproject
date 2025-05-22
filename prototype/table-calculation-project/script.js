// This file contains the JavaScript code that handles the quantity selection and total calculation.

document.addEventListener('DOMContentLoaded', function() {
    const quantityInputs = document.querySelectorAll('input[type="number"]');
    const totalCells = document.querySelectorAll('.total');

    quantityInputs.forEach(input => {
        input.addEventListener('input', function() {
            const row = input.closest('tr');
            const qty = parseFloat(input.value) || 0;
            const unitPrice = parseFloat(row.querySelector('.unit-price').textContent) || 0;
            const total = qty * unitPrice;

            row.querySelector('.total').textContent = total.toFixed(2);
            updateGrandTotal();
        });
    });

    function updateGrandTotal() {
        let grandTotal = 0;
        totalCells.forEach(cell => {
            grandTotal += parseFloat(cell.textContent) || 0;
        });
        document.getElementById('grand-total').textContent = grandTotal.toFixed(2);
    }
});