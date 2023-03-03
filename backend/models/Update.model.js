const { Schema, model } = require("mongoose");

// parent getting updates

const updateSchema = new Schema(
  {
      name: String,
      profile_image: String,
      city: String,
      age: Number,
      childName: String,
      childAge: Number,
      game: String,
      status: String,
      date: String,
    // posts: [{type: Schema.Types.ObjectId, ref: "Post"}]
  },
  {
    timeseries: true,
    timestamps: true,
  }
);

const Update = model("Update", updateSchema);

module.exports = Update;