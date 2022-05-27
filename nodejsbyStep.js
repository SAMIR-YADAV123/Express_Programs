// const as=require("./step1");
// for(var i=0;i<5;i++){
//     console.log(as[i]," ");
// }

// const res = require('express/lib/response');
// const http=require('http');
// port=5000;
// http.createServer((req,res)=>{
//  res.writeHead(200,{'content-type':'application\json'});
//  res.write(JSON.stringify({name:'samir yadav',age:20},{name:"sagar yadav",age:25}));

// }).listen(port,()=>{
  
//     console.log(`server is running on ${port}`);
// });
// console.log(process.argv[2]);

const fs=require("fs");
const path=require("path");
// const input=process.argv;

// if(input[2]=="add"){
//     fs.writeFileSync(input[3],input[4]);
// }else if(input[2]=="remove"){
//     fs.unlinkSync(input[3]);
// }else{
//     console.log("invalid input")
// }

//Read operation
// const flpath=path.join(__dirname,'as.txt');
// console.log(fs.readFile(flpath,'utf8',(err,data)=>{
//     console.log(data);
// }))

//Update files using appendFile

// fs.appendFile(flpath,"atajkhsjd",(err)=>{
//     if(!err) console.log("updated");
// });

// console.log("first one");

// setTimeout(()=>{
//     console.log("second one");
// },2000);

// setTimeout(()=>{
//     console.log("second one");
// },2000);

// setTimeout(()=>{
//     console.log("third one");
// },0);

// console.log("fourth one");