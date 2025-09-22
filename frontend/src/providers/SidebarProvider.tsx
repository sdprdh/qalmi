'use client';

import { initialState, SidebarContext, sidebarReducer } from '@/context/SidebarContext';
import { useReducer } from 'react';

export const SidebarProvider = ({ children }: { children: React.ReactNode }) => {
	const [state, dispatch] = useReducer(sidebarReducer, initialState);

	return (
		<SidebarContext.Provider value={{ state, dispatch }}>{children}</SidebarContext.Provider>
	);
};
