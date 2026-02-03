function calculateLoan() {
  const loanAmount = parseFloat(document.getElementById("loanAmount").value);
  const interestRate = parseFloat(document.getElementById("interestRate").value);
  const months = parseInt(document.getElementById("months").value);

  const resultDiv = document.getElementById("result");

  if (!loanAmount || !interestRate || !months || loanAmount <= 0 || interestRate < 0 || months <= 0) {
    resultDiv.innerHTML = "<span style='color:red'>Please enter valid positive numbers!</span>";
    return;
  }

  // حساب الفائدة البسيطة
  const totalInterest = loanAmount * (interestRate / 100) * (months / 12);
  const totalPayment = loanAmount + totalInterest;
  const monthlyPayment = totalPayment / months;

  resultDiv.innerHTML = `
    <p>Monthly Payment: <strong>${monthlyPayment.toFixed(2)}</strong></p>
    <p>Total Payment: <strong>${totalPayment.toFixed(2)}</strong></p>
    <p>Total Interest: <strong>${totalInterest.toFixed(2)}</strong></p>
  `;
}
