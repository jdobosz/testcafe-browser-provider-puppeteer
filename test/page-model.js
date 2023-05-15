import {Selector} from 'testcafe';

export default class Page {
    constructor() {
        this.Title = Selector('head > title');
    }
}
