const { Schema, model } = require("mongoose");

const childSchema = new Schema(
  {
    name: String,
    age: Number,
    gamesPlayed: {type: Schema.Types.ObjectId, ref: "Update"},
  },
  {
    timeseries: true,
    timestamps: true,
  }
);

const Child = model("Child", childSchema);

module.exports = Child;