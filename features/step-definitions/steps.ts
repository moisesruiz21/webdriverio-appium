import { Given, When } from '@wdio/cucumber-framework';

import LoginPage from '../pageobjects/login.page.js';

Given(/^I am on the login page$/, async () => {
    await LoginPage.openMenu();
    await LoginPage.openLogin();
});

When(/^I login with (.*) and (.*)$/, async (username: string, password: string) => {
    await LoginPage.login(username, password);
});

