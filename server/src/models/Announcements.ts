import mongoose from "mongoose";

const Schema = mongoose.Schema;
//const ObjectId = Schema.ObjectId;

const AnnouncePost = new Schema({
    title: String,
    description: String,
    startingdate: Date,
});

const AnnounceModel = mongoose.model("Announce", AnnouncePost);

export default AnnounceModel;