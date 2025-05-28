import {test, expect} from '@playwright/test';
import { HomePage } from '../pages/homePage';
import { Header } from '../pages/header';
import { SignIn } from '../pages/signIn';
import { SocialAuth } from '../pages/socialAuth';
const registrationData = require('../data/registrationData.json'); // JSON варіант
import { generateRandomInvalidData } from '../utils/generate'; //Faker варіант

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
        const registrationData = require('../data/registrationData.json');
    });

        test('Успішна авторизація', async({page})=>{
            const { email, password } = registrationData.validUser; //JSON варіант
            await signIn.fillFieldEmail(email);
            await signIn.fillFieldPassword(password);
            await signIn.clickSignInButton();
            await signIn.verifyUserMenu();
        });

        test('Авторизація при вводі не існуючого email', async({page})=>{
            const user = generateRandomInvalidData(); //faker варіант
            const { password } = registrationData.validUser; // JSON варіант
            await signIn.fillFieldEmail(user.email);
            await signIn.fillFieldPassword(password);
            await signIn.clickSignInButton();
            await signIn.errorEmailText('The email field must be a valid email address.');
        });

         test('Авторизація при вводі не валідного паролю', async({page})=>{
            const user = generateRandomInvalidData(); //faker варіант
            const { email } = registrationData.validUser; //JSON варіант
            await signIn.fillFieldEmail(email);
            await signIn.fillFieldPassword(user.password);
            await signIn.clickSignInButton();
            await signIn.errorPasswordText('Invalid email or password');
        });
















});