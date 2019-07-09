export const fallback = "en";

export const supportedLocales = {
    en: {
        name: "English",
        translationFileLoader: () => require('../lang/en.json'),

        // en is default locale in Moment
        momentLocaleLoader: () => Promise.resolve(),
    },
    ru: {
        name: "Русский",
        translationFileLoader: () => require('../lang/ru.json'),
        momentLocaleLoader: () => import('moment/locale/ru'),
    },
};

export const defaultNamespace = "common";

export const namespaces = [
    "common",
    "tabs",
    "main",
    "search",
    "feed",
    "profile",
    "settings"
];
