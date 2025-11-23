/* ==========================================
   TASK 1: WELCOME MESSAGE
   ========================================== */

function welcomeUser() {
  let name = prompt("What is your name?");
  let color = prompt("What is your favourite color?");

  alert("Welcome, " + name + "!");

  document.getElementById("task1Output").innerHTML =
    "<h3 style='color:" + color + "'>Hello " + name + "! Your favourite color is " + color + ".</h3>";
}



/* ==========================================
   TASK 2: ELIGIBILITY CHECKER
   ========================================== */

function checkEligibility() {
  let age = prompt("Enter your age:");
  let output = "";

  if (age >= 60) {
    output = "You are a senior citizen voter.";
  } else if (age >= 18) {
    output = "You are eligible to vote!";
  } else {
    output = "You are not eligible yet.";
  }

  alert(output);
  document.getElementById("task2Output").innerHTML = "<p>" + output + "</p>";
}



/* ==========================================
   TASK 3: ARRAY METHODS PRACTICE
   ========================================== */

function runArrayTasks() {
  let numbers = [10, 25, 30, 45, 50];

  let doubled = numbers.map(n => n * 2);
  let above30 = numbers.filter(n => n > 30);
  let sum = numbers.reduce((total, n) => total + n, 0);

  let output = "";

  output += "Original Array: " + numbers + "\n";
  output += "Doubled (map): " + doubled + "\n";
  output += "Above 30 (filter): " + above30 + "\n";
  output += "Sum (reduce): " + sum + "\n\n";
  output += "forEach Output:\n";

  numbers.forEach(n => {
    output += "- Number: " + n + "\n";
  });

  document.getElementById("task3Output").textContent = output;
}
