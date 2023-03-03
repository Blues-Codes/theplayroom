const { Schema, model } = require("mongoose");

// parent getting updates

const updateSchema = new Schema(
  {
    // email: {
    // type: String,
    // required: true,
    // unique: true
    // },
    // password: {
    //   type: String,
    //   required: true,
    // },
    // name: String,
    // profile_image: String,
    // city: String,
    // age: Number,
    // countries_visited: [{type: Schema.Types.ObjectId, ref: "Country"}],
    // posts: [{type: Schema.Types.ObjectId, ref: "Post"}]
  },
  {
    timeseries: true,
    timestamps: true,
  }
);

const Update = model("User", updateSchema);

module.exports = Update;