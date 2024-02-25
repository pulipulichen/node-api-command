var http = require('http'); // Import Node.js core module

const execAsync = require("./lib/execAsync");
const sleep = require("./lib/sleep");


var server = http.createServer(async function (req, res) {   //create web server
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('ok');

    if (req.url == '/on') { //check the URL of the current request
        
        await execAsync("xset dpms force on"); // 開螢幕

    }
    else if (req.url == '/') { //check the URL of the current request
        await execAsync(__dirname + "/mute.sh"); // 關閉聲音
        await execAsync("xset dpms force off"); // 關螢幕
    }

    res.end();

});

let port = 63000
server.listen(port); //6 - listen for any incoming requests

console.log(`Node.js web server at port ${port} is running..`)
