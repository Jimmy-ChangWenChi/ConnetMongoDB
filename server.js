const http = require("http");
const mongoose = require("mongoose");
const POST = require("./models/posts");
const dotenv = require("config.env");
dotenv.config({ path:"./config.env"});

//設定資料庫資料
const DB = process.env.MONGODB.replace('<password>',process.env.PW);
//連線資料庫
mongoose.connect(DB)
    .then(() =>{
        console.log("資料庫連線成功")
    })
    .catch((error) => {
        console.log(error);
    })
const requestListener = async function(req,res){
    let body = "";
    req.on("data", chuck => {
        body += chuck;
    })
    

}

//建立 server
const server = http.createServer(requestListener);

server.listen(process.env.SERVERPORT);