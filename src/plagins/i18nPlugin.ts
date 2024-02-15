import { createI18n } from 'vue-i18n';
import translates from '@/locales';
import type { Locale } from '@/common/types';
import { useLocales } from '@/hooks/useLocales';

let userLanguage: Locale = window.navigator.language.split('-')[0].toLowerCase() as Locale;;

const locales = useLocales();

if (!locales.isAvailable(userLanguage)) {
    userLanguage = locales.defaultLocale;
}

export const i18n = createI18n({
    legacy: false,
    locale: userLanguage,
    fallbackLocale: locales.defaultLocale,
    messages: translates,
});

export function setLocale(locale: Locale) {
    i18n.global.locale.value = locale;
}
