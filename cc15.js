// Task 2: Adding Risk Items Dynamically


const riskDashboard = document.getElementById("riskDashboard");

// creating a function to add risk items
function addRiskItem(riskName, riskLevel, department) {
// make a risk card
    const riskCard = document.createElement('div');
    riskCard.classList.add('riskCard'); 

// task 4:
switch (riskLevel) {
    case 'Low':
        riskCard.style.backgroundColor = 'green';
        break;
    case 'Medium':
        riskCard.style.backgroundColor = 'yellow';
        break;
    case 'High':
        riskCard.style.backgroundColor = 'red';
        break;
}

riskCard.innerHTML = `
        <h3>${riskName}</h3>
        <p>Risk Level: ${riskLevel}</p>
        <p>Department: ${department}</p>
        <button class="resolveButton">Resolve</button>
    `;

riskDashboard.appendChild(riskCard);

//task 3:
const resolveButton = riskCard.querySelector('.resolveButton');
resolveButton.addEventListener('click', function() {
riskDashboard.removeChild(riskCard);

  });
}

// test cases
    addRiskItem("Data Breach", "High", "IT");
    addRiskItem("Supply Chain Disruption", "Medium", "Operations");


// Task 3: Removing Risk Items
// test case
addRiskItem("Market Fluctuations", "High", "Finance");

//Task 4: Categorizing Risks by Level
//test cases:
addRiskItem("Cybersecurity Threat", "High", "IT");
addRiskItem("HR Compliance Issue", "Low", "Human Resources");

