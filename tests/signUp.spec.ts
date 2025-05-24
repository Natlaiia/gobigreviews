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
    let signUp: SignUp;

    test.beforeEach(async({page})=>{
        homePage = new HomePage(page);
        header = new Header(page);
        signIn = new SignIn(page);
        socialAuth = new SocialAuth(page);
        signUp = new SignUp(page);
        await homePage.visit();
        await homePage.verifyTitle();
        await header.clickSignIn();
        await signIn.clickSignUpLink();
    });

    test.afterEach(async({page})=>{
        await page.close();
    });

test('Успішна реєстрація з валідними даними', async({page})=>{
await signUp.verifyLogoSignUp();
await signUp.fillFieldName('Test Name');
await signUp.fillFieldEmail('test.test@gmail.com');
await signUp.fillFieldPassword('Qwer1234+');
await signUp.fillFieldRepeatPassword('Qwer1234+');
await signUp.verifyCheckboxAcceptTerm();
await signUp.clickCheckboxAcceptTerm();
await signUp.verifyCheckboxSubscribe();
await signUp.verifySighUpButton();
await signUp.clickSignUpButton();
}); 

test('Посилання на Terms and Conditions працює', async({page})=>{
    await signUp.verifyTermsLink();
});

test('Посилання на Log In працює', async({page})=>{
    await signUp.verifySignInLink();
});

test('Можливість зареєструватись через Sign In Google', async({page})=>{
await socialAuth.clickSignInWithGoogle();
});

test('Можливість зареєструватись через Sign In FaceBook', async({page})=>{
await socialAuth.clickSignInWithFacebook();
});

test('Спроба реєстрації з невалідними даними', async ({ page }) => {
  await signUp.fillFieldName('');
  await signUp.fillFieldEmail('invalid-email');
  await signUp.fillFieldPassword('123');
  await signUp.fillFieldRepeatPassword('321');
  await signUp.verifyCheckboxAcceptTerm();
  await signUp.clickCheckboxAcceptTerm();
  await signUp.verifyCheckboxSubscribe();
  await signUp.verifySighUpButton();
//   await signUp.clickSignUpButton();
//   await signUp.expectVisible(signUp.nameError, 'Перевірка помилки імені');
//   await signUp.expectText(signUp.emailError, 'Invalid email', 'Перевірка помилки email');
//   await signUp.expectText(signUp.passwordError, 'Too short', 'Перевірка помилки пароля');
//   await signUp.expectText(signUp.repeatPasswordError, 'Passwords do not match', 'Перевірка помилки повторного пароля');
});
});