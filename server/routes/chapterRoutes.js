const express = require("express");

const router = express.Router();

const Chapter = require("../models/Chapter");


// CREATE
router.post("/", async (req, res) => {

    try {

        const chapter = await Chapter.create(req.body);

        res.status(201).json(chapter);

    } catch (error) {

        res.status(500).json({ error: error.message });

    }

});


// GET ALL
router.get("/", async (req, res) => {

    try {

        const chapters = await Chapter.find();

        res.json(chapters);

    } catch (error) {

        res.status(500).json({ error: error.message });

    }

});


// DELETE
router.delete("/:id", async (req, res) => {

    try {

        await Chapter.findByIdAndDelete(req.params.id);

        res.json({ message: "Chapter deleted" });

    } catch (error) {

        res.status(500).json({ error: error.message });

    }

});


module.exports = router;