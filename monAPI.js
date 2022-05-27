const express=require('express');
const app=express();

const product=require('./monapischema');

app.use(express.json());

app.post('/create',(req,res)=>{
    console.log(req.body);
    let data=new product(req.body);
     data.save();

    res.send(data); 
});

app.get('/list',async (req,res)=>{

    let data=await product.find({});
    res.send(data);
    console.log(data);
});

app.delete('/delet/:id',async (req,res)=>{

      let data=await product.deleteOne(req.params);
      res.send(data);
    
});

app.put('/update/:id',async (req,res)=>{

    let data=await product.updateOne(req.params,
                                  {$set:req.body});
    res.send(data);
  
});





app.listen(1000);
