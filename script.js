// Sayıların anlamları sözlüğü
const lifePathMeanings = {
    1: "The Leader: Independent, ambitious, and innovative.",
    2: "The Diplomat: Cooperative, sensitive, and balanced.",
    3: "The Communicator: Creative, expressive, and optimistic.",
    4: "The Builder: Hardworking, organized, and practical.",
    5: "The Visionary: Adventurous, adaptable, and freedom-loving.",
    6: "The Nurturer: Responsible, loving, and community-oriented.",
    7: "The Seeker: Analytical, spiritual, and introspective.",
    8: "The Powerhouse: Ambitious, business-minded, and authoritative.",
    9: "The Humanitarian: Compassionate, generous, and idealistic.",
    11: "The Master Intuitive: Inspiring, highly intuitive, and visionary.",
    22: "The Master Builder: Powerful manifestation and large-scale impact.",
    33: "The Master Teacher: Compassionate guide, healing, and selflessness."
};

// Tek bir sayıyı veya parçayı indirgeyen yardımcı fonksiyon (Master sayıları korur)
function reduceToSingleOrMaster(num) {
    while (num > 9 && ![11, 22, 33].includes(num)) {
        num = num.toString().split('').map(Number).reduce((a, b) => a + b, 0);
    }
    return num;
}

function calculateLifePath(dateString) {
    // dateString formatı: "YYYY-MM-DD" (Örn: 2006-08-28)
    const parts = dateString.split('-');
    const yearStr = parts[0];
    const monthStr = parts[1];
    const dayStr = parts[2];

    // 1. Yılı indirge
    const yearSum = yearStr.split('').map(Number).reduce((a, b) => a + b, 0);
    const reducedYear = reduceToSingleOrMaster(yearSum);

    // 2. Ayı indirge (Ay zaten 1-12 arasıdır ama kural gereği işleme girer)
    const monthSum = monthStr.split('').map(Number).reduce((a, b) => a + b, 0);
    const reducedMonth = reduceToSingleOrMaster(monthSum);

    // 3. Günü indirge
    const daySum = dayStr.split('').map(Number).reduce((a, b) => a + b, 0);
    const reducedDay = reduceToSingleOrMaster(daySum);

    // 4. Üçünü topla ve son kez indirge
    const total = reducedYear + reducedMonth + reducedDay;
    return reduceToSingleOrMaster(total);
}

function runCalculation() {
    const dob = document.getElementById('dob').value;
    if (!dob) return alert("Please select a date!");
    
    const number = calculateLifePath(dob);
    const meaning = lifePathMeanings[number] || "A unique life path journey.";
    
    document.getElementById('result').innerHTML = `
        <h3>Your Life Path Number: ${number}</h3>
        <p style="margin-top: 10px; font-size: 14px; color: #555;">${meaning}</p>
    `;
}