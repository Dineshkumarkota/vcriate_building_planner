import axios from "axios";

const BASE_URL = "http://localhost:5000"; // change if using deployed server

export const saveDrawing = async (shapes) => {
  try {
    const res = await axios.post(`${BASE_URL}/drawings`, { shapes });
    return res.data.id; // return drawing ID
  } catch (err) {
    console.error("Save failed:", err);
    return null;
  }
};

export const loadDrawing = async (id) => {
  try {
    const res = await axios.get(`${BASE_URL}/drawings/${id}`);
    return res.data.shapes;
  } catch (err) {
    console.error("Load failed:", err);
    return [];
  }
};
