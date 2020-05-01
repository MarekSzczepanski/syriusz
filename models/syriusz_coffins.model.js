const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const imagesSchema = new Schema({
  src: String,
});

const Syriusz_coffin = mongoose.model("Syriusz_coffins", imagesSchema);

module.exports = Syriusz_coffin;
