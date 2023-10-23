function calculateTotal() {
    const subtotal = parseFloat(document.getElementById("subtotal").value);
    const tipPercentage = parseFloat(document.getElementById("tipPercentage").value);
    
    if (!isNaN(subtotal) && !isNaN(tipPercentage)) {
        const tipAmount = (subtotal * tipPercentage) / 100;
        const totalAmount = subtotal + tipAmount;
        document.getElementById("output").textContent = "Total Amount: $" + totalAmount.toFixed(2);
    } else {
        document.getElementById("output").textContent = "Please enter valid numbers.";
    }
}