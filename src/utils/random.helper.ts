export class RandomHelper {
    public static getRandomArrayElement<T>(array: T[]): T {
        return array[Math.floor(array.length * Math.random())];
    }
}
