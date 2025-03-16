// Task 2: Adding Risk Items Dynamically

// creating a function to add risk items
function addRiskItem(riskName, riskLevel, department) {
// make a risk card
    const riskCard = document.createElement('div');
    riskCard.classList.add('riskCard'); 



riskCard.innerHTML = `
        <h3>${riskName}</h3>
        <p>Risk Level: ${riskLevel}</p>
        <p>Department: ${department}</p>
        <button class="resolve-btn">Resolve</button>
    `;


}

// test cases
    addRiskItem("Data Breach", "High", "IT");
    addRiskItem("Supply Chain Disruption", "Medium", "Operations");
