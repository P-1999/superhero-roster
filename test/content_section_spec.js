// tests for Header Page

// Page Objects File
var ContentSection = require('../page-objects/content_section')

describe('Content Section Tests', function () {
    var loginPage

    beforeEach(function () {
        contentSection = new ContentSection()

        // Since this is not an Angular Site
        browser.ignoreSynchronization = true

        // Open URL
        browser.get('https://www.google.com/')
    })

    afterEach(function () {

    })

    it('should display Google Logo', function () {
        expect(contentSection.googleLogo.isDisplayed()).toBe(true)
    })

    it('should type search keywords', function () {
        contentSection.searchInputField.sendKeys('w3schools')
        browser.sleep(1000)
    })

    it('should click search button', function () {
        contentSection.googleSearch.submit()
        browser.sleep(1000)
    })

    it('should display search result', function () {
        browser.get('https://www.google.com/search?sxsrf=ACYBGNTAGpZNk4BVX2BPXDyK3Q3wfsVVOQ%3A1580052067892&source=hp&ei=Y64tXp6gNKWEjLsPkY65-Aw&q=w3schools&oq=&gs_l=psy-ab.1.2.35i362i39l10.0.0..1546123...8.0..0.0.0.......0......gws-wiz.....10.f4_UVZpdx_s')
        browser.sleep(5000)
    })

    it('should click and open the first search result', function () {
        contentSection.openSearchResult.click()        
        browser.sleep(5000)
    })

})