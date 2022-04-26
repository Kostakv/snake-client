const net = require("net");
const { IP, PORT } = require("./constants"); // imports constants from constants.js

const name = process.argv.slice(2);
// Connect function. uses constant IP and PORT
const connect = function () {
  const conn = net.createConnection({
    host: IP,
    port: PORT

    
  });
  // Recieves data from the server.
  conn.on('data', (data) => {
      console.log('Server says: ', data);
  });

  // Connection established function. 
  conn.on("connect", () => {
    conn.write('Name: KV');
    console.log(`Successfully connected to game server`);
    
    return conn
  });

  

  conn.setEncoding("utf8");
  
  return conn;
};


module.exports = { connect };

