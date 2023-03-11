const popUp = document.querySelector(".popup");
const close = document.querySelector(".close");

window.onload = function () {
  setTimeout(function () {
    popUp.style.display = "block";

    // Add Time to show pop up
  }, 2000);
};

close.addEventListener("click", function () {
  popUp.style.display = "none";
});
