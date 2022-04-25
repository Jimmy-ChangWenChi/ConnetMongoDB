const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });

//設定資料庫資料
const DB = process.env.MONGODB.replace('<password>', process.env.PW);
//連線資料庫
mongoose.connect(DB)
    .then(() => {
        console.log("資料庫連線成功")
    })
    .catch((error) => {
        console.log(error);
    })