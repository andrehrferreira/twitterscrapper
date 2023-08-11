const axios = require("axios");
const fs = require("fs");

class CrawlYT {
    constructor(){
        this.data = {};
    }

    async get(url){
        try{
            const raw = (await axios.get(url)).data;
            const dataRaw = /window.__INITIAL_STATE__=(.*);window.__META_DATA__/.exec(raw)?.[1] || "{}";
            fs.writeFileSync("data.html", raw);
            const twInitialData = JSON.parse(dataRaw);            
            fs.writeFileSync("data.json", JSON.stringify(twInitialData, null, 4));
            return this;
        }
        catch(e){
            this.data = {};
        }
    }

    getTweets(){
        let tweets = [];
       
        return tweets;
    }
}

module.exports = new CrawlYT();