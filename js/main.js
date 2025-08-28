// For heart icon click count funtionality

let heartCount = 0;

const heartNumber = document.getElementById("heart-count");
const heartIcon = document.querySelectorAll(".heart-icon");

heartIcon.forEach((btn) => {
  btn.addEventListener("click", () => {
    heartCount++;
    heartNumber.textContent = heartCount;
  });
});
