const fs = require("fs");
const http = require("http");

// create directory
function fileAndFolderCreation(dirname, filename) {
  if (!fs.existsSync(dirname)) {
    fs.mkdir(`${dirname}`, (error) => {
      if (error) {
        console.log("error in creation of folder");
      } else {
        if (!fs.existsSync(`${dirname}/${filename}`)) {
          fs.appendFile(`${dirname}/${filename}`, "", (error) => {
            if (error) {
              console.log(error);
            }
          });
        } else if (fs.existsSync(`${dirname}/${filename}`)) {
          console.log("file created already");
        }
      }
    });
  }
}
fileAndFolderCreation("about", "about.html");
fileAndFolderCreation("experience", "experience.html");

// server created

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Welcome to home page");
  } else if (req.url === "/about") {
    fs.readFile("about/about.html", (err, data) => {
      if (err) {
        res.writeHead(404, { "Content-Type": "text/html" });
        res.end("404-page not found");
      }
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      return res.end();
    });
  } else if (req.url === "/experience") {
    fs.readFile("experience/experience.html", (err, data) => {
      if (err) {
        res.writeHead(404, { "Content-Type": "text/html" });
        res.end("404-page not found");
      }
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      return res.end();
    });
  }
});

server.listen(5000, () => {
  console.log("Server is running on port 5000");
});
