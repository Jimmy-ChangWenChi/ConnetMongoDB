const posts = {
    // async getPosts(req,res){ 如果不傳物件, 檔案順序要一致
    // },
    async getPosts({res, req}){ // 傳物件的話, 檔案順序可以亂排, 名稱要跟傳的一樣
    },

    async createPost({req,res,body}){

    },
    async updatePost(){

    }
}

module.exports = posts;