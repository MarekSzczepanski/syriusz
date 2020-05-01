const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const imagesSchema = new Schema({
  src: String,
});

const Syriusz_urn = mongoose.model("Syriusz_urns", imagesSchema);

module.exports = Syriusz_urn;
