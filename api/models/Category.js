const mongoose=require("mongoose")

const CategotySchema=new mongoose.Schema({
    name:{
        type:String,
        required : true,
    }
},
    {timestamps: true}
);

module.exports=mongoose.model("Category",CategotySchema);