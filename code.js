let bill = document.querySelector('input[name="bill"]')
let tipPercent = document.querySelector('input[name="tipPercent"]')
const btn = document.querySelector('button')
let totalTip
let totalBill


btn.onclick = () => { 
    totalTip = tipPercent.value%bill.value
    document.getElementById("totalTip").innerHTML = totalTip

    totalBill = parseInt(bill.value)+parseInt(totalTip)
    document.getElementById("totalBill").innerHTML = totalBill
}

