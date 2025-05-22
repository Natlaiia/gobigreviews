import {test, expect} from '@playwright/test';
import { HomePage } from '../pages/homePage';
import { Header } from '../pages/header';
import { SignIn } from '../pages/signIn';
import { SignInExternal } from '../pages/socialAuth';
import { SignUp } from '../pages/signUp';

test('Успішна реєстрація з валідними даними', async({page})=>{


}); 

test('Можливість зареєструватись через Sign In Google', async({page})=>{


});

test('Можливість зареєструватись через Sign In FaceBook', async({page})=>{


});



test('Спроба реєстрації з невалідними даними', async({page})=>{


});

test('Спроба реєстрації, при не заповнені полів', async({page})=>{


});

test('Спроба реєстрації, користувача, що вже був зареєстрованим', async({page})=>{


});