const getConnect = require("./mongocon");

const update = async () => {
  const db = await getConnect();

  const res = await db.updateOne(
    { name: "samir" },

    { $set: { price: 300 ,brand:"realme"} }
  );

  console.log(res);
};

update();
