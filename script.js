let outputScreen = document.getElementById("output-screen");

function display(num) {
  if (outputScreen.value === "0" && num !== ".") {
    outputScreen.value = num;
  } else {
    outputScreen.value += num;
  }
}

function Calculate() {
  try {
    outputScreen.value = eval(outputScreen.value);
  } catch (error) {
    alert("Invalid input");
    Clear();
  }
}

function Clear() {
  outputScreen.value = "0";
}

function del() {
  outputScreen.value = outputScreen.value.slice(0, -1) || "0";
}

function toggleTheme() {
    const calculator = document.getElementById("calculator");
    const toggleButton = document.getElementById("toggle-theme");
    const body = document.body;
    
    calculator.classList.toggle("dark-mode");
    body.classList.toggle("dark-mode");
    
    if (calculator.classList.contains("dark-mode")) {
        toggleButton.innerText = "🌞"; 
    } else {
        toggleButton.innerText = "🌙";
    }
}

document.getElementById("currentYear").textContent = new Date().getFullYear();
