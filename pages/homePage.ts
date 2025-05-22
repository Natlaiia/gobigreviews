import {expect, Page} from '@playwright/test';
export class HomePage {
    readonly page:Page;

    constructor (page:Page){
        this.page=page;
    }
    async visit(){
        await this.page.goto('/')
        await expect(this.page).toHaveURL('https://gobigreviews.com/');
    } 

    async verifyTitle(){
        await expect(this.page).toHaveTitle('Boost Reviews and Sales | Gobigreviews');
    }
}

