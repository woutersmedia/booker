import 'server-only'

import { LangParams } from "@/types/Locale";

const dictionaries = {
  en: () => import('./dictionaries/en.json').then((module) => module.default),
  nl: () => import('./dictionaries/nl.json').then((module) => module.default),
}

export const getDictionary = async (locale: LangParams['lang']) =>
  dictionaries[locale]()