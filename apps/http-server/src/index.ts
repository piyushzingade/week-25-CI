import express from "express";
import { client } from "@repo/prisma/client";
const app = express();

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use(express.json());

app.post("/signup",  async (req, res) => {
  const { username, password } = req.body;
  const user = await client.user.create({
    data: { username, password },
  });
  
  res.status(201).json({ 
    success: true,
    id: user.id,
    message: "User created successfully" 
  });   
});



app.listen(3000, () => {
  console.log("Server is running on port 3000");
}); 


