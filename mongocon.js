const { MongoClient } = require("mongodb");
// const MongoClient=require("mongodb").MongoClient;

const url = "mongodb://0.0.0.0:27017/";
const client = new MongoClient(url);

const databaseN = "ecom";

//This function is used to connect with database

async function getConnect() {
  let result = await client.connect();
  let db = result.db(databaseN);
  return db.collection("products");

}

module.exports=getConnect;