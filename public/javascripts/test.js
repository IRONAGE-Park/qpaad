const minPay = 8350;
const minPayUnit = minPay / 12;

document.getElementById('calculate').addEventListener('click', function(e) {
    let hour = parseFloat(document.getElementById('hour').value) * 60;
    let minute = hour + parseFloat(document.getElementById('minute').value);
    alert(minute / 5 * minPayUnit);
});