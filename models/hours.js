const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const hoursSchema = new Schema({
  employee: { type: String },
  department: { type: String },
  eventtype: { type: String },
  hourscompleted: { type: Number },
  date: { type: Date, default: Date.now }
});

const Hours = mongoose.model("Hours", hoursSchema);

module.exports = Hours;
