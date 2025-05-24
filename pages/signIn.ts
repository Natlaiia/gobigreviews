import {Page, Locator} from '@playwright/test';
import { BasePage } from '../methods/basePage';
export class SignIn {
    readonly page:Page;
    readonly basePage:BasePage;
    readonly fieldEmail:Locator;
    readonly fieldPassword:Locator;
    readonly signUpLink:Locator;
    readonly passwordError: Locator;
    readonly emailError: Locator;
    readonly signInButton:Locator;
    readonly signInLogo:Locator;
    readonly checkboxRememberMe:Locator;
    readonly userMenu:Locator;
    readonly ForgotPasswordLink:Locator;
    
    constructor (page:Page){
        this.page=page;
        this.basePage=new BasePage(page);
        this.signInLogo=page.locator('');
        this.fieldEmail=page.locator('input[name="email"]');
        this.fieldPassword=page.locator('input[name="password"]');
        this.emailError = page.locator('');
        this.passwordError = page.locator('');
        this.signUpLink=page.locator('a[href="/register"]');
        this.signInButton=page.locator('button[type="submit"]');
        this.checkboxRememberMe=page.locator('');
        this.userMenu=page.locator('#kt_header_user_menu_toggle');
        this.ForgotPasswordLink=page.locator('');
    }
    async fillFieldEmail(email: string){
        await this.basePage.expectVisible(this.fieldEmail);
        await this.basePage.expectHasAttribute(this.fieldEmail, 'name', 'email');
        await this.basePage.fillInput(this.fieldEmail, email, 'Введення email');
    }
    async fillFieldPassword(password: string){
        await this.basePage.expectVisible(this.fieldPassword);
        await this.basePage.expectHasAttribute(this.fieldPassword, 'name', 'password');
        await this.basePage.fillInput(this.fieldPassword, password, 'Введення пароля');
    }
    async verifySignUpButton(){
        await this.basePage.expectVisible(this.signInButton);
        await this.basePage.expectHasAttribute(this.signInButton, 'type', 'submit');
    }
    async clickSignUpButton(){
        await this.basePage.clickElement(this.signInButton);
    }  
    async verifySignInLogo(){
        await this.basePage.expectVisible(this.signInButton);
    }
    async clickSignUpLink(){
        await this.basePage.clickElement(this.signUpLink);
    }
    async verifySignUpLink(){
        await this.basePage.expectVisible(this.signUpLink);
        await this.basePage.expectHasAttribute(this.signUpLink, 'href', '/register');
    }
    async verifyUserMenu(){
        await this.basePage.expectVisible(this.userMenu);
        await this.basePage.expectHasAttribute(this.userMenu, 'id', 'kt_header_user_menu_toggle');
    }
    async verifyCheckboxRememberMe(){
        await this.basePage.expectVisible(this.checkboxRememberMe);
        await this.basePage.expectHasAttribute(this.checkboxRememberMe, );  
    }
    async clickCheckboxRememberMe(){
        await this.basePage.clickElement(this.signUpLink);
    }
    async verifyForgotPasswordLink(){

    }
    async clickForgotPasswordLink(){

    }
 }


 //Треба дозаповнити локатори та методи + написати тести