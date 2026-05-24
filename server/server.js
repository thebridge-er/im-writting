const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");

require("dotenv").config();

const app = express();

/* MIDDLEWARES */
app.use(cors({
    origin: "http://localhost:5173"
}));

app.use(express.json());

/* TEST ROUTE (RAÍZ) */
app.get("/", (req, res) => {
    res.json({
        message: "API running!"
    });
});

/* 🔥 RUTA DE PRUEBA (SIN chapterRoutes) */
app.use("/api/chapters", (req, res) => {
    res.json({ test: "route works" });
});

/* PORT */
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});