document.addEventListener("DOMContentLoaded", function () {
    const rows = document.querySelectorAll("tbody tr");
    const grandTotalCell = document.getElementById("grandTotal");

    function updateAllTotals() {
        let grandTotal = 0;

        rows.forEach(row => {
            const qtyInput = row.querySelector("input[type='number']");
            const unitPrice = parseFloat(row.children[3].textContent);
            const totalPriceCell = row.children[4];

            const qty = parseFloat(qtyInput.value);
            const total = qty * unitPrice;

            if (!isNaN(total)) {
                totalPriceCell.textContent = total.toFixed(2);
                grandTotal += total;
            } else {
                totalPriceCell.textContent = "0.00";
            }
        });

        grandTotalCell.textContent = grandTotal.toFixed(2);
    }

    // Attach event listeners
    rows.forEach(row => {
        const qtyInput = row.querySelector("input[type='number']");
        qtyInput.addEventListener("input", updateAllTotals);
    });

    // Initial calculation
    updateAllTotals();
});
 function showImages(selectElement) {
      const imagesDiv = document.getElementById('imagesB') || document.getElementById('imagesA');
      if (selectElement.value === 'A') {
        imagesDiv.style.display = 'block';
      } else if ( selectElement.value === 'B') {
        imagesDiv.style.display = 'block';
      } else {
        imagesDiv.style.display = 'none';
      }
    }