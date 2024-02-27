import express from "express";
import Note from "../models/notes.model.js";

export const createNote = async (req, res) => {
  try {
    const { content,group } = await req.body;
    if (!content || !group) {
      return res.status(400).json({ message: "Please enter all fields" });
    }
    const note = new Note({
      content,
      group,
    });
    note.save();
    res.status(201).json({ message: "Note created successfully" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

export const getNotes = async (req, res) => {
  try {
    const notes = await Note.find();
    res.status(200).json(notes);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

export const deleteNote = async (req, res) => {
  try {
    const { id } = req.params;
    const note = await Note.findOneAndDelete({ _id: id });
    res.json(note);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

export const shareNote = async (req, res) => {
  try {
    const { id } = req.params;
    const note = await Note.findById({ _id: id });
    if (!note) {
      return res.status(400).json({ message: "Note note found" });
    } else {
      // return res.status(200).json({ message: "Note shared successfully" });
      return res.status(200).json(note);
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};


