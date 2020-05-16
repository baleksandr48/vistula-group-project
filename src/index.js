const express = require("express");
const router = require("./router");
const cors = require("cors");
const http = require("http");
const app = express();
const httpServer = http.createServer(app);
const errorHandler = require("./utils/errorHandler");

app.use(cors());
app.use(express.json());
app.use("/api", router);
app.use(errorHandler);
app.use("/public", express.static("./public/img"));
httpServer.listen(3000, () => {
  console.log(`Server is listening on port ${3000}`);
});
