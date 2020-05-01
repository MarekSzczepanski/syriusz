const router = require("express").Router();
const Syriusz_coffins = require("../../models/syriusz_coffins.model");
const Syriusz_urns = require("../../models/syriusz_urns.model");
const Syriusz_wreathes = require("../../models/syriusz_wreathes.model");

router.route("/coffins_list").get((req, res) => {
  Syriusz_coffins.find()
    .then((images) => res.json(images))
    .catch((err) => res.status(400).json("Error: " + err));
});
router.route("/urns_list").get((req, res) => {
  Syriusz_urns.find()
    .then((images) => res.json(images))
    .catch((err) => res.status(400).json("Error: " + err));
});
router.route("/wreathes_list").get((req, res) => {
  Syriusz_wreathes.find()
    .then((images) => res.json(images))
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
