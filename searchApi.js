const express=require('express');
const app=express();

const product=require('./monapischema');

app.use(express.json());


app.get("/search/:key",async (req,res)=>{
    
//   let data=await product.find();
   console.log(req.params.key);
    let data=await product.find({
          "$or":[
              {"name":{$regex:req.params.key}}
          ]
    })

    res.send(data);

});

app.listen(4000);
