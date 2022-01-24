const express = require("express");
const cors = require("cors");
const dbConfig = require("./config/db.config");

const app = express();

const corsOptions = {
  origin: "http://localhost:8081",
};

app.use(cors(corsOptions));
// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// open Mongoose connection to MongoDB database
const db = require("./models");
const Role = db.role;

db.mongoose
  .connect(`mongodb+srv://${dbConfig.HOST}:${dbConfig.PORT}/${dbConfig.DB}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Successfully connect to MongoDB.");
    initial();
  })
  .catch((err) => {
    console.error("Connection error", err);
    process.exit();
  });
// create rows in roles collection
initial = () => {
  Role.estimatedDocumentCount((err, count) => {
    if (!err && count === 0) {
      new Role({
        name: "user",
      }).save((err) => {
        if (err) console.log("error", err);
        console.log("added 'user' to roles collection");
      });

      new Role({
        name: "admin",
      }).save((err) => {
        if (err) console.log("error", err);
        console.log("added 'admin' to roles collection");
      });
    }
  });
};

// route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to memory-booster application." });
});
app.get("/login", (req, res) => {
  res.json({ message: "You are loged in to memory-booster application." });
});

// routes
require("../backend/routes/auth.routes")(app);
require("../backend/routes/user.routes")(app);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
