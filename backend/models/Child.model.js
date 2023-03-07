const { Schema, model } = require("mongoose");

const childSchema = new Schema(
  {
    name: String,
    age: Number,
    gamesPlayed: [ String ],
  },
  {
    timeseries: true,
    timestamps: true,
  }
);

const Child = model("Child", childSchema);

module.exports = Child;