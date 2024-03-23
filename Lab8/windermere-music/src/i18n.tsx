import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import * as englishTranslation from "./languages/en.json";
import * as frenchTranslation from "./languages/fr.json";

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        fallbackLng: 'en',
        debug: true,
        interpolation: {
            escapeValue: false,
        },
        resources: {
            en: {
                translation: englishTranslation
            },
            fr: {
                translation: frenchTranslation
            }
        },
    });

export default i18n;