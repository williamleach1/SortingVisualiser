const arrayContainer = document.querySelector(".array-container");
let bar_array = [];
let counter = 0;
let speed = 5;

function appendToConsole(message) {
  const consoleOutput = document.getElementById("console-output");
  const messageElement = document.createElement("div"); // Create a new div for each message
  messageElement.textContent = message; // Use textContent for text safety
  consoleOutput.appendChild(messageElement); // Append the new element to the console
  consoleOutput.scrollTop = consoleOutput.scrollHeight; // Scroll to the bottom
}

function generateArray(size = 30) {
  bar_array = [];
  for (let i = 0; i < size; i++) {
    bar_array.push(Math.floor(Math.random() * 100) + 1);
  }
  displayArray();
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function displayArray() {
  arrayContainer.innerHTML = "";
  bar_array.forEach((value) => {
    const arrayBar = document.createElement("div");
    arrayBar.classList.add("array-bar");
    arrayBar.style.backgroundColor = "blue"; // Default color
    arrayBar.style.height = `${value * 3}px`; // Adjust scaling factor as needed
    arrayBar.style.width = "20px";
    arrayContainer.appendChild(arrayBar);
  });
}

function colorArrayBar(index, color) {
  // Placeholder for coloring array bar
  arrayContainer.children[index].style.backgroundColor = color; // Change color of array bar at index
}

function Swap(index1, index2) {
  // Placeholder for swapping array bars
  let temp = bar_array[index1];
  bar_array[index1] = bar_array[index2];
  bar_array[index2] = temp;
  displayArray();
  colorArrayBar(index1, "green");
  colorArrayBar(index2, "green");
}

// iterate through starting at first two (0,1)
// compare and swap

async function bubbleSort() {
  console.log("bubbleSort called");
  console.log(bar_array.length);
  let stop = bar_array.length - 1;
  while (stop > 0) {
    for (let curr = 0; curr < stop; curr++) {
      await sleep(500 / speed);
      if (bar_array[curr] > bar_array[curr + 1]) {
        Swap(curr, curr + 1);
      } else {
        colorArrayBar(curr, "red");
        colorArrayBar(curr + 1, "red");
        appendToConsole("No Swap");
      }
    }
    stop = stop - 1;
  }
  console.log("Completed Sorting");
  appendToConsole("Completed Sorting");
  // heighlight target arratBar in red

  // Placeholder for bubble sort algorithm
  // Implement sorting logic here and make sure to visualize each step
}

function insertionSort() {
  console.log("insertionSort called");
  // Placeholder for insertion sort algorithm
  // Implement sorting logic here and make sure to visualize each step
}

function iterateColour() {
  console.log(counter);
  if (counter === 0) {
    colorArrayBar(bar_array.length - 1, "blue");
  }
  console.log("iterateColour called");
  if (counter > 0) {
    colorArrayBar(counter - 1, "blue");
  }
  colorArrayBar(counter, "red");
  if (counter === bar_array.length - 1) {
    counter = 0;
  } else {
    counter++;
  }
}

// Event listeners for control inputs
document.getElementById("arraySize").addEventListener("input", (event) => {
  generateArray(parseInt(event.target.value));
});

document.getElementById("sortSpeed").addEventListener("input", (event) => {
  speed = parseInt(event.target.value);
  // Adjust sorting speed based on input
});

// Initial array generation
generateArray();
