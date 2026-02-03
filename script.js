document.getElementById("calculateBtn").addEventListener("click", calculateLoan);
document.getElementById("resetBtn").addEventListener("click", resetForm);

function calculateLoan() {
  const loanAmount = parseFloat(document.getElementById("loanAmount").value);
  const months = parseInt(document.getElementById("months").value);
  const productSelect = document.getElementById("product");
  const interestRate = parseFloat(productSelect.value);

  const selectedOption = productSelect.options[productSelect.selectedIndex];
  const minAmount = parseFloat(selectedOption.getAttribute("data-min"));
  const maxAmount = parseFloat(selectedOption.getAttribute("data-max"));

  const resultDiv = document.getElementById("result");

  // التحقق من المدخلات
  if (!loanAmount || !months || loanAmount <= 0 || months <= 0) {
    resultDiv.innerHTML = "<span style='color:red'>Please enter valid positive numbers!</span>";
    return;
  }

  // التحقق من نطاق المبلغ
  if (loanAmount < minAmount || loanAmount > maxAmount) {
    resultDiv.innerHTML = `<span style='color:red'>Amount must be between ${minAmount.toLocaleString()} and ${maxAmount.toLocaleString()} for this product!</span>`;
    return;
  }

  // حساب الفائدة البسيطة
  const totalInterest = loanAmount * interestRate * (months / 12);
  const totalPayment = loanAmount + totalInterest;
  const monthlyPayment = totalPayment / months;

  resultDiv.innerHTML = `
    <p>Monthly Payment: <strong>${monthlyPayment.toFixed(2)}</strong></p>
    <p>Total Payment: <strong>${totalPayment.toFixed(2)}</strong></p>
    <p>Total Interest: <strong>${totalInterest.toFixed(2)}</strong></p>
    <p>Interest Rate Used: <strong>${(interestRate * 100).toFixed(2)}%</strong></p>
  `;
}

// دالة لمسح الحقول
function resetForm() {
  document.getElementById("loanAmount").value = "";
  document.getElementById("months").value = "";
  document.getElementById("product").selectedIndex = 0;
  document.getElementById("result").innerHTML = "";
}
