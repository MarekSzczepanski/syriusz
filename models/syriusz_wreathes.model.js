const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const imagesSchema = new Schema({
  src: String,
});

const Syriusz_wreath = mongoose.model("Syriusz_wreathes", imagesSchema);

module.exports = Syriusz_wreath;
