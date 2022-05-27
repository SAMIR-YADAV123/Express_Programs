const getConnect=require("./mongocon");

const delet=async ()=>{
    const db=await getConnect();

    // const res=await db.deleteOne({name:"sonu",brand:"yadav"});
    const res=await db.deleteMany({name:"sonu",brand:"yad"});


    // console.log(res);
    if(res.acknowledged){
        console.log("Data deleted successfully");
    }
}
delet();