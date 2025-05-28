import {test, expect} from '@playwright/test';
import { HomePage } from '../pages/homePage';
import { Header } from '../pages/header';
import { SignIn } from '../pages/signIn';
import { SocialAuth } from '../pages/socialAuth';
import { SignUp } from '../pages/signUp'; 
//const registrationData = require('../data/registrationData.json');  JSON варіант
// import { generateRandomUser } from '../utils/generate'; //Random варіант
import { generateRandomUser } from '../utils/fakerGenerate'; //Faker варіант
import { generateRandomInvalidData } from '../utils/generate';

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
    // const { name, email, password, repeatPassword } = registrationData.validUser; JSON варіант
    
    //const user = generateRandomUser(); //Random варіант
    
    const user = generateRandomUser(); //faker варіант

await signUp.verifyLogoSignUp();

// await signUp.fillFieldName(user.name); //Random варіант
// await signUp.fillFieldEmail(user.email); //Random варіант
// await signUp.fillFieldPassword(user.password); //Random варіант
// await signUp.fillFieldRepeatPassword(user.password); //Random варіант

// await signUp.fillFieldName(name); JSON варіант
// await signUp.fillFieldEmail(email); JSON варіант
// await signUp.fillFieldPassword(password); JSON варіант
// await signUp.fillFieldRepeatPassword(repeatPassword); JSON варіант

await signUp.fillFieldName(user.name); // Faker варіант
await signUp.fillFieldEmail(user.email); // Faker варіант
await signUp.fillFieldPassword(user.password); // Faker варіант
await signUp.fillFieldRepeatPassword(user.password); // Faker варіант

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
  
  const user = generateRandomInvalidData(); //faker варіант
  await signUp.fillFieldName(user.name);
  await signUp.fillFieldEmail(user.email);
  await signUp.fillFieldPassword(user.password);
  await signUp.fillFieldRepeatPassword(user.password);
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