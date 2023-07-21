const Crudmodel = require("../model/Product.model");

const createPost = async(req , res)=>{
  const {images,blog_name, description,price,category} = req.body;

  try {
    await Crudmodel.create({images,blog_name, description,price,category});
    res.send({
        status: true , 
        message : 'CRUD added successfull'
    })
  } catch (error) {
    res.send({
        message : error.message,
        status: false
    })
  }
}


const getAllCrud = async(req , res)=>{
	try{
		let data = await Crudmodel.find()
		res.send(data)

	} catch(e){
		res.send(e.massage)
	}
}

const deletedCrud = async(req , res)=>{
    const {id} = req.params;
    try {
      await Crudmodel.findByIdAndDelete(id)
      res.send({
          status: true , 
          message : 'CRUD deleted successfull'
      })
    } catch (error) {
      res.send({
          message : error.message,
          status: false
      })
    }
  }    

  const editCrud = async(req , res)=>{
    const {id} = req.params;

    try {
      await Crudmodel.findByIdAndUpdate(id , {
        ...req.body.car
      })
      res.send({
          status: true , 
          message : 'CRUD updated successfull'
      })
    } catch (error) {
      res.send({
          message : error.message,
          status: false
      })
    }
  }



  module.exports = {createPost , deletedCrud , editCrud, getAllCrud}