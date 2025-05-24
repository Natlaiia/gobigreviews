import {Page, Locator} from '@playwright/test';
import { BasePage } from '../methods/basePage';
export class Header extends BasePage {
    // readonly page:Page;
    // readonly basePage:BasePage;
    readonly logo:Locator;
    readonly tabHome:Locator;
    readonly tabAbout:Locator;
    readonly tabHowItWorks:Locator;
    readonly tabPricing:Locator;
    readonly tabContact:Locator;
    readonly tabTryToFree:Locator;
    readonly tabSignIn:Locator;
    readonly bannerMenu:Locator;

constructor (page:Page){
    super(page);
    this.logo=page.locator('img[src="/assets-landing/img/logo-white.webp"]').first();
    this.tabHome=page.locator('a[href="#slide"]').first();
    this.tabAbout=page.locator('a[href="#about"]').first();
    this.tabHowItWorks=page.locator('a[href="#main_features"]').first();
    this.tabPricing=page.locator('a[href="#prices"]').first();
    this.tabContact=page.locator('a[href="#git_in_touch"]').first();
    this.tabTryToFree=page.locator('a[href="/register"]').first();
    this.tabSignIn=page.locator('a[href="/login"]').first();
    this.bannerMenu=page.locator('#foxapp_menu');
}

async verifyLogo (){
    await this.expectVisible(this.logo);
    await this.clickElement(this.logo)
}
async verifyTabHome (){
    await this.expectVisible(this.tabHome);
    await this.expectHasAttribute(this.tabHome, 'href', '#slide');
}
async verifyTabAbout (){
    await this.expectVisible(this.tabAbout);
    await this.expectHasAttribute(this.tabAbout, 'href', '#about');
}
async verifyTabHowItWorks (){
    await this.expectVisible(this.tabHowItWorks);
    await this.expectHasAttribute(this.tabHowItWorks, 'href', '#main_features');
}
async verifyTabPricing (){
    await this.expectVisible(this.tabPricing);
    await this.expectHasAttribute(this.tabPricing, 'href', '#prices');
}
async verifyTabContact (){
    await this.expectVisible(this.tabContact);
    await this.expectHasAttribute(this.tabContact, 'href', '#git_in_touch');
}
async verifyTabTryToFree (){
    await this.expectVisible(this.tabTryToFree);
    await this.expectHasAttribute(this.tabTryToFree, 'href', '/register');
}
async verifySignIn (){
    await this.expectVisible(this.tabSignIn);
    await this.expectHasAttribute(this.tabSignIn, 'href', '/login'); 
}
async clickSignIn(){
    await this.clickElement(this.tabSignIn);
}
async verifyBannerMenu(){
    await this.expectVisible(this.bannerMenu);
    await this.expectHasAttribute(this.bannerMenu, 'id', 'foxapp_menu');
}
}



