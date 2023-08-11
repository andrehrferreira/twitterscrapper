const crawl = require('./index');

(async () => {
    const data = await crawl.get('https://twitter.com/ratoborrachudo');
    const tweets = data.getTweets();
    console.log(tweets);

})()