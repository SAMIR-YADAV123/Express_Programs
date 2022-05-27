const express = require("express");
const getConnect=require('./mongocon');
const app=express();

const mongo=require("mongodb");

app.use(express.json());

//Get method is used to read data from database

app.get('/',async (req,res)=>{
   let data=await getConnect();
    data= await data.find().toArray();
    // console.log(data);
    res.send(data);
})


//post method is used to add data into database

app.post('/',async (req,res)=>{
  let db=await getConnect();
    const data=req.body;
    db.insert(data);

})

//put method is used to update the data in databases

app.put('/',async(req,res)=>{
    let db=await getConnect();

    let result=await db.updateOne({name:req.body.name},{$set:req.body})
    console.log(req.body);
})

//delete method is used to delete tyhe data from databases


app.delete('/:id',async(req,res)=>{
    let db=await getConnect();

    // db.deleteOne({name:req.body.name});
    const result=await db.deleteOne({_id: new mongo.ObjectId(req.params.id)});
    console.log(result);
})
app.listen(3000);