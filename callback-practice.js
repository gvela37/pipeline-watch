function buildCar() {
  console.log("Attach wheels to the LEGO chassis");
}

function legoWorkshop(buildInstructions) {
  console.log("Helper has received the instructions");
  buildInstructions();
}

// Pass an existing function.
legoWorkshop(buildCar);

// Create and pass an unnamed arrow function.
legoWorkshop(() => {
  console.log("Attach wheels to the LEGO Moostang");
});