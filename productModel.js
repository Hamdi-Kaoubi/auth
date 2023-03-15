const mongoose=require('mongoose')
const product= new mongoose.Schema({
    product:String,
    imageUrl:String,
    quantity:{type:Number,required:true},
    pannier:Boolean,
    userId:{type:mongoose.Schema.Types.ObjectId,ref:'user'}
})
module.exports=mongoose.model('product',product)