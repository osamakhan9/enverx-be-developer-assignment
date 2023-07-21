const mongoose=require("mongoose")

const CrudSchema=mongoose.Schema({
    images:{
        type:String,
        required:true
    },
    blog_name:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
	category:{
		type:String,
		require: true
	}
})

const CrudModel=mongoose.model("Crud",CrudSchema)


module.exports=CrudModel