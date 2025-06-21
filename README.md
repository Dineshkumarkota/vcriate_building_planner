# 🏗️ Building Planner App

A full-stack web application where users can draw shapes (rectangles), move and resize them, and view annotations like length and width — just like planning a real-world building layout.

This app includes a canvas for drawing, a toolbar for switching tools, and backend support to **save** your drawing and **load** it later using an ID.

---

## 🚀 Features

- ✏️ Draw rectangles by clicking and dragging on the canvas
- 🔁 Select and move/resize/delete shapes
- 📐 View dimensions (annotations) of the shapes
- 💾 Save your drawing to MongoDB
- 🔄 Load a drawing anytime using its unique Drawing ID
- 🧠 Built with React, Node.js, Express, and MongoDB

---

## 📸 Screenshots



![Drawing](./Screenshot%202025-06-21%20155239.png)  
![Drawing](./Screenshot%202025-06-21%20155341.png)  
![Annotations](./Screenshot%202025-06-21%20155356.png)  
![Save Alert](./Screenshot%202025-06-21%20155411.png)
![load](./Screenshot%202025-06-21%20155429.png)

---

## 🧱 Tech Stack

| Layer        | Tech                 |
|--------------|----------------------|
| Frontend     | React (with Context) |
| Backend      | Node.js + Express    |
| Database     | MongoDB (Mongoose)   |
| Styling      | CSS / Inline Styles  |
| API Handling | Axios                |

---

## 📁 Folder Structure
building-planner/
├── client/ # React Frontend
│ ├── components/ # Toolbar, Canvas, ShapeRenderer
│ ├── context/ # ToolContext for global tool state
│ └── services/ # Axios API methods
├── server/ # Backend - Express + MongoDB
│ ├── controllers/ # Drawing save/load handlers
│ ├── models/ # Mongoose schema
│ ├── routes/ # API routes
│ ├── .env.example # Env variable sample
│ └── server.js # Entry point
├── README.md # You’re reading it 😄

---

## 🛠️ How to Run the App

### 1️⃣ Frontend Setup

```bash
cd client
npm install
npm start

### 2️⃣ Backend Setup

cd server
npm install
node server.js

Requires a MongoDB connection URI

Create a .env file inside the /server folder with:
MONGO_URI=your_mongodb_connection_string_here
You can get this from:

MongoDB Atlas

Or use your local MongoDB server

See .env.example for the required format.


🧪 Example Test Flow
Draw 2–3 rectangles on canvas

Click “💾 Save” → Get a Drawing ID

Refresh the page

Click “⬇️ Load” and enter the saved ID

Watch your layout get reloaded perfectly 🧙‍♂️