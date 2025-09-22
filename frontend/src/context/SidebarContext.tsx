import { createContext, Dispatch } from 'react';

export type TSidebarState = {
	open: boolean;
};

export type TSidebarAction = {
	type: 'TOGGLE';
};

export type SidebarContextType = {
	state: TSidebarState;
	dispatch: Dispatch<TSidebarAction>;
};

export const initialState: TSidebarState = {
	open: false,
};

export const sidebarReducer = (state: TSidebarState, action: TSidebarAction) => {
	switch (action.type) {
		case 'TOGGLE':
			return {
				...state,
				open: !state.open,
			};

		default:
			return state;
	}
};

export const SidebarContext = createContext<SidebarContextType | null>(null);
