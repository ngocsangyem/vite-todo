import { MutationTree } from 'vuex';

import { State } from '../state/state';
import { TodoMutationTypes } from './mutations-types';

export type Mutations<S = State> = {
	[TodoMutationTypes.SET_TODO](state: S, payload: String): void;
};

export const mutations: MutationTree<State> & Mutations = {
	[TodoMutationTypes.SET_TODO](state: State, name: String) {
		state.todo!.name = name;
	},
};
