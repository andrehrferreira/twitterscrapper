# Youtube Scraper

Scraper for Twitter

## Install

```bash
$ npm install @ehnosso/twitterscrapper
```

or

```bash
$ yarn add @ehnosso/twitterscrapper
```

## Usage

```js
const crawl = require('@ehnosso/twitterscrapper');

(async () => {
    const data = await crawl.get('https://twitter.com/ratoborrachudo');

})()
```