export class GameScryptUtils {

    public static baseRequestUrl() {
        return 'http://localhost:8080/' + this.getAnotate() + 'be/';
        // return 'https://gamescrypt.com/be/';
    }

    public static getAnotate(forRequest?) {
        return (forRequest) ? 'WTA' : 'WTA/';
        // return (forRequest) ? this.guid() : '';
    }

    public static guid() {
        const guid = 'xxxxyxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
            // tslint:disable-next-line: no-bitwise
            const r = Math.random() * 16 | 0;
            // tslint:disable-next-line: no-bitwise
            const v = (c === 'x' ? r : (r & 0x3 | 0x8));
            return v.toString(16);
        });
        return guid;
    }
}
