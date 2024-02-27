import express  from "express";
import { createNote, deleteNote, getNotes, shareNote } from "../controllers/notes.controller.js";

const notesRouter = express.Router();

notesRouter.get("/notes", getNotes);
notesRouter.post("/notes", createNote);
notesRouter.delete("/notes/:id", deleteNote);
notesRouter.get("/notes/:id", shareNote);


export default notesRouter;
