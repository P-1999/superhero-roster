var VotePage = require('../page-objects/vote_page')
var LoginPage = require('../page-objects/login_page')

describe('Vote page', function () {
    var votePage
    var loginPage

    beforeEach(function () {
        votePage = new VotePage()
        loginPage = new LoginPage()

        browser.ignoreSynchronization = true

        browser.get('file:///C:/protractor/superhero/index.html')
    })
    afterEach(function () {

    })

    fit('should display all elements in voting section', function () {
        loginPage.emailFld.sendKeys('preciousaka@gmail.com')
        loginPage.passwordFld.sendKeys('fakepassword')
        loginPage.submitBtn.click()

        expect(votePage.voteTitleTxt.isDisplayed()).toBe(true)
        expect(votePage.voteTitleTxt.getText()).toEqual('')

        expect(votePage.xmenChioceRed.isDisplayed()).toBe(true)
        expect(votePage.xmenChioceRed.getText()).toEqual('')

        expect(votePage.avengersChioceRed.isDisplayed()).toBe(true)
        expect(votePage.avengersChioceRed.getText()).toEqual('')

        expect(votePage.deadpoolChioceRed.isDisplayed()).toBe(true)
        expect(votePage.deadpoolChioceRed.getText()).toEqual('')

        expect(votePage.spidermanChioceRed.isDisplayed()).toBe(true)
        expect(votePage.spidermanChioceRed.getText()).toEqual('')

        expect(votePage.ironmanChioceRed.isDisplayed()).toBe(true)
        expect(votePage.ironmanChioceRed.getText()).toEqual('')

        expect(votePage.submitBtn.isDisplayed()).toBe(true)
        expect(votePage.submitBtn.getText()).toEqual('')

        expect(votePage.movieLbl.isDisplayed()).toBe(true)
        expect(votePage.movieLbl.getText()).toEqual('')

        expect(votePage.voteLbl.isDisplayed()).toBe(true)
        expect(votePage.voteLbl.getText()).toEqual('')

        expect(votePage.xmenLbl.isDisplayed()).toBe(true)
        expect(votePage.xmenLbl.getText()).toEqual('')

        expect(votePage.xmenVal.isDisplayed()).toBe(true)
        expect(votePage.xmenVal.getText()).toEqual('')

        expect(votePage.avengersLbl.isDisplayed()).toBe(true)
        expect(votePage.avengersLbl.getText()).toEqual('')

        expect(votePage.avengersVal.isDisplayed()).toBe(true)
        expect(votePage.avengersVal.getText()).toEqual('')

        expect(votePage.deadpoolLbl.isDisplayed()).toBe(true)
        expect(votePage.deadpoolLbl.getText()).toEqual('')

        expect(votePage.deadpoolVal.isDisplayed()).toBe(true)
        expect(votePage.deadpoolVal.getText()).toEqual('')

        expect(votePage.spidermanLbl.isDisplayed()).toBe(true)
        expect(votePage.spidermanLbl.getText()).toEqual('')

        expect(votePage.spidermanLbl.isDisplayed()).toBe(true)
        expect(votePage.spidermanLbl.getText()).toEqual('')

        expect(votePage.ironmanLbl.isDisplayed()).toBe(true)
        expect(votePage.ironmanLbl.getText()).toEqual('')

        expect(votePage.ironmanVal.isDisplayed()).toBe(true)
        expect(votePage.ironmanVal.getText()).toEqual('')



    })
})