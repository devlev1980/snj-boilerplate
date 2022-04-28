import { Direction } from "src/app/core/types/direction.type";
import { Language } from "src/app/core/types/language.type";

type LanguageToDirectionMap = {
    [language in Language] : Direction 
}

export const LanguageToDirection : LanguageToDirectionMap = {
    'he-IL' : 'rtl',
    'en-US' : 'ltr',
    'ar' : 'rtl',
}