import {test, expect} from '@playwright/test';
import { HomePage } from '../pages/homePage';
import { Header } from '../pages/header';
import { SignIn } from '../pages/signIn';
import { SocialAuth } from '../pages/socialAuth';

test.describe('Авторизація', () => {
    let homePage: HomePage;
    let header: Header;
    let socialAuth: SocialAuth;
    let signIn: SignIn;

    test.beforeEach(async({page})=>{
        homePage = new HomePage(page);
        header = new Header(page);
        signIn = new SignIn(page);
        socialAuth = new SocialAuth(page);
        await homePage.visit();
        await homePage.verifyTitle();
        await header.clickSignIn();
    });

        test('Успішна авторизація', async({page})=>{
            await signIn.fillFieldEmail('letoyi7925@betzenn.com');
            await signIn.fillFieldPassword('Test1234+');
            await signIn.clickSignInButton();
            await signIn.verifyUserMenu();
        });

        test('Авторизація при вводі не існуючого email', async({page})=>{
            await signIn.fillFieldEmail('letoyi7925betzenn.com');
            await signIn.fillFieldPassword('Test1234+');
            await signIn.clickSignInButton();
            await signIn.errorEmailText('The email field must be a valid email address.');
        });

         test('Авторизація при вводі не валідного паролю', async({page})=>{
            await signIn.fillFieldEmail('letoyi7925@betzenn.com');
            await signIn.fillFieldPassword('Test12348+');
            await signIn.clickSignInButton();
            await signIn.errorPasswordText('Invalid email or password');
        });
















});