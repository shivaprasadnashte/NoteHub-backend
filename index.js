import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./src/db/connectBd.js";
import notesRouter from "./src/routes/notes.route.js";
import groupRouter from "./src/routes/group.routes.js";

dotenv.config();
const app = express();
app.use(cors());
connectDB();
app.use(express.json());

const port =process.env.PORT || 3000
app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use("/api", notesRouter);
app.use("/api", groupRouter);
 
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
