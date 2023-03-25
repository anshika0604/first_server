// server creation

const http = require("http");

const port = 8081;

http.createServer((req,res) => {
    res.writeHead(200, {"Content-Type":"text/html"});
    res.write("<h4>Hello, My new server</h4>");
    res.end();
}).listen(port, () => {
    console.log(`My NodeJs server started on port ${port} `);
})

// http://localhost:8081