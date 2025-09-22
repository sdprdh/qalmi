import { SidebarContext } from '@/context/SidebarContext';
import { use } from 'react';

export const useSidebarContext = () => {
	const context = use(SidebarContext);

	if (!context) {
		throw new Error('useSidebarContext must be used within an SidebarProvider');
	}

	return context;
};
