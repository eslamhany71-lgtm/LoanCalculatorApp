window.addEventListener("DOMContentLoaded", () => {

  const calcBtn = document.getElementById("calculateBtn");
  const resetBtn = document.getElementById("resetBtn");

  calcBtn.addEventListener("click", calculateLoan);
  resetBtn.addEventListener("click", resetForm);

});

function calculateLoan() {
  const loanAmount = parseFloat(document.getElementById("loanAmount").value);
  const months = parseInt(document.getElementById("months").value);
  const product = document.getElementById("product");
  const interestRate = parseFloat(product.value);

  const min = parseFloat(product.selectedOptions[0].dataset.min);
  const max = parseFloat(product.selectedOptions[0].dataset.max);

  const result = document.getElementById("result");

  if (!loanAmount || !months) {
    result.innerHTML = "<b>Enter valid values</b>";
    return;
  }

  if (loanAmount < min || loanAmount > max) {
    result.innerHTML = `<b>Amount must be between ${min} and ${max}</b>`;
    return;
  }

  // حساب الفايدة والمبلغ الكلي
  const totalInterest = loanAmount * interestRate * (months / 12);
  const totalPayment = loanAmount + totalInterest;
  const monthly = totalPayment / months;

  // الرسوم 5%
  const adminFees = loanAmount * 0.05;
  const totalFeesAndFirst = adminFees + monthly;
  const totalInterestAndFees = totalInterest + adminFees;
  const receivedMinusFeesAndFirst = loanAmount - totalFeesAndFirst;
  const receivedMinusFeesOnly = loanAmount - adminFees;

result.innerHTML = `
  <div class="result-card monthly">
    <i class="fa-solid fa-calendar-check"></i>
    <div>
      <h4>Monthly Installment</h4>
      <p>${monthly.toFixed(2)} EGP</p>
    </div>
  </div>

  <div class="result-card fees">
    <i class="fa-solid fa-money-bill"></i>
    <div>
      <h4>Administrative Fees (5%)</h4>
      <p>${adminFees.toFixed(2)} EGP</p>
    </div>
  </div>

  <div class="result-card totalFirst">
    <i class="fa-solid fa-coins"></i>
    <div>
      <h4>Total Fees + First Installment</h4>
      <p>${totalFeesAndFirst.toFixed(2)} EGP</p>
    </div>
  </div>

  <div class="result-card totalInterest">
    <i class="fa-solid fa-percent"></i>
    <div>
      <h4>Total Interest + Fees</h4>
      <p>${totalInterestAndFees.toFixed(2)} EGP</p>
    </div>
  </div>

  <div class="result-card netFirst">
    <i class="fa-solid fa-wallet"></i>
    <div>
      <h4>Net Amount (Fees + First)</h4>
      <p>${receivedMinusFeesAndFirst.toFixed(2)} EGP</p>
    </div>
  </div>

  <div class="result-card netOnly">
    <i class="fa-solid fa-hand-holding-dollar"></i>
    <div>
      <h4>Net Amount (Fees Only)</h4>
      <p>${receivedMinusFeesOnly.toFixed(2)} EGP</p>
    </div>
  </div>
`;


function resetForm() {
  document.getElementById("loanAmount").value = "";
  document.getElementById("months").value = "";
  document.getElementById("product").selectedIndex = 0;
  document.getElementById("result").innerHTML = "";
}
