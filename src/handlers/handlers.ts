import * as TelegramBot from 'node-telegram-bot-api';
import { BashHelper } from './helpers/bash.helper';
import { CatGifHelper } from './helpers/cat-gif.helper';

export class Handlers {

    constructor(private telegramBot: TelegramBot) {}

    private helpCommandResponse = 'Available commands: \n' +
        ' /bash - random quote from bash.im\n' +
        ' /cat - random gif with cat\n' +
        ' /help - show this message';

    public addHandlersListeners(): void {
        this.addBashQuoteHandler();
        this.addCatGifHandler();
        this.addHelpCommandHandler();
    }

    private addBashQuoteHandler(): void {
        this.telegramBot.onText(/\/bash/, msg => {
            const chatId = msg.chat.id;
            BashHelper.getRandomBashQuote().then(quote => {
                this.telegramBot.sendMessage(chatId, quote);
            });
        });
    }

    private addCatGifHandler(): void {
        this.telegramBot.onText(/\/cat/, msg => {
            const chatId = msg.chat.id;
            CatGifHelper.getRandomCatGif().then(gifData => {
                this.telegramBot.sendDocument(chatId, gifData.buffer, {}, {
                    filename: gifData.name,
                    contentType: gifData.mime
                });
            });
        });
    }

    private addHelpCommandHandler(): void {
        this.telegramBot.onText(/\/help/, msg => {
            const chatId = msg.chat.id;
            this.telegramBot.sendMessage(chatId, this.helpCommandResponse);
        });
    }
}
