const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const adminSchema = new Schema(
    {
        username: { type: String },
        password: { type: Number },
    },
    {
        timestamps: true,
    }
);

const Admin = mongoose.model("Admin",adminSchema);
module.exports=Admin;