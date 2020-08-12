interface IPingerResult {
    delayMS: number;
    resBody: string;
}

interface ISite {
    url: string;

    getPingMS(): IPingerResult;
}

abstract class Site implements ISite {
    url: string;
    active: boolean;
    private _protocol: string = 'none://';

    constructor(url: string, active: boolean) {
        this.url = url;
        this.active = active;
    }

    getPingMS(): IPingerResult {
        return { delayMS: 462, resBody: '<html>...</html>' };
    }

    get protocol(): string {
        return this._protocol + ' (get)';
    }

    set protocol(protocol: string) {
        this._protocol = protocol + ' (set)';
    }
}

class HttpsSite extends Site {
}


const mesSites: ISite[] = [
    new HttpsSite('www.perdu.com', true),
    new HttpsSite('www.retrouvé.com', false)
];

mesSites.forEach((site, index) => {
    console.log(`---------------------------`);
    console.log(`Le terme recherché dans le site n°${index} '${site.url}' est '${(<Site> site).protocol}'.`);
    (<Site> site).protocol = 'https://';
    console.log(`Le terme recherché dans le site n°${index} '${site.url}' est '${(<Site> site).protocol}'.`);
    const pingResult = site.getPingMS();
    console.log(`Le ping a reçu '${pingResult.resBody}' en ${pingResult.delayMS} ms.`);
});

