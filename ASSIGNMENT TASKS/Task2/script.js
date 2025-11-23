const textArea = document.getElementById("textArea");
const counter = document.getElementById("counter");
const limit = 100;

textArea.addEventListener("input", () => {
  const used = textArea.value.length;
  const left = limit - used;

  counter.textContent = "Characters left: " + left;

  // Color change based on remaining characters
  if (left > 40) {
    counter.style.color = "green";
  } 
  else if (left > 10) {
    counter.style.color = "orange";
  } 
  else {
    counter.style.color = "red";
  }
});
