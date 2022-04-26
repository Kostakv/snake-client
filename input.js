let connection;
const handleUserInput = function (key) {
  
  if (key === 'a' || key === 'A'){
    connection.write('Move: left')
    
  }
  if (key === 'w' || key === 'W'){
    connection.write('Move: up')
  }
  if (key === 's' || key === 'S'){
    connection.write('Move: down')
  }
  if (key === 'd' || key === 'D'){
    connection.write('Move: right')
  }

  if (key === 'f' || key === 'F'){
    connection.write('Say: Im going to win!')
  }
  if (key === 'c' || key === 'C'){
    connection.write('Say: great move!')
  }

  if (key === '\u0003') {
    process.exit();
  }
};


const setupInput = (conn) => {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  stdin.on("data", handleUserInput);
  return stdin;
};




module.exports = { setupInput };

