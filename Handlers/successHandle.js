const Header = require("./Header/Headers")

function successHanlde(res,posts,message){
    res.writeHead(200,Headers);
    res.write(JSON.stringify({
        "status":"success",
        posts,
        "message":message
    }))
}

module.exports = successHanlde
