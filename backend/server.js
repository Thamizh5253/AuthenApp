const express = require("express");
const bodyParser = require("body-parser");
 
const cors = require("cors");
const app = express();
const port = 3003;
let likeCount = process.env.LIKE ? parseInt(process.env.LIKE, 10) : 0;
// Middleware to parse JSON requests
app.use(bodyParser.json());
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
// Enable CORS for all routes
app.use(cors());
// Simple array to store user credentials (for demonstration purposes)
const users = [
  { username: "user1", password: "password1" },
  { username: "user2", password: "password2" },
  { username: "tham", password: "123" },
  { username: "Tom", password: "Jerry" },
  { username: "Admin", password: "123" },
];

// Login route
app.post("/login", (req, res) => {
  const { uid, password } = req.body;
  console.log(uid, password);
  // Check if the provided credentials match any user
  const user = users.find((u) => u.username === uid && u.password === password);

  if (user) {
    // Successful login
    res.status(200).json({ message: "Login successful" });
  } else {
    // Failed login
    res.status(206).json({ message: "Invalid credentials" });
  }
});

app.post("/signup", (req, res) => {
  const { ruid, rpassword } = req.body;
  console.log(ruid, rpassword);
  // Check if the provided credentials match any user
  //   const user = users.find((u) => u.username === uid && u.password === password);
  const existingUser = users.find((u) => u.username === ruid);

  if (existingUser) {
    res.status(200).json({ message: "Username already exists" });
  } else {
    //   Add the new user to the array
    users.push({ username: ruid, password: rpassword });
    console.log(users);
    res.status(201).json({ message: "User created successfully" });
  }
});

// Simulating the like count

// Middleware to parse JSON requests
app.use(express.json());

// Endpoint to get the like count
app.get("/api/like-count", (req, res) => {
  res.json({ likes: likeCount });
  console.log(likeCount);
});

// Endpoint to increment the like count (for demonstration purposes)
app.post("/api/increment-like", (req, res) => {
  console.log(likeCount);
  likeCount += 1;
  res.status(200).json({ likes: likeCount });
  console.log("after:", likeCount);
});


// const data = {
//   message: "Hello from the server!",
// };
app.get("/api/wdata", (req, res) => {
  res.json(process.env.W_KEY);
 


});

// Start the server

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
