import express  from "express";
import { createNote, deleteNote, getNotes, shareNote, shareNoteByGrpId } from "../controllers/notes.controller.js";

const notesRouter = express.Router();

notesRouter.get("/notes", getNotes);
notesRouter.post("/notes", createNote);
notesRouter.delete("/notes/:id", deleteNote);
notesRouter.get("/notes/:id", shareNote);
notesRouter.get("/notes/group/:id", shareNoteByGrpId);


export default notesRouter;
  