import { $ } from '@wdio/globals'
import Page from './page.js';

class LoginPage extends Page {
    public get inputUsername () {
        return $('//android.widget.EditText[@resource-id="com.saucelabs.mydemoapp.android:id/nameET"]');
    }

    public get inputPassword () {
        return $('//android.widget.EditText[@resource-id="com.saucelabs.mydemoapp.android:id/passwordET"]');
    }

    public get inputLogin () {
        return $('~Login Menu Item');
    }

    public get btnMenuId () {
        return $('~View menu');
    }

    public get btnSubmit () {
        return $('~Tap to login with given credentials');
    }

    public async open () {
        await browser.pause(5000); 
    }

    public async openMenu () {
        await this.btnMenuId.click();
    }

    public async openLogin () {
        await this.inputLogin.click();
    }

    public async login (username: string, password: string) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }
}

export default new LoginPage();
