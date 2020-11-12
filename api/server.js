let express = require("express");
let request = require("request");
let bodyParser = require("body-parser");
let cors = require("cors");



//Server create
const server = express();

server.listen("3001", () => {
  console.log("Server started on port 3001");
});

//Include json

server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: false }));

server.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

// aprove connection to server
server.use(cors());

server.get("/posts", (req, res) => {
    request(
      {
        url:
          "https://jsonplaceholder.typicode.com/posts",
      },
      (error, response, body) => {
        if (error || response.statusCode !== 200) {
          return res.status(500).json({ type: "error", message: err.message });
        }
        res.end(JSON.stringify(body));
      }
    );
  });

  server.get("/posts/:id/comments", (req, res) => {
    request(
      {
        url:
          'https://jsonplaceholder.typicode.com/posts/' + req.params.id + '/comments',
      },
      (error, response, body) => {
        if (error || response.statusCode !== 200) {
          return res.status(500).json({ type: "error", message: err.message });
        }
        res.end(JSON.stringify(body));
      }
    );
  });

  server.get("/users", (req, res) => {
    request(
      {
        url:
          "https://jsonplaceholder.typicode.com/users",
      },
      (error, response, body) => {
        if (error || response.statusCode !== 200) {
          return res.status(500).json({ type: "error", message: err.message });
        }
        res.end(JSON.stringify(body));
      }
    );
  });
