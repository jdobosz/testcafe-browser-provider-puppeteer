import {Selector} from 'testcafe';

export default class Page {
    constructor() {
        this.Header = Selector('div > header > h1');
    }
}