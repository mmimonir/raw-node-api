// dependencies
const http = require("http");

const { handleReqRes } = require("./helpers/handleReqRes");
const environment = require("./helpers/environments");
const data = require("./lib/data");

// app object - module scaffolding
const app = {};

// testing
// data.create(
//   "test",
//   "newFile",
//   { name: "Bangladesh", language: "Bangla" },
//   (err) => {
//     console.log(err);
//   }
// );
data.delete("test", "newFile", (err) => {
  console.log(err);
});

// handle request response
app.handleReqRes = handleReqRes;
// create server
app.createServer = () => {
  const server = http.createServer(app.handleReqRes);
  server.listen(environment.port, () => {
    console.log(`listening to port ${environment.port}`);
  });
};

// start the server
app.createServer();
