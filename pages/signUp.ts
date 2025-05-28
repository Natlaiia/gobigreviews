import {Page, Locator} from '@playwright/test';
import { BasePage } from '../methods/basePageOld';
export class SignUp extends BasePage{
    readonly logoSignUp:Locator;
    readonly fieldName:Locator;
    readonly fieldEmail:Locator;
    readonly fieldPassword:Locator;
    readonly fieldRepeatPassword:Locator;
    readonly checkboxAcceptTerm:Locator;
    readonly checkboxSubscribe:Locator;
    readonly signInLink:Locator;
    readonly termsLink:Locator;
    readonly sighUpButton:Locator;
    readonly nameError: Locator;
    readonly emailError: Locator;
    readonly passwordError: Locator;
    readonly repeatPasswordError: Locator;
    readonly termsError: Locator;
    readonly emailExistsError: Locator;

    constructor (page:Page){
        super(page);
        this.logoSignUp=page.locator('form h1');
        this.fieldEmail=page.locator('input[name="email"]');
        this.fieldName=page.locator('input[name="name"]');
        this.fieldPassword=page.locator('input[name="password"]');
        this.fieldRepeatPassword=page.locator('input[name="confirm-password"]');
        this.checkboxAcceptTerm=page.locator('input[name="toc"]');
        this.termsLink=page.locator('a[href="/terms_and_conditions"]');
        this.checkboxSubscribe=page.locator('input[type="checkbox"].font-weight-light');
        // this.checkboxSubscribe=page.locator('.form-check-input.font-weight-light');
        this.signInLink=page.locator('a[href="/login"]');
        this.sighUpButton=page.locator('button[type="submit"]');
        this.nameError = page.locator('[data-testid="signup-name-error"]');
        this.emailError = page.locator('[data-testid="signup-email-error"]');
        this.passwordError = page.locator('[data-testid="signup-password-error"]');
        this.repeatPasswordError = page.locator('[data-testid="signup-repeat-password-error"]');
        this.termsError = page.locator('[data-testid="signup-terms-error"]');
        this.emailExistsError = page.locator('[data-testid="signup-email-exists-error"]');
    }

    async verifyLogoSignUp(){
        await this.expectVisible(this.logoSignUp);
        await this.expectHasAttribute(this.logoSignUp, 'class', 'text-gray-900 fw-bolder mb-3');
    }
    async fillFieldName(name: string){
        await this.expectVisible(this.fieldName);
        await this.expectHasAttribute(this.fieldName, 'name', 'name');
        await this.fillInput(this.fieldName, name, 'Введення імені');
    }
    async fillFieldEmail(email: string){
        await this.expectVisible(this.fieldEmail);
        await this.expectHasAttribute(this.fieldEmail, 'name', 'email');
        await this.fillInput(this.fieldEmail, email, 'Введення email');
    }
    async fillFieldPassword(password: string){
        await this.expectVisible(this.fieldPassword);
        await this.expectHasAttribute(this.fieldPassword, 'name', 'password');
        await this.fillInput(this.fieldPassword, password, 'Введення пароля');
    }
    async fillFieldRepeatPassword(password: string){
        await this.expectVisible(this.fieldRepeatPassword);
        await this.expectHasAttribute(this.fieldRepeatPassword, 'name', 'confirm-password');
        await this.fillInput(this.fieldRepeatPassword, password, 'Введення пароля');
    }       
    async verifyCheckboxAcceptTerm(){
        await this.expectVisible(this.checkboxAcceptTerm);
        await this.expectHasAttribute(this.checkboxAcceptTerm, 'name', 'toc');
    }
    async clickCheckboxAcceptTerm(){
        await this.clickElement(this.checkboxAcceptTerm);
    }
    async verifyCheckboxSubscribe(){
        await this.expectVisible(this.checkboxSubscribe);
        await this.expectHasAttribute(this.checkboxSubscribe, 'class', 'form-check-input font-weight-light');
    }
    async clickCheckboxSubscribe(){
        await this.clickElement(this.checkboxSubscribe);
    }
    async verifySignInLink(){
        await this.expectVisible(this.signInLink);
        await this.expectHasAttribute(this.signInLink, 'href', '/login');
    }
    async clickSignInLink(){
        await this.clickElement(this.signInLink);
    }
    async verifyTermsLink(){
        await this.expectVisible(this.termsLink);
        await this.expectHasAttribute(this.termsLink, 'href', '/terms_and_conditions');  
    }
    async clickTermsLink(){
        await this.clickElement(this.termsLink);
    }
    async verifySighUpButton(){
        await this.expectVisible(this.sighUpButton);
        await this.expectHasAttribute(this.sighUpButton, 'type', 'submit');
    }
    async clickSignUpButton(){
        await this.clickElement(this.sighUpButton)
    }  
}