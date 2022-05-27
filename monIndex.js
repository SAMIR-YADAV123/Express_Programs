const mongoose =require('mongoose');

 mongoose.connect("mongodb://0.0.0.0:27017/ecom");
const productSchema= mongoose.Schema({
    name:String,
    price:Number,
    brand:String,
    category:String
});

const SaveIndb=async ()=>{
    
    //Creating Model in mongoose

    const productModel=new mongoose.model('products',productSchema);

    let data=new productModel({name:'qwer',price:2323,brand:"Vivo",category:'A'}); // nly two field will add as in as schema is defined
     let res= await data.save();
   console.log(res);
}

const uppdateIndb=async () =>{
   const Product = new mongoose.model('products',productSchema);

     let data=await Product.updateOne(
         {name:'sonu'},
         {$set:{price:333}});

         console.log(data);
};N

const deleteIndb=async ()=>{
    const Product =new mongoose.model('products',productSchema);

    let data=await Product.deleteOne({name:"qwer"});
    console.log(data);
}

const findIndb=async ()=>{
    const Product =new mongoose.model('products',productSchema);

    let data=await Product.find({name:'e'});
    console.log(data);
}

findIndb();

