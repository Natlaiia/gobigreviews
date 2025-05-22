import {test, expect} from '@playwright/test';
import { HomePage } from '../pages/homePage';
import { Header } from '../pages/header';
import { SignIn } from '../pages/signIn';
import { SignInExternal } from '../pages/signInExternal';
import { SignUp } from '../pages/signUp';
import { ReCaptcha } from '../pages/reCaptcha';

test('Успішна реєстрація з валідними даними', async({page})=>{


}); // + перенаправлення до наступної сторінки

// ✅ Успішна реєстрація з валідними даними (усі поля заповнені коректно)

// ✅ Перевірка, що після реєстрації користувач перенаправляється до правильної сторінки (наприклад, Dashboard)

// ✅ Перевірка, що в базі/сесії створюється новий користувач

// ✅ Перевірка, що після реєстрації користувач автоматично логіниться (якщо це реалізовано)

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


// ❌ Спроба реєстрації без заповнення обов’язкових полів (всі або окремі)

// ❌ Невалідна email-адреса (наприклад, test@, test.com)

// ❌ Пароль занадто короткий або не відповідає вимогам

// ❌ Повторне введення email, який вже зареєстровано

// ❌ Введення різних значень в поля "Password" та "Confirm Password"

// ❌ Відсутність згоди з умовами (якщо є checkbox Terms and Conditions)