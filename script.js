// Three different arrays 
const callSigns = [
  "Alpha Bravo One,",
  "Pilot, listen carefully—",
  "Eagle Eye, this is Command,",
  "Ghost Rider,",
  "Captain Maverick,"
];

const commands = [
  "turn left immediately.",
  "descend to 500 feet and maintain stealth mode.",
  "drop the rubber duck payload.",
  "engage evasive maneuvers and sing loudly.",
  "fly in reverse and confuse the enemy."
];

const statuses = [
  "We’re counting on you.",
  "This is not a drill.",
  "The fate of breakfast depends on it.",
  "Ignore the clowns on radar.",
  "Trust your gut — and maybe the autopilot."
];

// This function picks a random array item from each array, then combines them into one.
function generateMessage() {
    const callSign = callSigns[Math.floor(Math.random() * callSigns.length)];
    const command = commands[Math.floor(Math.random() * commands.length)];
    const status = statuses[Math.floor(Math.random() * statuses.length)];

    const message = `${callSign} ${command} ${status}`;
    console.log(message);
}

generateMessage();