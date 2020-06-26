export class HtmlHelper {
    public static unescapeHtml(safeHtml: string): string {
        return safeHtml
            .replace(/&amp;/g, "&")
            .replace(/&lt;/g, "<")
            .replace(/&gt;/g, ">")
            .replace(/&quot;/g, "\"")
            .replace(/&#039;/g, "'");
    }

    public static replaceBrWithNewLine(htmlWithBr: string): string {
        return htmlWithBr.replace(/<br>/g, '\n');
    }
}
