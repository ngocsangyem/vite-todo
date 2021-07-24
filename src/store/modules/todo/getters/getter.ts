import { GetterTree } from 'vuex';

import { RootState } from '../../..';
import { State } from '../state/state';

import { TodoGetterTypes } from './getter-types';

export type Getters = {
	[TodoGetterTypes.GET_NAME_AS_UPPERCASED](state: State): String | undefined;
};

export const getters: GetterTree<State, RootState> & Getters = {
	[TodoGetterTypes.GET_NAME_AS_UPPERCASED]: (state: State) =>
		state.todo?.name.toUpperCase(),
};
