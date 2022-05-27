const express=require('express');
const path=require('path');

const app=express();

const pl=path.join(__dirname,"about.html");

app.set("view engine",'ejs');


app.get('/index',(req,res)=>{
    const user={
        name:'Samir',
        age:20,
        email:'samaryadav8750@gmail.com',
        skills:['c++','C','Python','Html']
    };

    res.render('index',{user});
});

app.get('/login',(req,res)=>{
    res.render('login');
});

app.listen(3000);
