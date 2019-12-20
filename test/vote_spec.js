var VotePage = require('../page-objects/vote_page')
var LoginPage = require('../page-objects/login_page')

fdescribe('Vote page', function () {
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

    it('should display all elements in voting section', function () {
        loginPage.emailFld.sendKeys('preciousaka@gmail.com')
        loginPage.passwordFld.sendKeys('fakepassword')
        loginPage.submitBtn.click()

        expect(votePage.voteTitleTxt.isDisplayed()).toBe(true)
        expect(votePage.voteTitleTxt.getText()).toEqual('Vote for your favorite Superhero movie')

        expect(votePage.xmenChoiceRadLbl.isDisplayed()).toBe(true)
        expect(votePage.xmenChoiceRadLbl.getText()).toEqual('X-Men')

        expect(votePage.avengersChoiceRadLbl.isDisplayed()).toBe(true)
        expect(votePage.avengersChoiceRadLbl.getText()).toEqual('Avengers')

        expect(votePage.deadpoolChoiceRadLbl.isDisplayed()).toBe(true)
        expect(votePage.deadpoolChoiceRadLbl.getText()).toEqual('Deadpool')

        expect(votePage.spidermanChoiceRadLbl.isDisplayed()).toBe(true)
        expect(votePage.spidermanChoiceRadLbl.getText()).toEqual('Spider-Man Homecoming')

        expect(votePage.ironmanChoiceRadLbl.isDisplayed()).toBe(true)
        expect(votePage.ironmanChoiceRadLbl.getText()).toEqual('Iron Man')

        expect(votePage.submitBtn.isDisplayed()).toBe(true)
        expect(votePage.submitBtn.getText()).toEqual('Submit')

        expect(votePage.movieLbl.isDisplayed()).toBe(true)
        expect(votePage.movieLbl.getText()).toEqual('Movie')

        expect(votePage.voteLbl.isDisplayed()).toBe(true)
        expect(votePage.voteLbl.getText()).toEqual('Votes')

        expect(votePage.xmenLbl.isDisplayed()).toBe(true)
        expect(votePage.xmenLbl.getText()).toEqual('X-Men')

        expect(votePage.xmenVal.isDisplayed()).toBe(true)
        expect(votePage.xmenVal.getText()).toEqual('10')

        expect(votePage.avengersLbl.isDisplayed()).toBe(true)
        expect(votePage.avengersLbl.getText()).toEqual('Avengers')

        expect(votePage.avengersVal.isDisplayed()).toBe(true)
        expect(votePage.avengersVal.getText()).toEqual('5')

        expect(votePage.deadpoolLbl.isDisplayed()).toBe(true)
        expect(votePage.deadpoolLbl.getText()).toEqual('Deadpool')

        expect(votePage.deadpoolVal.isDisplayed()).toBe(true)
        expect(votePage.deadpoolVal.getText()).toEqual('22')

        expect(votePage.spidermanLbl.isDisplayed()).toBe(true)
        expect(votePage.spidermanLbl.getText()).toEqual('Spider-Man Homecoming')

        expect(votePage.spidermanVal.isDisplayed()).toBe(true)
        expect(votePage.spidermanVal.getText()).toEqual('12')

        expect(votePage.ironmanLbl.isDisplayed()).toBe(true)
        expect(votePage.ironmanLbl.getText()).toEqual('Iron Man')

        expect(votePage.ironmanVal.isDisplayed()).toBe(true)
        expect(votePage.ironmanVal.getText()).toEqual('1')



    })

it('should add 1 to X-Men votes', function () {
        loginPage.emailFld.sendKeys('preciousaka@gmail.com')
        loginPage.passwordFld.sendKeys('fakepassword')
        loginPage.submitBtn.click()

        expect(votePage.thanksAlertTxt.isDisplayed()).toBe(false)

        votePage. xmenChoiceRad.click()
        votePage.submitBtn.click()
        expect(votePage.xmenVal.getText()).toEqual('11')
        expect(votePage.thanksAlertTxt.getText()).toEqual('Thanks for voting!')
        expect(votePage.thanksAlertTxt.isDisplayed()).toBe(true)

        expect(votePage.voteFormSection.isDisplayed()).toBe(false)
    })

    it('should add 1 to Avengers votes', function () {
        loginPage.emailFld.sendKeys('preciousaka@gmail.com')
        loginPage.passwordFld.sendKeys('fakepassword')
        loginPage.submitBtn.click()

        expect(votePage.thanksAlertTxt.isDisplayed()).toBe(false)

        votePage. avengersChoiceRad.click()
        votePage.submitBtn.click()
        expect(votePage.avengersVal.getText()).toEqual('6')
        expect(votePage.thanksAlertTxt.getText()).toEqual('Thanks for voting!')
        expect(votePage.thanksAlertTxt.isDisplayed()).toBe(true)

        expect(votePage.voteFormSection.isDisplayed()).toBe(false)
    })

  it('should add 1 to Deadpool votes', function () {
        loginPage.emailFld.sendKeys('preciousaka@gmail.com')
        loginPage.passwordFld.sendKeys('fakepassword')
        loginPage.submitBtn.click()

        expect(votePage.thanksAlertTxt.isDisplayed()).toBe(false)

        votePage. deadpoolChoiceRad.click()
        votePage.submitBtn.click()
        expect(votePage.deadpoolVal.getText()).toEqual('23')
        expect(votePage.thanksAlertTxt.getText()).toEqual('Thanks for voting!')
        expect(votePage.thanksAlertTxt.isDisplayed()).toBe(true)

        expect(votePage.voteFormSection.isDisplayed()).toBe(false)
    })

    it('should add 1 to Spider-Man Homecoming votes', function () {
        loginPage.emailFld.sendKeys('preciousaka@gmail.com')
        loginPage.passwordFld.sendKeys('fakepassword')
        loginPage.submitBtn.click()

        expect(votePage.thanksAlertTxt.isDisplayed()).toBe(false)

        votePage. spidermanChoiceRad.click()
        votePage.submitBtn.click()
        expect(votePage.spidermanVal.getText()).toEqual('13')
        expect(votePage.thanksAlertTxt.getText()).toEqual('Thanks for voting!')
        expect(votePage.thanksAlertTxt.isDisplayed()).toBe(true)

        expect(votePage.voteFormSection.isDisplayed()).toBe(false)

    })

    it('should add 1 to Iron Man votes', function () {
        loginPage.emailFld.sendKeys('preciousaka@gmail.com')
        loginPage.passwordFld.sendKeys('fakepassword')
        loginPage.submitBtn.click()

        expect(votePage.thanksAlertTxt.isDisplayed()).toBe(false)

        votePage. ironmanChoiceRad.click()
        votePage.submitBtn.click()
        expect(votePage.ironmanVal.getText()).toEqual('2')
        expect(votePage.thanksAlertTxt.getText()).toEqual('Thanks for voting!')
        expect(votePage.thanksAlertTxt.isDisplayed()).toBe(true)

        expect(votePage.voteFormSection.isDisplayed()).toBe(false)
    })
})