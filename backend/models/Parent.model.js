const { Schema, model } = require("mongoose");

const parentSchema = new Schema(
  {
    email: {
    type: String,
    required: true,
    unique: true
    },
    password: {
      type: String,
      required: true,
    },
    name: String,
    profile_image: String,
    city: String,
    age: Number,
    childName: String,
    childAge: Number,
    Relation: String,
    // posts: [{type: Schema.Types.ObjectId, ref: "Post"}]
  },
  {
    timeseries: true,
    timestamps: true,
  }
);

const Parent = model("User", parentSchema);

module.exports = Parent;