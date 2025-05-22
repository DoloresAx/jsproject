document.getElementById("convertButton").addEventListener("click", () => {
    const cmInput = document.getElementById("cmInput").value;
    const resultElement = document.getElementById("result");

    if (!cmInput || isNaN(cmInput) || cmInput <= 0) {
        resultElement.textContent = "Please enter a valid height in cm.";
        return;
    }

    const inches = (cmInput / 2.54).toFixed(2);
    resultElement.textContent = `${cmInput} cm is equal to ${inches} inches.`;
});