import {expect, Page, Locator} from '@playwright/test';
import { BasePage } from '../methods/basePage';
export class SignUp extends BasePage{
    readonly logoSignUp:Locator;
    readonly fieldName:Locator;
    readonly fieldEmail:Locator;
    readonly fieldPassword:Locator;
    readonly fiieldRepeatPassword:Locator;
    readonly checkboxAcceptTearm:Locator;
    readonly checkboxSubscribe:Locator;
    readonly signInLink:Locator;

    
     



}