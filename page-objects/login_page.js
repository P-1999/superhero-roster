// Login Page Objects

var LoginPage = function () { }

LoginPage.prototype = Object.create({}, {

    loginTitleTxt: { get: function () { return element(by.id('login-title')) } }, // Update for your element
    emailFldLbl: { get: function () { return element(by.css('#form-login > div:nth-child(1) > label')) } },
    emailFld: { get: function () { return element(by.id('loginEmail')) } },
    passwordFldLbl: { get: function () { return element(by.css('#form-login > div:nth-child(2) > label')) } },
    passwordFld: { get: function () { return element(by.id('loginPassword')) } },
    rememberChkLbl: { get: function () { return element(by.css('#form-login > div.form-check > label')) } },
    rememberChk: { get: function () { return element(by.id('rememberLoginChk')) } },
    submitBtn: { get: function () { return element(by.css('#form-login > button')) } },
    loginErrorMsg: { get: function () { return element(by.id('submit')) } },

})

module.exports = LoginPage