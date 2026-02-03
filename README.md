<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Loan Calculator</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>

  <div class="container">
    <h1>Loan Calculator</h1>

    <label>Loan Amount</label><br>
    <input type="number" id="loanAmount" placeholder="Enter loan amount"><br><br>

    <label>Interest Rate (%)</label><br>
    <input type="number" id="interestRate" placeholder="Annual interest rate"><br><br>

    <label>Tenure (Months)</label><br>
    <input type="number" id="months" placeholder="Number of months"><br><br>

    <button onclick="calculateLoan()">Calculate</button>

    <div id="result"></div>
  </div>

  <script src="script.js"></script>
</body>
</html>
body {
  font-family: Arial, sans-serif;
  background-color: #f0f2f5;
  text-align: center;
  padding: 50px;
}

.container {
  background: white;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);
  display: inline-block;
}

input, button {
  padding: 10px;
  margin: 5px 0;
  width: 220px;
  border-radius: 6px;
  border: 1px solid #ccc;
  font-size: 16px;
}

button {
  background-color: #007BFF;
  color: white;
  border: none;
  cursor: pointer;
  width: 240px;
}

button:hover {
  background-color: #0056b3;
}

#result {
  margin-top: 20px;
  font-size: 18px;
  color: #333;
}
function calculateLoan() {
  const loanAmount = parseFloat(document.getElementById("loanAmount").value);
  const interestRate = parseFloat(document.getElementById("interestRate").value);
  const months = parseInt(document.getElementById("months").value);

  const resultDiv = document.getElementById("result");

  if (!loanAmount || !interestRate || !months || loanAmount <=0 || interestRate <0 || months <=0) {
    resultDiv.innerHTML = "<span style='color:red'>Please enter valid positive numbers!</span>";
    return;
  }

  const monthlyRate = interestRate / 12 / 100;
  const emi = (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, months)) / (Math.pow(1 + monthlyRate, months) - 1);
  const totalPayment = emi * months;
  const totalInterest = totalPayment - loanAmount;

  resultDiv.innerHTML = `
    <p>Monthly Payment (EMI): <strong>${emi.toFixed(2)}</strong></p>
    <p>Total Payment: <strong>${totalPayment.toFixed(2)}</strong></p>
    <p>Total Interest: <strong>${totalInterest.toFixed(2)}</strong></p>
  `;
}

