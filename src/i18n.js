import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';

import en from './locale/en'
import am from './locale/am'

i18n
    .use(HttpApi)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        debug: false,
        fallbackLng: 'en', // Default fallback Language
        lng: 'en',
        interpolation: {
            escapeValue: false, //React already escapes values
        },
        resources: {
            en: { translation: en }, //Static translation files for fallback
            am: { translation: am },
        },
    });
export default i18n;
