const NextI18Next = require('next-i18next')

// options of next-i18next https://github.com/isaachinman/next-i18next#options
const optionsNexti18next = { 
    browserLanguageDetection:true,
    defaultLanguage: 'zh',
    otherLanguages: ['en'],
    localePath: 'static/locales',
    localeStructure: '{{lng}}/{{ns}}',
    localeSubpaths: false,
    // use:[],
}

// extend i18next options https://www.i18next.com/overview/configuration-options
const i18nOptions = {
    ...optionsNexti18next
};

const nextI18Next = new NextI18Next(i18nOptions)

module.exports = nextI18Next