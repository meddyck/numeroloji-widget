function calculateLifePath(dateString) {
    const digits = dateString.replace(/\D/g, '').split('').map(Number);
    let sum = digits.reduce((a, b) => a + b, 0);

    // Ana sayıları (11, 22, 33) koruyarak tek haneye indirme
    while (sum > 9 && ![11, 22, 33].includes(sum)) {
        sum = sum.toString().split('').map(Number).reduce((a, b) => a + b, 0);
    }
    return sum;
}

function runCalculation() {
    const dob = document.getElementById('dob').value;
    if (!dob) return alert("Please select a date!");
    
    const number = calculateLifePath(dob);
    document.getElementById('result').innerHTML = `<h3>Your Life Path Number: ${number}</h3>`;
}