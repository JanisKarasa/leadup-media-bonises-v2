/* 18 + POPUP Logic */
document.addEventListener("DOMContentLoaded", function () {
  const overlay = document.getElementById("overlay");
  const modal = document.getElementById("modal");
  const closeBtn = document.getElementById("close-btn");
  const yesBtn = document.getElementById("yes-btn");
  const noBtn = document.getElementById("no-btn");

  // Display the modal
  overlay.style.display = "flex";

  // Close modal function
  function closeModal() {
    overlay.style.display = "none";
  }

  // Event listeners
  closeBtn.addEventListener("click", closeModal);
  yesBtn.addEventListener("click", closeModal);
  noBtn.addEventListener("click", function () {
    // alert("Sorry, you must be 18 or older to access this page.");
    closeModal();
  });
});
/* 18 + POPUP Logic End */
