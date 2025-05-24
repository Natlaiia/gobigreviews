import {test, expect} from '@playwright/test';
import { HomePage } from '../pages/homePage';
import { Header } from '../pages/header';
import { SignIn } from '../pages/signIn';
import { SocialAuth } from '../pages/socialAuth';
import { SignUp } from '../pages/signUp';   

test.describe('Реєстрація', () => {
    let homePage: HomePage;
    let header: Header;
    let signIn: SignIn;
    let socialAuth: SocialAuth;

    test.beforeEach(async({page})=>{
        homePage = new HomePage(page);
        header = new Header(page);
        signIn = new SignIn(page);
        socialAuth = new SocialAuth(page);
        await homePage.visit();
        await homePage.verifyTitle();
        await header.clickSignIn();
        await signIn.clickSignUpLink();
    });

    test.afterEach(async({page})=>{
        await page.close();
    });

// test('Успішна реєстрація з валідними даними', async({page})=>{


// }); 

test('Можливість зареєструватись через Sign In Google', async({page})=>{
await socialAuth.clickSignInWithGoogle();
});

test('Можливість зареєструватись через Sign In FaceBook', async({page})=>{
await socialAuth.clickSignInWithFacebook();
});

// test('Спроба реєстрації з невалідними даними', async({page})=>{


// });

// test('Спроба реєстрації, при не заповнені полів', async({page})=>{


// });

// test('Спроба реєстрації, користувача, що вже був зареєстрованим', async({page})=>{


// });
});