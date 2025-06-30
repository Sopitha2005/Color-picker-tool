const colorPicker = document.getElementById("colorPicker");
const colorValue = document.getElementById("colorValue");

colorPicker.addEventListener("input", function () {
  colorValue.textContent = this.value;
  colorValue.style.color = this.value;
});
