function show() {
    document.getElementById("table1").style.display = "none"
    document.getElementById("table2").style.display = "none"
    document.getElementById("table3").style.display = "none"

    if (document.getElementById("single").checked === true) {
        document.getElementById("table1").style.display = "block"
        document.getElementById("total").textContent = "$10.00 USD"
    }

    if (document.getElementById("second").checked === true) {
        document.getElementById("table2").style.display = "block"
        document.getElementById("total").textContent = "$18.00 USD"
    }

    if (document.getElementById("third").checked === true) {
        document.getElementById("table3").style.display = "block"
        document.getElementById("total").textContent = "$24.00 USD"
    }
}