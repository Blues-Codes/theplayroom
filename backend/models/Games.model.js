const { Schema, model } = require("mongoose");

const gameSchema = new Schema(
  {
    title: String,
    description: String,
    original_location: String,
    cover_image: String,
    Play_link: string

  },
  {
    timeseries: true,
    timestamps: true,
  }
);

const Games = model("Games", childSchema);

module.exports = Games;