import axios from "axios";
import * as  jssoup from '@aghajari/jssoup';
export default class News {
    get base_url(): string {
        return this._base_url;
    }

    set base_url(value: string) {
        this._base_url = value;
    }

    get endpoint() {
        return this._endpoint;
    }

    set endpoint(value) {
        this._endpoint = value;
    }

    private _base_url = 'https://exame.com';
    private _endpoint = "/noticias-sobre/moedas/";
    public async getNews() {
        return this.refine(await this.html())

    }

    private async html(): Promise<any> {
        const res = await axios.get(this._base_url + this._endpoint);
        return res.data;
    }

    private refine(html: any) {
        const response = [];
        const news = jssoup.load(html).find('.sc-2f06e235-12 .eLXeLv');
        for (let i = 0; i < news.length; i++) {
            const content = news[i].findFirst('.touch-area')
            response.push({title: content.plainText(), link: this._base_url + content.getValue('href')})
        }
        return response;
    }
}

const n = new News();
n.base_url = "https://exame.com";
n.endpoint = "/noticias-sobre/moedas/";
console.log(n.getNews().then((r) => console.log('Conteudo', r)))