const net = require("net");
const { connect } = require("./client"); // Imported connect function

const { setupInput } = require("./input"); // Imported setupInput function

console.log("Connecting ..."); // Displays connecting when trying to connect


setupInput(connect()); // Passes returned value from connect to setupInput.






