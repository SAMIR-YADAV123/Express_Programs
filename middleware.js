const { Route } = require('express');
const express=require('express');
const app=express();
const reqfe=require('./middleout.js');

const route=express.Router();

// const reqfe=(req,res,next)=>{
//     if(!req.query.age){
//         res.send("Please enter the age");
//       }
//     else if(req.query.age<18){
//         res.send("Sorry you cannot access this page");
//        }
//     else {
//       next();
//     }
// }

// app.use(reqfe);  This is udes to apply on all pages

app.get('/',(req,res)=>{
    res.send('Welcome to home page');
});

app.get('/login',(req,res)=>{
    res.send('Welcome to home page');
});

//Apply middleware on specific page this is called single application middleware on single page

// app.get('/User',reqfe,(req,res)=>{
//     res.send('Welcome to User page');
// });

// app.get('/about',(req,res)=>{
//     res.send('Welcome to User page');
// });

//to apply on multiple pages use router

route.get('/User',reqfe,(req,res)=>{
    res.send('Welcome to User page');
});

route.get('/about',reqfe,(req,res)=>{
    res.send('Welcome to User page');
});

app.use('/',route);

app.listen(2000);


//Use of bitwise amd operator
var a,b,c;
a=2;
b=11,c=5;

if((4+5)<(b+6)){
     b=c&a;
}

console.log(b);
console.log(a+b+c);