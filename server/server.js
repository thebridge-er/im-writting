const mongoose = require("mongoose");

const express = require("express");

const cors = require("cors");

require("dotenv").config();

const chapterRoutes = require("./routes/chapterRoutes");

const app = express();

/* MIDDLEWARES */

app.use(cors({
    origin: "http://localhost:5173"
}));

app.use(express.json());

/* MONGODB CONNECTION */

mongoose.connect(process.env.MONGO_URI)

    .then(() => {

        console.log("MongoDB connected");

    })

    .catch((error) => {

        console.log(error);

    });

/* ROUTES */

app.use("/api/chapters", chapterRoutes);

/* TEST ROUTE */

app.get("/", (req, res) => {

    res.json({
        message: "API running!"
    });

});

/* PORT */

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {

    console.log(`Server running on port ${PORT}`);

});