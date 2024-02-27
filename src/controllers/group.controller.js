import express from "express";
import Group from "../models/group.model.js";

export const creatreGroup = async (req, res) => {
  try {
    const { name, color } = await req.body;
    if (!name || !color) {
      return res.status(400).json({ message: "All input is required" });
    }
    const group = new Group({
      name,
      color,
    });
    await group.save();
    res.send("Create Group");
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ message: "Server Error" });
  }
};

export const getGroups = async (req, res) => {
  try {
    const groups = await Group.find();
    return res.status(200).json(groups);
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ message: "Server Error" });
  }
};
 
export const deleteGroup = async (req, res) => {
  try {
    const { id } = req.params;
    const group = await Group.findOneAndDelete({ _id: id });
    res.json(group);
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ message: "Server Error" });
  }
};  

export const updateGroup = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, color } = req.body;
    const group = await Group.findOneAndUpdate({ _id: id }, { name, color });
    res.json(group);
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ message: "Server Error" });
  }
};

export const shareGroup = async (req, res) => {
  try {
    const { id } = req.params;
    const group = await Group.findById({ _id: id });
    res.json(group);
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ message: "Server Error" });
  }
};

export const searchGroup = async (req, res) => {
  try {
    const { name } = req.params ;
    const groups = await Group.find({ name: name});
    res.json(groups);
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ message: "Server Error" });
  }
};
