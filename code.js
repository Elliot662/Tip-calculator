let bill = document.querySelector('input[name="bill"]')
let tipPercent = document.querySelector('input[name="tipPercent"]')
const btn = document.querySelector('button')
let totalTip
let totalBill

bill = parseInt(bill)
tipPercent = parseInt(tipPercent)

btn.onclick = () => {
    totalTip = tipPercent%bill
    document.getElementById("totalTip").innerHTML = totalTip
    totalBill = bill+totalTip
    document.getElementById("totalBill").innerHTML = totalBill
}

