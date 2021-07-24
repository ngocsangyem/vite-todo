// look into this sandbox for more detailed setup
// https://codesandbox.io/s/using-vuex-4-modules-in-vue-3-with-typescript-7ygvy?file=/src/store/index.ts

import { createStore, createLogger } from 'vuex';

import {
	store as todo,
	TodoStore,
	State as TodoState
} from './modules/todo'

export type RootState = {
	todo: TodoState;
};

export type Store = TodoStore<Pick<RootState, 'todo'>>;

const debug = true;

export const store = createStore({
    modules: {
        todo,
    },
    strict: debug,
    plugins: debug ? [createLogger({})] : [],
})

export function useStore(): Store {
  return store as Store;
}
