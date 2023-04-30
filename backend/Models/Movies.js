const mongoose = require("mongoose");

const MoviesSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String },
//    posted_by:{}
        img: { type: String },
        img_title: { type: String },
        img_sm: { type: String },
        trailer: { type: String },
        video: { type: String },
        year: { type: String },
        limit: { type: Number },
        genre: { type: String },
    isSeries:{type:Boolean,default:false}
  },
  { timestamps: true }
);

module.exports = mongoose.model("Movies", MoviesSchema);
