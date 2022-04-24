const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: 'localhost',
    port: 50541

    
  });
  conn.on("connect", () => {
    console.log("you died due to afk :(")
    return conn
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;
};

console.log("Connecting ...");
connect();


module.exports = { connect };


