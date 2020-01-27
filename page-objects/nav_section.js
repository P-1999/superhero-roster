var NavSection = function () { }

NavSection.prototype = Object.create({}, {
    GmailLnk: { get: function () { return element(by.linkText('Gmail')) } }, // Update for your elemen
    imagesLnk: { get: function () { return element(by.linkText('Images')) } }, // Update for your elemen
    GoogleAppsIcon: { get: function () { return element(by.css('.gb_pc')) } }, // Update for your elemen
})
module.exports = NavSection