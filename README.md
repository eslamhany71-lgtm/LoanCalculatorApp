<html>
<head>
  <title>Loan Calculator</title>
</head>
<body>
  <h2>Loan Calculator</h2>

  <label for="product">Choose Product:</label>
  <select id="product">
    <option value="0.3152">MEL 1/1 - 5K:45K (31.52%)</option>
    <option value="0.3200288">MEL 2/2 - 45.1K:75K (32.00%)</option>
    <option value="0.260132">VSE 1/1 - 75.1K:150K (26.01%)</option>
    <option value="0.24002">VSE 2/2 - 150.1K:266K (24.00%)</option>
  </select>
  <br><br>

  <label for="loanAmount">Loan Amount:</label>
  <input type="number" id="loanAmount" placeholder="Enter amount" />
  <br><br>

  <label for="months">Months:</label>
  <input type="number" id="months" placeholder="Enter months" />
  <br><br>

  <button onclick="calculateLoan()">Calculate</button>

  <div id="result" style="margin-top:20px;"></div>

  <script>
    function calculateLoan() {
      const loanAmount = parseFloat(document.getElementById("loanAmount").value);
      const months = parseInt(document.getElementById("months").value);
      const interestRate = parseFloat(document.getElementById("product").value); // هنا ناخد الفايدة من الدروب

      const resultDiv = document.getElementById("result");

      if (!loanAmount || !interestRate || !months || loanAmount <= 0 || interestRate < 0 || months <= 0) {
        resultDiv.innerHTML = "<span style='color:red'>Please enter valid positive numbers!</span>";
        return;
      }

      // حساب الفائدة البسيطة حسب المنتج
      const totalInterest = loanAmount * interestRate * (months / 12);
      const totalPayment = loanAmount + totalInterest;
      const monthlyPayment = totalPayment / months;

      resultDiv.innerHTML = `
        <p>Monthly Payment: <strong>${monthlyPayment.toFixed(2)}</strong></p>
        <p>Total Payment: <strong>${totalPayment.toFixed(2)}</strong></p>
        <p>Total Interest: <strong>${totalInterest.toFixed(2)}</strong></p>
        <p>Interest Rate Used: <strong>${(interestRate*100).toFixed(2)}%</strong></p>
      `;
    }
  </script>
</body>
</html>
