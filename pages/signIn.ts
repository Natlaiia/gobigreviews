import {expect, Page, Locator} from '@playwright/test';
import { BasePage } from '../methods/basePage';
export class SignIn {
    readonly page:Page;
    readonly basePage:BasePage;
    
readonly signUpLink:Locator;

    constructor (page:Page){
        this.page=page;
        this.basePage=new BasePage(page);
        this.signUpLink=page.locator('a[href="/register"]');
    }

async clickSignUpLink(){
    await this.basePage.expectVisible(this.signUpLink);
    await this.basePage.expectHasAttribute(this.signUpLink, 'href', '/register');
    await this.basePage.clickElement(this.signUpLink);
}
}