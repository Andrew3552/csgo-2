import type {Locale} from '@/common/types';

interface ILanguage {
    name: string;
    id: Locale;
}

export function useLocales() {
    const allLanguages: Array<ILanguage> = [
        {
            name: 'Ua',
            id: 'ua',
        },
        {
            name: 'Pl',
            id: 'pl',
        },
        {
            name: 'Tr',
            id: 'tr',
        },
        {
            name: 'En',
            id: 'en',
        },
        {
            name: 'Ru',
            id: 'ru',
        },
        {
            name: 'Br',
            id: 'pt',
        }

    ];
    const translations: Locale[] = ['ua', 'pl', 'tr', 'en', 'ru', 'pt'];

    function isAvailable(language: string): boolean {
        return translations.includes(language as Locale);
    }

    const defaultLocale: Locale = 'ua';
    return {
        allLanguages,
        translations,
        isAvailable,
        defaultLocale,
    };
}
