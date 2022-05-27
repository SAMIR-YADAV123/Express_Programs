const getConnect=require("./mongocon");

//Reading of data from databases
// getConnect().then((resp)=>{
//     resp.find().toArray().then((data)=>{
//         console.log(data);
//     });
// })

const insert = async ()=>{
      const db=await getConnect();
         //Insert one data
      const res= await db.insert({name:"son",brand:"yad",price:655,category:"Villen"});

    //Inserting many data
    //   const res= await db.insert([
    //       {name:"samir",brand:"yadav",price:0,category:"Villen"},
    //       {name:"sagar",brand:"yadav",price:345,category:"Villen"},
    //       {name:"sonu",brand:"yadav",price:344,category:"Villen"}
    //   ]);
     

      if(res.acknowledged){
          console.log("data inserted");
      }
}

insert();