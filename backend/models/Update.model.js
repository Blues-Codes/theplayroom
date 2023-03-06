const { Schema, model } = require("mongoose");

// parent getting updates

const updateSchema = new Schema(
  {
      childName: String,
      childAge: Number,
      gamesPlayed: String,
      status: String,
      date: String,
    updates: [{type: Schema.Types.ObjectId, ref: "Child"}]
  },
  {
    timeseries: true,
    timestamps: true,
  }
);

const Update = model("Update", updateSchema);

module.exports = Update;