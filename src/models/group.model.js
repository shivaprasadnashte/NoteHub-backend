import mongoose from "mongoose";

const groupSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  notes: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Note",
    },
  ],
  color: {
    type: String,
    default: "#ffffff",
  },
});

const Group = mongoose.model("Group", groupSchema);
export default Group;