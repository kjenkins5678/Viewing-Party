// **********************************************
// **********************************************

const express = require ("express"); 
const bodyParser = require ("body-parser");
const cors = require ("cors"); 
const app = express(); 
var corsOptions = {
  origin: "http://localhost:8081"
}
const db = require ("./models"); 
db.sequelize.sync();

app.use(cors(corsOptions)); 
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
  console.log ("hitting the slash route"); 
  res.json({ message: "Welcome to Viewing Party" });
});

require("./routes/routes.js")(app);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});


