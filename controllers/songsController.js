const Song = require("../models/song");
const { Router } = require("express");
const router = Router();

router.get("/", async (req, res) => {
    res.json(await Song.find({}));
  });

router.put("/:id", async (req, res) => {
    res.json(await Song.findByIdAndUpdate(req.params.id, req.body, { new: true }));
  });

router.post("/", async (req, res) => {
    res.json(await Song.create(req.body));
  });

router.delete("/:id", async (req, res) => {
    res.json(await Song.findByIdAndRemove(req.params.id));
  });

module.exports = router