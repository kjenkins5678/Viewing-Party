// **********************************************
// **********************************************

const express = require ("express"); 
const bodyParser = require ("body-parser");
var session = require("express-session");
var passport = require("./config/passport");
const cors = require ("cors"); 
const app = express(); 
const path = require('path');

var corsOptions = {
  origin: "http://localhost:8081"
}
const db = require ("./models"); 
db.sequelize.sync();

app.use(cors(corsOptions)); 
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("build"));

app.use(session({ secret: "keyboard cat", resave: false, saveUninitialized: false }));
app.use(passport.initialize());
app.use(passport.session());

// simple route
// app.get("/", (req, res) => {
//   console.log ("hitting the slash route"); 
//   res.json({ message: "Welcome to Viewing Party" });
// });

require("./routes/routes.js")(app);

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, './build/index.html'))
});

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});


