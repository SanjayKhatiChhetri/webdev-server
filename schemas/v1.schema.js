const mongoose = require("mongoose");
const { Schema } = mongoose;

const V1Schema = new Schema({
  field1: Number,
  field2: Number,
  field3: Number,
});

const V1 = mongoose.model("V1", V1Schema);

module.exports = V1;
