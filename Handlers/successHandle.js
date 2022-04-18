const Header = require("./Header/Headers")

function successHanlde(res,posts){
    res.writeHead(200,Headers);
    res.write(JSON.stringify({
        "status":"success",
        posts
    }))
}

module.exports = successHanlde
