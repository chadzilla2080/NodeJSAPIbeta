const http = require("http");

// this is an example you will use Express JS Lib In The Future
// this variable server creates an http server
const server = http.createServer((req, res) => {
  console.log("Web Server Started.");
});

server.listen(3000, () => {
  console.log("Server is started");
});
