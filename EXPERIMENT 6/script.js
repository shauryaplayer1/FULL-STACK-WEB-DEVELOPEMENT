// =========== 1. Basic functions ===========
function add(a, b) {
  return a + b;
}

function greet(name) {
  return "Hello, " + name + "!";
}

document.getElementById("runFunctions").addEventListener("click", () => {
  const sum = add(7, 3);
  const message = greet("Student");

  document.getElementById("functionsOutput").textContent =
    "add(7, 3) = " + sum + "\n" + message;

  console.log(sum, message);
});


// =========== 2. Closure Counter ===========
function makeCounter() {
  let count = 0;
  return {
    increment: () => ++count,
    get: () => count
  };
}

const counter = makeCounter();

document.getElementById("incCounter").addEventListener("click", () => {
  const n = counter.increment();
  document.getElementById("counterOutput").textContent = "Counter: " + n;
});

document.getElementById("showCounter").addEventListener("click", () => {
  alert("Counter is " + counter.get());
});


// =========== 3. IIFE CODING QUESTION (works 100% now) ===========
// Requirement: SOLVE an IIFE based coding question.

// IIFE: Add two numbers and show result on page WITHOUT any function call.
function runIIFEExample() {

  let result = (function (a, b) {
    return "IIFE Sum = " + (a + b);
  })(10, 20);

  // Show on screen
  let out = document.getElementById("iifeOutput");
  if (!out) {
    out = document.createElement("pre");
    out.id = "iifeOutput";
    out.style.background = "#eef6ff";
    out.style.padding = "8px";
    out.style.marginTop = "10px";
    out.style.whiteSpace = "pre-wrap";

    // insert just below the IIFE button
    const btn = document.getElementById("runIIFE");
    btn.parentNode.insertBefore(out, btn.nextSibling);
  }

  out.textContent = result;

  console.log(result);
}

// Bind the IIFE example to your existing HTML button
document.getElementById("runIIFE").addEventListener("click", runIIFEExample);


// =========== 4. Simple To-Do App DOM Practice ===========
const todoInput = document.getElementById("todoInput");
const addTodo = document.getElementById("addTodo");
const todoList = document.getElementById("todoList");

function createTodo(text) {
  const li = document.createElement("li");
  li.style.padding = "6px 8px";
  li.style.border = "1px solid #ccc";
  li.style.borderRadius = "5px";
  li.style.marginTop = "8px";
  li.style.display = "flex";
  li.style.justifyContent = "space-between";

  const span = document.createElement("span");
  span.textContent = text;

  const del = document.createElement("button");
  del.textContent = "Delete";
  del.className = "delete-btn";

  del.addEventListener("click", () => {
    todoList.removeChild(li);
  });

  li.appendChild(span);
  li.appendChild(del);

  return li;
}

addTodo.addEventListener("click", () => {
  const text = todoInput.value.trim();
  if (text === "") {
    alert("Please enter a task!");
    return;
  }
  todoList.appendChild(createTodo(text));
  todoInput.value = "";
});

todoInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") addTodo.click();
});
