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
