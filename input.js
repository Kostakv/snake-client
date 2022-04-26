const { MOVE_DOWN_KEY, MOVE_UP_KEY, MOVE_LEFT_KEY, MOVE_RIGHT_KEY } = require("./constants"); // imports constants from constants.js
let connection;
// Handles all user inputs for movement.
const handleUserInput = function (key) {
  
  if (key === MOVE_LEFT_KEY){
    connection.write('Move: left') // moves left for A
    
  }
  if (key === MOVE_UP_KEY){ // Moves up for W
    connection.write('Move: up')
  }
  if (key === MOVE_DOWN_KEY){ // Moves down for S
    connection.write('Move: down')
  }
  if (key === MOVE_RIGHT_KEY){ // Moves right for D
    connection.write('Move: right')
  }

  if (key === 'f' || key === 'F'){ // Banter key
    connection.write('Say: Im going to win!')
  }
  if (key === 'c' || key === 'C'){ // Banter key
    connection.write('Say: great move!')
  }

  if (key === '\u0003') { // CTRL+C for exit listener
    process.exit();
  }
};


const setupInput = (conn) => {
  connection = conn; // Reference object from client.
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  stdin.on("data", handleUserInput); // Listens for key value from handleUserInput 
  return stdin;
};




module.exports = { setupInput }; // Exports setupInput 

