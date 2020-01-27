// Content Section Objects

var ContentSection = function () { }

ContentSection.prototype = Object.create({}, {
    googleLogo: { get: function () { return element(by.css("img[id='hplogo']")) } }, // Update for your element
    searchInputField: { get: function () { return element(by.css("input[name='q']")) } }, // Update for your element
    googleSearch: { get: function () { return element(by.css("form[name='f']")) } }, // Update for your element
    openSearchResult: { get: function () { return element(by.css("a[href='https://www.w3schools.com/']")) } }, // Update for your element
    // googleSearch: { get: function () { return element(by.css("input[name='btnK']")) } }, // Update for your element
    // googleSearch: { get: function () { return element(by.css('li span')) } }, // Update for your element
})

module.exports = ContentSection