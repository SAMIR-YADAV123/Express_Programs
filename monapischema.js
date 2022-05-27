const mongoose=require('mongoose');
mongoose.connect("mongodb://0.0.0.0:27017/ecom");
const obj=new  mongoose.Schema({
    name:String,
    price:Number,
   brand:String,
   category:String
});

module.exports=mongoose.model('products',obj);
