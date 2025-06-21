import Drawing from "../models/Drawing.js";

export const saveDrawing = async (req, res) => {
  try {
    const { shapes } = req.body;
    const drawing = new Drawing({ shapes });
    await drawing.save();
    res.status(201).json({ id: drawing._id });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const getDrawing = async (req, res) => {
  try {
    const drawing = await Drawing.findById(req.params.id);
    if (!drawing) return res.status(404).json({ message: "Not found" });
    res.status(200).json(drawing);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
