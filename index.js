var http = require('http'); // Import Node.js core module

const execAsync = require("./lib/execAsync");
const sleep = require("./lib/sleep");


var server = http.createServer(async function (req, res) {   //create web server
    if (req.url == '/') { //check the URL of the current request
        
        // set response header
        res.writeHead(200, { 'Content-Type': 'text/html' }); 
        
        // xset dpms force off
        // set response content    
        res.write('ok');

//         try {
//             await execAsync("netstat -tulpn | grep 7860");

//             // 表示已經佔用，準備關閉所有docker
// //             await execAsync("docker stop $(docker ps -a -q)");
//             await sleep(30000)
//         }
//         catch (e) {
//             // 沒被佔用
//             // console.log(e)
//         }
            

        await execAsync(__dirname + "/mute.sh"); // 關閉聲音

        await execAsync("xset dpms force off"); // 關螢幕

        // await sleep(5000)

        // await execAsync("xset dpms force off"); // 關螢幕
        

        // await execAsync("systemctl hibernate"); // 休眠

        // await execAsync("xset dpms force off"); // 關螢幕

        res.end();

    }
    else if (req.url == '/on') { //check the URL of the current request

        // set response header
        res.writeHead(200, { 'Content-Type': 'text/html' });

        // xset dpms force off
        // set response content
        res.write('ok');

//         try {
//             await execAsync("netstat -tulpn | grep 7860");

//             // 表示已經佔用，準備關閉所有docker
// //             await execAsync("docker stop $(docker ps -a -q)");
//             await sleep(30000)
//         }
//         catch (e) {
//             // 沒被佔用
//             // console.log(e)
//         }

        await execAsync("xset dpms force on"); // 關螢幕

        // await sleep(5000)

        // await execAsync("xset dpms force off"); // 關螢幕


        // await execAsync("systemctl hibernate"); // 休眠

        // await execAsync("xset dpms force off"); // 關螢幕

        res.end();

    }
});

let port = 63000
server.listen(port); //6 - listen for any incoming requests

console.log(`Node.js web server at port ${port} is running..`)
