const express = require("express");
const router = express.Router();
const Set = require("../schema/setSchema");

router.route("/").get((req, res) => {
  Set.find((err, set) => {
    if (err) console.log(err);
    else res.send(set);
  });
});

router.route("/:_id").get((req, res) => {
  const { _id } = req.params;
  Set.findOne({ _id }, (err, set) => {
    if (err) console.log(err);
    else res.send(set);
  });
});

router.route("/create").post((req, res) => {
  const { name, ids } = req.body;

  const setInfo = new Set({
    name,
    ids,
  });

  setInfo.save().then((set) => {
    res.json(set);
  });
});

router.route("/update/:_id").patch((req, res) => {
  const { _id } = req.params;
  const { name, ids } = req.body;

  Set.updateOne({ _id }, { $set: { name, ids } }, (err, set) => {
    if (err) console.log(err);
    else res.redirect(`/set/${_id}`);
  });
});

router.route("/delete/:_id").patch((req, res) => {
  const { _id } = req.params;

  Set.deleteOne({ _id }, (err, set) => {
    if (err) console.log(err);
    else res.redirect(`/set`);
  });
});

module.exports = router;
