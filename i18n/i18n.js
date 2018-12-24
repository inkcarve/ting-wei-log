var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var NextI18Next = require('next-i18next');
var optionsNexti18next = {
    browserLanguageDetection: true,
    defaultLanguage: 'zh',
    otherLanguages: ['en'],
    localePath: 'static/locales',
    localeStructure: '{{lng}}/{{ns}}',
    localeSubpaths: false,
};
var i18nOptions = __assign({}, optionsNexti18next);
var nextI18Next = new NextI18Next(i18nOptions);
module.exports = nextI18Next;
//# sourceMappingURL=i18n.js.map