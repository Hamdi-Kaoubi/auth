const product=require('./productModel')
exports.getProduct=async(req,res)=>{
    try {
        const prod= await product.find().populate('userId')
        return  res.status(200).send({msg:"we have it",prod})
    } catch (error) {
        return res.status(500).send(error)
    }
}

exports.postProduct= async(req,res)=>{
    try {
        const prod=new product({...req.body,userId:req.user.id})
        await prod.save()
      return  res.status(200).send({msg:"product added",prod})
    } catch (error) {
        return res.status(500).send(error)
    }
}

exports.updateProduct=async(req,res)=>{
    try {
        const prod= await product.findByIdAndUpdate(req.params.id,{$set:{...req.body}},{new:true})
        return  res.status(200).send({msg:"product was updated",prod})
    } catch (error) {
        return res.status(500).send(error)
    }
}

exports.deleteProduct=async(req,res)=>{
    try {
        await product.findByIdAndDelete(req.params.id)
        return  res.status(200).send({msg:"product was deleted"})
    } catch (error) {
        return res.status(500).send(error)
    }
}
exports.myproducts=async(req,res)=>{
    try {
        const prod=await product.find({userId:req.user.id})
        return  res.status(200).send({msg:"your product ",prod})
    } catch (error) {
        return res.status(500).send(error)
    }
}