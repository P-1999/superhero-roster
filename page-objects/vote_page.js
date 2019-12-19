var VotePage = function () {}

VotePage.prototype = Object.create({}, {

    voteTitleTxt: { get: function () { return element(by.css('body > div.container-fluid > div:nth-child(6) > div > h4')) } },
    xmenChioceRed: { get: function () { return element(by.css('#vote-form > div:nth-child(1) > label')) } },
    avengersChioceRed: { get: function () { return element(by.css('#vote-form > div:nth-child(2) > label')) } },
    deadpoolChioceRed: { get: function () { return element(by.css('#vote-form > div:nth-child(3) > label')) } },
    spidermanChioceRed: { get: function () { return element(by.css('#vote-form > div:nth-child(4) > label')) } },
    ironmanChioceRed: { get: function () { return element(by.css('#vote-form > div:nth-child(5) > label')) } },
    submitBtn: { get: function () { return element(by.css('#vote-form > button')) } },
    movieLbl: { get: function () { return element(by.css('body > div.container-fluid > div:nth-child(6) > div > table > thead > tr > th:nth-child(1)')) } },
    voteLbl: { get: function () { return element(by.css('body > div.container-fluid > div:nth-child(6) > div > table > thead > tr > th:nth-child(2)')) } },
    xmenLbl: { get: function () { return element(by.id('#movieName1')) } },
    xmenVal: { get: function () { return element(by.id('#movieVotes1')) } },
    avengersLbl: { get: function () { return element(by.id('#movieName2')) } },
    avengersVal: { get: function () { return element(by.id('#movieVotes2')) } },
    deadpoolLbl: { get: function () { return element(by.id('#movieName3')) } },
    deadpoolVal: { get: function () { return element(by.id('#movieVotes3')) } },
    spidermanLbl: { get: function () { return element(by.id('#movieName4')) } },
    spidermanLbl: { get: function () { return element(by.id('#movieVotes4')) } },
    ironmanLbl: { get: function () { return element(by.id('#movieName5')) } },
    ironmanVal: { get: function () { return element(by.id('#movieVotes5')) } },

})
module.exports = VotePage