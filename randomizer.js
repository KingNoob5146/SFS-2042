// Get the output element
var output = document.getElementById("output");
var randomizeButton = document.getElementById("randomize-button");
var loadingScreen = document.getElementById("loading-screen");

// Define the list of inputs
var inputs = ["Canteen -next to payment qr (4th floor)", "Canteen door (4th floor)"," Blue cupboards -outside 403 (4th floor)", 
"Under fan beside 401(red door) (4th floor)","Wall outside washroom (wall between the two washrooms) (4th floor)",
"Glass wall beside 307 ( wall beside 308)(3rd floor)",
"Glass wall/partition (in front of 311-315 sign)(3rd floor)",
"Lobby wall(3rd floor)",
"Stairs 2nd to 3rd floor",
"Orange bulletin board on second floor",
"beside 205A, 205B",
"Wall between 2 glass panels in front of reception",
"Wall beside 202",
"Wall beside library","Lobby wall",];

// Add an event listener to the randomize button
randomizeButton.addEventListener("click", function () {
  // Disable the button
  randomizeButton.disabled = true;
  randomizeButton.style.cursor = "not-allowed";
  randomizeButton.innerHTML = "Destination Found";
  // Show loading screen
  loadingScreen.style.display = "block";
  // Use the Math.random() function to randomly select an input
  setTimeout(function () {
    var randomInput = inputs[Math.floor(Math.random() * inputs.length)];
    // Update the output element with the randomly selected input
    output.innerHTML = randomInput;
    // Hide loading screen
    loadingScreen.style.display = "none";
  }, 300);
});
