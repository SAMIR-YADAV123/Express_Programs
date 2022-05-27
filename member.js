const express=require('express');
const logger = require("./pract2");
const router=express.Router();

router.get('/app/members/:id',(req,res)=> res.json(members));

router.get("/api/members/:id", (req, res) => {
    const found = members.some((member) => member.id === parseInt(req.params.id));
    if (found) {
      res.json(members.filter((member) => member.id === parseInt(req.params.id)));
    } else {
      res.status(400).json({ msg: "Member not found" });
    }
  });

  
  router.post()