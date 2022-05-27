const express=require('express');
const con=require("./conMysql");
const app=express();



app.use(express.json());


app.get('/',async (req,res)=>{
    const data=await con.query("select * from parts",(err,result)=>{
        if(err)
          res.send("Error came:",err);
        else{
            res.send(result);
        }  
    });
   
});

app.post('/',(req,res)=>{
  
    const data=req.body;

    con.query("insert into parts SET ?",data,(err,result,field)=>{
        if(err) console.log(err);
        else
           res.send(result);
    })
});

app.put('/',(req,res)=>{
  
    const data=req.body;

    con.query("update parts SET pname= ? ,cid =?, cname=? where pid=?",data,(err,result,field)=>{
        if(err) console.log(err);
        else
           res.send(result);
    })
});


app.delete('/:id',(req,res)=>{
    
    con.query("delete from parts where pid=" + req.params.id,(err,result)=>{
        if(err) throw err;
        else
          res.send(result);
    })
})

app.listen(4000);