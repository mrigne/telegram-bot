import * as TelegramBot from 'node-telegram-bot-api';
import * as config from './config/bot-config.json';
import { Handlers } from './handlers/handlers';
import * as yargs from 'yargs';

const args = yargs.argv;
const telegramApiToken = args.telegram_token as string || config.telegram.api_token;

const telegramBot = new TelegramBot(telegramApiToken, {
    polling: true
});

const handlers = new Handlers(telegramBot);
handlers.addHandlersListeners();
