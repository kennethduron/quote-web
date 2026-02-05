const priceInput = document.querySelector(".price");

function calc() {
    let price = Number(priceInput.value);
    let tax = price * 0.06625;
    let total = price + tax;
    let balance = total - 300;

    document.getElementById("subtotal").innerText = "$" + price.toFixed(2);
    document.getElementById("tax").innerText = "$" + tax.toFixed(2);
    document.getElementById("total").innerText = "$" + total.toFixed(2);
    document.getElementById("balance").innerText = "$" + balance.toFixed(2);
    document.querySelector(".rowTotal").innerText = "$" + price.toFixed(2);
}

priceInput.addEventListener("input", calc);
calc();
