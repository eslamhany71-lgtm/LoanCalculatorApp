<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Loan Calculator</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <div class="container">
    <h2>Loan Calculator</h2>

    <label for="product">Choose Product:</label>
    <select id="product">
      <option value="0.3152" data-min="5000" data-max="45000">MEL 1/1 - 5K:45K (31.52%)</option>
      <option value="0.3200288" data-min="45100" data-max="75000">MEL 2/2 - 45.1K:75K (32.00%)</option>
      <option value="0.260132" data-min="75100" data-max="150000">VSE 1/1 - 75.1K:150K (26.01%)</option>
      <option value="0.24002" data-min="150100" data-max="266000">VSE 2/2 - 150.1K:266K (24.00%)</option>
    </select>

    <label for="loanAmount">Loan Amount:</label>
    <input type="number" id="loanAmount" placeholder="Enter amount">

    <label for="months">Months:</label>
    <input type="number" id="months" placeholder="Enter months">

    <button id="calculateBtn">Calculate</button>
    <button id="resetBtn" class="reset">Reset</button>

    <div id="result"></div>
  </div>

  <script src="script.js"></script>
</body>
</html>
