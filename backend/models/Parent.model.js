const { Schema, model } = require("mongoose");

const parentSchema = new Schema(
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

const Parent = model("User", parentSchema);

module.exports = Parent;