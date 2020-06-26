# telegram-bot
Simple Telegram bot based on [node-telegram-bot-api](https://github.com/yagop/node-telegram-bot-api).

## What bot can do?
* `/help` - print help message
* `/bash` - parse random quote from bash.im and print it
* `/cat` - send randpm cat gif

## How to use
1. Install `node.js` from https://nodejs.org/en/
2. Install `yarn` from https://yarnpkg.com/getting-started/install
3. Clone this repo ```git clone ...```
4. Install dependencies using ```yarn install``` command in root directory
5. Fill your Telegram API token in ```src/config/bot-config.json```
6. Run bot using ```yarn start``` command OR build it using ```yarn build``` - `dist` folder will be created with compiled JS file. 
To start from built folder use `NTBA_FIX_350=true node main.js` 

## Start arguments
### `--telegram-token` 
Will use provided token ignoring config file. 


`yarn start --telegram-token "YOUR_API"`

`NTBA_FIX_350=true node main.js --telegram-token "YOUR_API"`

## FAQ
#### What the `NTBA_FIX_350=true`?
This env variable is needed to remove message from console about MIME type every time GIF sent
