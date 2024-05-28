const mongoose = require("mongoose");

const {ObjectId} = mongoose.Schema.Types



const uiDesgnSchema = new mongoose.Schema({
    name : {
        type:String,
        require:true
    },
    desc:{
        type: String,
        require:true
    },
    link:{
        type: String,
        require:true
    },
    pic : {
        type:String,
        require : true,
        // default : "no photo"
    }
})

mongoose.model("UIDESIGN" , uiDesgnSchema)