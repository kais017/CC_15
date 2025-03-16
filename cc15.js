// Task 2: Adding Risk Items Dynamically


const riskDashboard = document.getElementById("riskDashboard");

// creating a function to add risk items
function addRiskItem(riskName, riskLevel, department) {
// make a risk card
    const riskCard = document.createElement('div');
    riskCard.classList.add('riskCard'); 



riskCard.innerHTML = `
        <h3>${riskName}</h3>
        <p>Risk Level: ${riskLevel}</p>
        <p>Department: ${department}</p>
    `;

riskDashboard.appendChild(riskCard);


document.getElementById('submitButton').addEventListener('click', () => {
    
    const riskName = document.getElementById('riskName').value;
    const riskLevel = document.getElementById('riskLevel').value;
    const department = document.getElementById('department').value;

});

}

// test cases
    addRiskItem("Data Breach", "High", "IT");
    addRiskItem("Supply Chain Disruption", "Medium", "Operations");
