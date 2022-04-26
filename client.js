const net = require("net");
const { IP, PORT } = require("./constants");

const name = process.argv.slice(2);
const connect = function () {
  const conn = net.createConnection({
    host: IP,
    port: PORT

    
  });



  conn.on("connect", () => {
    conn.write('Name: KV');
    console.log(`Successfully connected to game server`);
    

    //console.log("you died due to afk :(")
    return conn
  });


  

  // interpret incoming data as text
  conn.setEncoding("utf8");
  
  return conn;
};


module.exports = { connect };

