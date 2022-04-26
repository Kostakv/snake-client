const net = require("net");
const name = process.argv.slice(2);
const connect = function () {
  const conn = net.createConnection({
    host: 'localhost',
    port: 50541

    
  });



  conn.on("connect", () => {
    console.log(`Name: ${name}`)
    //console.log("you died due to afk :(")
    return conn
  });

  

  // interpret incoming data as text
  conn.setEncoding("utf8");
  
  return conn;
};


module.exports = { connect };

