const express = require("express");
const path = require("path");
const logger = require("./pract2");
const app = express();

// app.get('/',(req,res)=>{
//     // res.send("<h1>SAMIR YADAV</h1>");
//     res.sendFile(path.join(__dirname,'index.html'));
// })

const members = [
  { id: 1, name: "samir", reg: 40111119 },
  { id: 2, name: "sumit", reg: 40111239 },
];

// const logger =(req,res,next)=>{
// console.log(`${req.protocol}://${req.get('host')}${req.originalUrl}`);
// next();
// }

// Init middleware
app.use(logger);

// Get all member
 app.get('/app/members/:id',(req,res)=> res.json(members));

// Get single member
app.get("/api/members/:id", (req, res) => {
  const found = members.some((member) => member.id === parseInt(req.params.id));
  if (found) {
    res.json(members.filter((member) => member.id === parseInt(req.params.id)));
  } else {
    res.status(400).json({ msg: "Member not found" });
  }
});

// app.get('/api/members',(req,res)=>{
//     res.json(members);
// });

// Set static folder
// app.use(express.static(path.join(__dirname)));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});
