import { Todo } from '../../../../@types';

export type State = {
	todo: Todo | null;
};

export const state: State = {
	todo: {
		name: 'John Doe',
	},
};
