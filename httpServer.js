const http = require("http");

// Mock Data For API Calls

const data = [
  {
    id: 1,
    firstName: "Chad",
    lastNane: "Buie",
    email: "chadbuie@gmail.com",
  },
  {
    id: 2,
    firstName: "Amanda",
    lastNane: "Rowe",
    email: "arowe2004@gmail.com",
  },
  {
    id: 3,
    firstName: "Elias",
    lastNane: "Rafat",
    email: "eliasrafat@gmail.com",
  },
];

// this is an example you will use Express JS Lib In The Future
// this variable server creates an http server
// const server = http.createServer((req, res) => {
//  console.log("First Web Server Started.");
// });

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "application/json");
  res.setHeader("Content-Language", "es-US");
  res.setHeader("Date", new Date(Date.now()));
  res.setHeader("X-Powered-By", "Node,js;");
  res.end(
    JSON.stringify({
      success: true,
      data: data,
    })
  );
});

server.listen(3000, () => {
  console.log("Server is started on Port 3000!");
});
