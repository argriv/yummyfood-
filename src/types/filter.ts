import { Sort } from "./selectS";

export interface RepositoriesState {
  value: string
  categoryId: number
  filter: Sort
}

export enum ActionType {
  SEARCH_CARDS = 'SEARCH_CARDS',
  SEARCH_CATEGORY_ID = 'SEARCH_CATEGORY_ID',
  SEARCH_FILTER = 'SEARCH_FILTER',
}

interface SearchCardsAction {
  type: ActionType.SEARCH_CARDS;
  payload: string
}

interface SearchCategoryAction {
  type: ActionType.SEARCH_CATEGORY_ID;
  payload: number
}

interface SearchFilterAction {
  type: ActionType.SEARCH_FILTER;
  payload: Sort
}


type Action =
  | SearchCardsAction
  | SearchCategoryAction
  | SearchFilterAction

export type {Action}