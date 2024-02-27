import express from "express";
import {
  creatreGroup,
  deleteGroup,
  getGroups,
  searchGroup,
  shareGroup,
  updateGroup,
} from "../controllers/group.controller.js";

const groupRouter = express.Router();

groupRouter.get("/group", getGroups);
groupRouter.post("/group", creatreGroup);
groupRouter.delete("/group/:id", deleteGroup);
groupRouter.put("/group/:id", updateGroup);
groupRouter.get("/group/:id", shareGroup);
groupRouter.get("/group/search/:name", searchGroup);

export default groupRouter;
