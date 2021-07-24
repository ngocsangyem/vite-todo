import { ActionTree, ActionContext } from 'vuex';

import { RootState } from '../../..';

import { State } from '../state/state';
import { Mutations } from '../mutations/mutations';
import { TodoMutationTypes } from '../mutations/mutations-types';
import { TodoActionTypes } from './action-types';

type AugmentedActionContext = {
	commit<K extends keyof Mutations>(
		key: K,
		payload: Parameters<Mutations[K]>[1]
	): ReturnType<Mutations[K]>;
} & Omit<ActionContext<State, RootState>, 'commit'>;

export interface Actions {
	[TodoActionTypes.SAVE_TODO](
		{ commit }: AugmentedActionContext,
		name: string
	): void;
}

export const actions: ActionTree<State, RootState> & Actions = {
	async [TodoActionTypes.SAVE_TODO]({ commit }, name: string) {
		commit(TodoMutationTypes.SET_TODO, name);
	},
};
