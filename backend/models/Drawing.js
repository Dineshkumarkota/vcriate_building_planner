import mongoose from "mongoose";

const shapeSchema = new mongoose.Schema({
  x: Number,
  y: Number,
  width: Number,
  height: Number
});

const drawingSchema = new mongoose.Schema({
  shapes: [shapeSchema],
  createdAt: {
    type: Date,
    default: Date.now
  }
});

export default mongoose.model("Drawing", drawingSchema);
