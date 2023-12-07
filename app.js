// giving vars to the buttons
const rock_btn = document.getElementById("rock-logo");
const paper_btn = document.getElementById("paper-logo");
const scissors_btn = document.getElementById("scissors-logo");
const human_choice = document.getElementById("my_choice");
const computer_choice = document.getElementById("computer_choice");
const result = document.getElementById("winning_test");
const play_again = document.getElementById("play_again_btn");
// const count1 = document.getElementById("first_points");
// const count2 = document.getElementById("second_points");
// -----------------------------------------------------
// writing onclick funtion

rock_btn.addEventListener("click", rock_function);
paper_btn.addEventListener("click", paper_function);
scissors_btn.addEventListener("click", scissor_function);

// -----------------------------------------------------
// writing functions of the buttons
function rock_function() {
  var newsrc = "assets/rock-hand.png";
  my_choice.src = newsrc;
  function computerturn() {
    const randomIndex = Math.floor(Math.random() * imageList.length);
    return imageList[randomIndex];
  }
  const getrandomsrc = computerturn(imageList);
  computer_choice.src = getrandomsrc;
  determineWinner();
}

function paper_function() {
  var newsrc = "assets/paper-hand.png";
  my_choice.src = newsrc;
  function computerturn() {
    const randomIndex = Math.floor(Math.random() * imageList.length);
    return imageList[randomIndex];
  }
  const getrandomsrc = computerturn(imageList);
  computer_choice.src = getrandomsrc;
  determineWinner();
  //   if (
  //     human_choice.src.endsWith("assets/rock-hand.png") ==
  //     computer_choice.src.endsWith("assets/rock-hand.png")
  //   ) {
  //     result.innerHTML = "Its a Draw";
  //   } else if (
  //     human_choice.src.endsWith("assets/paper-hand.png") ==
  //     computer_choice.src.endsWith("assets/paper-hand.png")
  //   ) {
  //     result.innerHTML = "its a Draw";
  //   } else if (
  //     human_choice.src.endsWith("assets/scissors-hand.png") ==
  //     computer_choice.src.endsWith("assets/scissors.png")
  //   ) {
  //     result.innerHTML = "its a Draw";
  //   } else if (
  //     human_choice.src.endsWith("assets/rock-hand.png") &&
  //     computer_choice.src.endsWith("assets/paper-hand.png")
  //   ) {
  //     result.innerHTML = "Computer wins";
  //   } else if (
  //     human_choice.src.endsWith("assets/rock-hand.png") &&
  //     computer_choice.src.endsWith("assets/scissors-hand.png")
  //   ) {
  //     result.innerHTML = "You wins";
  //   } else if (
  //     human_choice.src.endsWith("assets/paper-hand.png") &&
  //     computer_choice.src.endsWith("assets/rock-hand.png")
  //   ) {
  //     result.innerHTML = "You wins";
  //   } else if (
  //     human_choice.src.endsWith("assets/paper-hand.png") &&
  //     computer_choice.src.endsWith("assets/scissors-hand.png")
  //   ) {
  //     result.innerHTML = "Computer wins";
  //   } else if (
  //     human_choice.src.endsWith("assets/scissors-hand.png") &&
  //     computer_choice.src.endsWith("assets/rock-hand.png")
  //   ) {
  //     result.innerHTML = "Computer wins";
  //   } else if (
  //     human_choice.src.endsWith("assets/scissors-hand.png") &&
  //     computer_choice.src.endsWith("assets/paper-hand.png")
  //   ) {
  //     result.inert = "You wins";
  //   }
}

function scissor_function() {
  var newsrc = "assets/scissors-hand.png";
  my_choice.src = newsrc;
  function computerturn() {
    const randomIndex = Math.floor(Math.random() * imageList.length);
    return imageList[randomIndex];
  }
  const getrandomsrc = computerturn(imageList);
  computer_choice.src = getrandomsrc;
  determineWinner();
}
// ------------------------------------------------------

// giving random images for the computer section
const imageList = [
  "assets/rock-hand.png",
  "assets/paper-hand.png",
  "assets/scissors-hand.png",
];
// --------------------------------------------------------

// writing game conditions
// if (
//   human_choice.src.endsWith("assets/rock-hand.png") ==
//   computer_choice.src.endsWith("assets/rock-hand.png")
// ) {
//   result.innerHTML = "Its a Draw";
// } else {
//   result.innerHTML = "code sarigga chusuko";
// }
// Assuming human_choice and computer_choice are image elements
let count1 = 0
let count2 = 0
function determineWinner() {
  const humanSrc = human_choice.src;
  const computerSrc = computer_choice.src;

  if (humanSrc === computerSrc) {
    // result.innerHTML = "It's a Draw";
  } else if (
    (humanSrc.endsWith("rock-hand.png") &&
      computerSrc.endsWith("scissors-hand.png")) ||
    (humanSrc.endsWith("paper-hand.png") &&
      computerSrc.endsWith("rock-hand.png")) ||
    (humanSrc.endsWith("scissors-hand.png") &&
      computerSrc.endsWith("paper-hand.png"))
  ) {
    count1++
    document.getElementById("first_points").innerHTML = count1;
    if (count1 >= 5) {
        result.innerHTML = "You win !!";
    } else if (count1 == count2 == 5) {
        result.innerHTML = "Its Draw !!"
    }
  } else {
    count2++
    document.getElementById("second_points").innerHTML = count2;
    if (count2 >= 5) {
        result.innerHTML = "Computer wins !!!";
    } else if (count1 == count2 == 5) {
        result.innerHTML = "Its Draw !!"
    }
  }
}

// Call determineWinner() function where appropriate in your code
// For example, call it after both players make their choices
// Example: rock_function(), paper_function(), scissor_function()
// should call determineWinner() at the end

// --------------------------------------------------------------------

play_again.addEventListener("click",playbutton);
function playbutton() {
    location.replace("index.html")
}