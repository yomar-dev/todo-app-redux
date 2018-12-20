import { Action } from '@ngrx/store';

export const SET_FILTER = '[Filter] Set filter';
export type validFilters = 'all' | 'completed' | 'pending';

export class SetFilterAction implements Action {
    readonly type = SET_FILTER;

    constructor(public filter: validFilters) {}
}

export type actions = SetFilterAction;
