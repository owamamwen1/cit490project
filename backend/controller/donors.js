const router = require("express").Router();
const User = require("../models/user");
const Donor = require("../models/donor");

//CREATE POST
router.post("/", async (req, res) => {
  const newDonor = new Donor(req.body);
  try {
    const savedDonor = await newDonor.save();
    res.status(200).json(savedDonor);
  } catch (err) {
    res.status(500).json(err);
  }
});

//UPDATE DONOR
router.put("/:id", async (req, res) => {
  try {
    const donor = await Donor.findById(req.params.id);
    if (donor.username === req.body.username) {
      try {
        const updatedDonor = await Donor.findByIdAndUpdate(
          req.params.id,
          {
            $set: req.body,
          },
          { new: true }
        );
        res.status(200).json(updatedDonor);
      } catch (err) {
        res.status(500).json(err);
      }
    } else {
      res.status(401).json("You can update only your post!");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

//DELETE DONOR
router.delete("/:id", async (req, res) => {
  try {
    const donor = await Donor.findById(req.params.id);
    if (donor.username === req.body.username) {
      try {
        await donor.delete();
        res.status(200).json("Donor has been deleted...");
      } catch (err) {
        res.status(500).json(err);
      }
    } else {
      res.status(401).json("You can delete only your donor!");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET DONOR
router.get("/:id", async (req, res) => {
  try {
    const donor = await Donor.findById(req.params.id);
    res.status(200).json(donor);
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET ALL DONORS
router.get("/", async (req, res) => {
  const username = req.query.user;
  const catName = req.query.cat;
  try {
    let donors;
    if (username) {
        donors = await Donor.find({ username });
    } else if (catName) {
        donors = await Donor.find({
        categories: {
          $in: [catName],
        },
      });
    } else {
        donors = await Donor.find();
    }
    res.status(200).json(donors);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
