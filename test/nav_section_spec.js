var NavSection = require('../page-objects/nav_section')


describe('Nav Section', function () {
    var navSection
    

    beforeEach(function () {
        navSection = new NavSection
    

        browser.ignoreSynchronization = true

        // Open URL
        browser.get('https://www.google.com/search')
    })

    afterEach(function () {

    })
    it('should dislay Gmail Lnk', function () {
        expect(navSection.GmailLnk.isDisplayed()).toBe(true)
    })
    it('should dislay images Lnk', function () {
        expect(navSection.imagesLnk.isDisplayed()).toBe(true)
    })
    it('should dislay Google Apps icon', function () {
        expect(navSection.GoogleAppsIcon.isDisplayed()).toBe(true)
    })
})