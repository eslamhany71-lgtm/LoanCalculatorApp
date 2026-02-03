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
