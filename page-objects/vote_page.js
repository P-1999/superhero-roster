var VotePage = function () { }

VotePage.prototype = Object.create({}, {

    voteTitleTxt: { get: function () { return element(by.css('body > div.container-fluid > div:nth-child(6) > div > h4')) } },
    xmenChoiceRadLbl: { get: function () { return element(by.css('#vote-form > div:nth-child(1) > label')) } },
    avengersChoiceRadLbl: { get: function () { return element(by.css('#vote-form > div:nth-child(2) > label')) } },
    deadpoolChoiceRadLbl: { get: function () { return element(by.css('#vote-form > div:nth-child(3) > label')) } },
    spidermanChoiceRadLbl: { get: function () { return element(by.css('#vote-form > div:nth-child(4) > label')) } },
    ironmanChoiceRadLbl: { get: function () { return element(by.css('#vote-form > div:nth-child(5) > label')) } },
    submitBtn: { get: function () { return element(by.css('#vote-form > button')) } },

    xmenChoiceRad: { get: function () { return element(by.id('heroMovieRadio1')) } },
    avengersChoiceRad: { get: function () { return element(by.id('heroMovieRadio2')) } },
    deadpoolChoiceRad: { get: function () { return element(by.id('heroMovieRadio3')) } },
    spidermanChoiceRad: { get: function () { return element(by.id('heroMovieRadio4')) } },
    ironmanChoiceRad: { get: function () { return element(by.id('heroMovieRadio5')) } },

    voteFormSection: { get: function () { return element(by.id('vote-form')) } },


    movieLbl: { get: function () { return element(by.css('body > div.container-fluid > div:nth-child(6) > div > table > thead > tr > th:nth-child(1)')) } },
    voteLbl: { get: function () { return element(by.css('body > div.container-fluid > div:nth-child(6) > div > table > thead > tr > th:nth-child(2)')) } },
    xmenLbl: { get: function () { return element(by.css('#movieName1')) } },
    xmenVal: { get: function () { return element(by.css('#movieVotes1')) } },
    avengersLbl: { get: function () { return element(by.css('#movieName2')) } },
    avengersVal: { get: function () { return element(by.css('#movieVotes2')) } },
    deadpoolLbl: { get: function () { return element(by.css('#movieName3')) } },
    deadpoolVal: { get: function () { return element(by.css('#movieVotes3')) } },
    spidermanLbl: { get: function () { return element(by.css('#movieName4')) } },
    spidermanVal: { get: function () { return element(by.css('#movieVotes4')) } },
    ironmanLbl: { get: function () { return element(by.css('#movieName5')) } },
    ironmanVal: { get: function () { return element(by.css('#movieVotes5')) } },

    thanksAlertTxt: { get: function () { return element(by.id('vote-alert')) } },

})
module.exports = VotePage