import {test} from '@playwright/test';
import { HomePage } from '../pages/homePage';
import { Header } from '../pages/header';

test.describe('Перевірка Header', () => {
    let homePage: HomePage;
    let header: Header;

    test.beforeEach(async({page})=>{
        homePage = new HomePage(page);
        header = new Header(page);
        await homePage.visit();
        await homePage.verifyTitle();
    });

    test.afterEach(async({page})=>{
        await page.close();
    });

test('Перевірка відображення логотипу та банеру меню', async({page})=>{
    await header.verifyLogo();
    await header.verifyBannerMenu();
});

test('Перевірка вкладок навігаційного меню', async({page})=>{
    await header.verifyTabHome();
    await header.verifyTabAbout();
    await header.verifyTabHowItWorks();
    await header.verifyTabPricing();
    await header.verifyTabTryToFree();
    await header.verifySignIn();
});
});