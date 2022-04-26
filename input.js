let connection;
// Handles all user inputs for movement.
const handleUserInput = function (key) {
  
  if (key === 'a' || key === 'A'){
    connection.write('Move: left') // moves left for A
    
  }
  if (key === 'w' || key === 'W'){ // Moves up for W
    connection.write('Move: up')
  }
  if (key === 's' || key === 'S'){ // Moves down for S
    connection.write('Move: down')
  }
  if (key === 'd' || key === 'D'){ // Moves right for D
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

