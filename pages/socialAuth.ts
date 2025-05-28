import {expect, Page, Locator} from '@playwright/test';
import { BasePage } from '../methods/basePageOld';
export class SocialAuth {
    readonly page:Page;
    readonly basePage:BasePage;
    readonly signInWithGoogle:Locator;
    readonly signInWithFacebook:Locator;

    constructor (page:Page){
        this.page=page;
        this.basePage=new BasePage(page);
        this.signInWithGoogle=page.locator('a[href="/auth/google"]');
        this.signInWithFacebook=page.locator('a[href="/auth/facebook"]');
    }

    async clickSignInWithGoogle(){
        await this.basePage.expectVisible(this.signInWithGoogle);
        await this.basePage.expectHasAttribute(this.signInWithGoogle, 'href', '/auth/google');
        await this.basePage.clickElement(this.signInWithGoogle);
    }
    async clickSignInWithFacebook(){    
        await this.basePage.expectVisible(this.signInWithFacebook);
        await this.basePage.expectHasAttribute(this.signInWithFacebook, 'href', '/auth/facebook');
        await this.basePage.clickElement(this.signInWithFacebook);
    }
}