const images = {
  motor: ["motor.jpg", "motor.jpg", "motor.jpg"],
  driver: ["driver.jpg", "driver.jpg", "driver.jpg"]
};

function showImages(type) {
  const container = document.getElementById("image-container");
  container.innerHTML = "";

  const tableBody = document.getElementById("price-body");
  tableBody.innerHTML = "";

  images[type].forEach((imgSrc, index) => {
    // Show image
    const img = document.createElement("img");
    img.src = imgSrc;
    container.appendChild(img);

    // Add row for price input
    const row = document.createElement("tr");

    row.innerHTML = `
      <td><img src="${imgSrc}" alt="${type} ${index + 1}" style="width: 50px; height: 50px;"></td>
      <td>${type} ${index + 1}</td>

      <td><input type="number" value="0" min="0" onchange="calculateTotal()"></td>
      <td><input type="number" value="0" min="0" onchange="calculateTotal()"></td>
      <td class="total-cell">0</td>
    `;

    tableBody.appendChild(row);
  });

  calculateTotal();
}

function calculateTotal() {
  const rows = document.querySelectorAll("#price-body tr");
  let grandTotal = 0;

  rows.forEach(row => {
    const qty = row.children[1].children[0].value;
    const unit = row.children[2].children[0].value;
    const total = qty * unit;
    row.children[3].innerText = total;
    grandTotal += total;
  });

  document.getElementById("grand-total").innerText = "Grand Total: " + grandTotal;
}
