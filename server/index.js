import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import Message from "./Message.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("MongoDB connected"))
    .catch((err) => console.log("MongoDB error:", err));

// POST route - save message
app.post("/api/contact", async (req, res) => {
    try {
        const { name, email, message } = req.body;

        // Save to database
        const newMessage = new Message({ name, email, message });
        await newMessage.save();

        res.status(200).json({ success: true, message: "Message saved successfully" });
    } catch (error) {
        res.status(500).json({ success: false, message: "Server error" });
    }
});

// GET route - view all messages (optional, to check messages)
app.get("/api/messages", async (req, res) => {
    try {
        const messages = await Message.find().sort({ createdAt: -1 });
        res.status(200).json(messages);
    } catch (error) {
        res.status(500).json({ success: false, message: "Server error" });
    }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));