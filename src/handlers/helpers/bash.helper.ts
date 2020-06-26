import fetch from 'node-fetch';
import { parse } from 'node-html-parser';
import { RandomHelper } from '../../utils/random.helper';
import { HtmlHelper } from '../../utils/html.helper';

export class BashHelper {
    private static bashQuoteCssSelector = 'section.quotes article.quote div.quote__body';

    public static async getRandomBashQuote(): Promise<string> {
        const response = await fetch('https://bash.im/random');
        const quotes = BashHelper.getQuotesFromRawHtml(await response.text());
        return RandomHelper.getRandomArrayElement(quotes);
    }

    private static getQuotesFromRawHtml(rawHtml: string): string[] {
        const parsedHtml = parse(rawHtml);
        const quotesHtmlElements = parsedHtml.querySelectorAll(BashHelper.bashQuoteCssSelector);
        return quotesHtmlElements.map(quoteHtmlElement => {
            const quoteSafeHtmlWithoutBr = HtmlHelper.replaceBrWithNewLine(quoteHtmlElement.innerHTML);
            return HtmlHelper.unescapeHtml(quoteSafeHtmlWithoutBr);
        });
    }
}
