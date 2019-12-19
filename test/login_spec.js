// tests for Login Page

// Page Objects File
var LoginPage = require('../page-objects/login_page')

describe('Login Page Tests', function () {
    var loginPage

    beforeEach(function () {
        loginPage = new LoginPage()

        // Since this is not an Angular Site
        browser.ignoreSynchronization = true

        // Open URL
        browser.get('file:///C:/protractor/superhero/index.html')
    })

    afterEach(function () {

    })

    it('should display all Login page element', function () {
        expect(loginPage.loginTitleTxt.isDisplayed()).toBe(true)
        expect(loginPage.loginTitleTxt.getText()).toEqual('Welcome. Please Log In.')

        expect(loginPage.emailFldLbl.isDisplayed()).toBe(true)
        expect(loginPage.emailFld.isDisplayed()).toBe(true)
        expect(loginPage.emailFld.getText()).toEqual('')

        expect(loginPage.passwordFldLbl.isDisplayed()).toBe(true)
        expect(loginPage.passwordFld.isDisplayed()).toBe(true)
        expect(loginPage.passwordFld.getText()).toEqual('')

        expect(loginPage.rememberChkLbl.isDisplayed()).toBe(true)
        expect(loginPage.rememberChk.isDisplayed()).toBe(true)
        expect(loginPage.rememberChk.isSelected()).toBe(false)

        expect(loginPage.submitBtn.isDisplayed()).toBe(true)




    })

    it('should display error messege when no email and password entered', function () {
        loginPage.submitBtn.click()


        expect(loginPage.loginTitleTxt.isDisplayed()).toBe(true)
        expect(loginPage.loginTitleTxt.getText()).toEqual('Welcome. Please Log In.')
    })

    it('should display error messege when no password entered', function () {
        loginPage.emailFld.sendKeys('preciousaka@gmail.com')
        loginPage.submitBtn.click()

        expect(loginPage.loginTitleTxt.isDisplayed()).toBe(true)
        expect(loginPage.loginTitleTxt.getText()).toEqual('Welcome. Please Log In.')

    })

    it('should display error messege when no email entered', function () {
        loginPage.passwordFld.sendKeys('fakepassword')
        loginPage.submitBtn.click()

        expect(loginPage.loginTitleTxt.isDisplayed()).toBe(true)
        expect(loginPage.loginTitleTxt.getText()).toEqual('Welcome. Please Log In.')
    })

    it('should log user in', function () {
        loginPage.emailFld.sendKeys('preciousaka@gmail.com')
        loginPage.passwordFld.sendKeys('fakepassword')
        loginPage.submitBtn.click()

    })

})