const Song = require("../models/songs");
const { Router } = require("express");
const router = Router();

router.get("/", async (req, res) => {
    res.json(await Song.find({}));
  });

router.post("/", async (req, res) => {
    res.json(await Song.create(req.body));
  });

router.delete("/:id", async (req, res) => {
    res.json(await Song.findByIdAndRemove(req.params.id));
  });

module.exports = router