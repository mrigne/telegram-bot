import fetch from 'node-fetch';
import { IGifData } from '../../interfaces/gif-data.interface';

export class CatGifHelper {
    private static randomGifUrl = 'https://cataas.com/cat/gif';

    public static async getRandomCatGif(): Promise<IGifData> {
        return {
            buffer: await CatGifHelper.getGifBuffer(CatGifHelper.randomGifUrl),
            name: CatGifHelper.getGifName(),
            mime: 'image/gif'
        }
    }

    private static getGifName(prefix = 'cat'): string {
        return `${prefix}-${new Date().toISOString()}.gif`;
    }

    private static async getGifBuffer(gifUrl: string): Promise<Buffer> {
        const response = await fetch(gifUrl);
        const arrayBuffer = await response.arrayBuffer();
        return Buffer.from(arrayBuffer);
    }
}
