const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "ziptime.csv");

const src = fs.createReadStream(filePath);

src.on("data", chunk => {
  console.log(chunk.toString());
});
