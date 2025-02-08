import { AppState, CategoryType, LanguageType } from "@types";

import { slugify } from "./slugify";

export const defaultLanguage: LanguageType = {
  name: "DART",
  icon: "/icons/dart.svg",
  subLanguages: [],
};

export const defaultSlugifiedSubLanguageName = slugify("All Sub Languages");

export const defaultCategoryName: CategoryType["name"] = "All Snippets";

// TODO: add custom loading and error handling
export const defaultState: AppState = {
  language: defaultLanguage,
  subLanguage: defaultSlugifiedSubLanguageName,
  category: defaultCategoryName,
  snippet: null,
  setSnippet: () => {},
  searchText: "",
  setSearchText: () => {},
};
