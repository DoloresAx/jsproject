// Existing calculator code...
let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');

let string = "";
let arr = Array.from(buttons);
arr.forEach(button => {
    button.addEventListener('click', (e) =>{
        if(e.target.innerHTML == '='){
            string = eval(string);
            input.value = string;
        }

        else if(e.target.innerHTML == 'AC'){
            string = "";
            input.value = string;
        }
        else if(e.target.innerHTML == 'DEL'){
            string = string.substring(0, string.length-1);
            input.value = string;
        }
        else{
            string += e.target.innerHTML;
            input.value = string;
        }
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const qtySelectors = document.querySelectorAll(".qty");
    const grandTotalElement = document.getElementById("grand-total");

    function updateTotals() {
        let grandTotal = 0;

        // Iterate through each row in the table body
        document.querySelectorAll("tbody tr").forEach(row => {
            const qtyElement = row.querySelector(".qty");
            const unitPriceElement = row.querySelector(".unit-price");
            const totalElement = row.querySelector(".total");

            // Parse quantity and unit price
            const qty = parseInt(qtyElement.value) || 0;
            const unitPrice = parseFloat(unitPriceElement.textContent) || 0;

            // Calculate total for the row
            const total = qty * unitPrice;
            totalElement.textContent = total.toFixed(2);

            // Add to grand total
            grandTotal += total;
        });

        // Update the grand total in the footer
        grandTotalElement.textContent = grandTotal.toFixed(2);
    }

    // Add event listeners to all quantity dropdowns