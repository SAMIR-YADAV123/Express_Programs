module.exports = reqfe=(req,res,next)=>{
    if(!req.query.age){
        res.send("Please enter the age");
      }
    else if(req.query.age<18){
        res.send("Sorry you cannot access this page");
       }
    else {
      next();
    }
}