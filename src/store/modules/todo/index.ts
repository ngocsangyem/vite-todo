import {
	Store as VuexStore,
	CommitOptions,
	DispatchOptions,
	Module,
} from 'vuex';

import { RootState } from '../../../store';

import { state, State } from './state/state';
import { getters, Getters } from './getters/getter';
import { mutations, Mutations } from './mutations/mutations';
import { actions, Actions } from './actions/actions';

export { State };

export type TodoStore<S = State> = Omit<
	VuexStore<S>,
	'getters' | 'commit' | 'dispatch'
> & {
	commit<K extends keyof Mutations, P extends Parameters<Mutations[K]>[1]>(
		key: K,
		payload: P,
		options?: CommitOptions
	): ReturnType<Mutations[K]>;
} & {
	dispatch<K extends keyof Actions>(
		key: K,
		payload: Parameters<Actions[K]>[1],
		options?: DispatchOptions
	): ReturnType<Actions[K]>;
} & {
	getters: {
		[K in keyof Getters]: ReturnType<Getters[K]>;
	};
};

export const store: Module<State, RootState> = {
	state,
	getters,
	mutations,
	actions,
	namespaced: true,
};
