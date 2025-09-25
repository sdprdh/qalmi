import Profile from '@/components/Profile';
import SidebarRender from '@/components/sidebar/SidebarRender';
import { SIDEBAR_MENU } from '@/lib/data';
import { ScrollArea } from '@chakra-ui/react';

const Sidebar = () => {
	return (
		<ScrollArea.Root
			h="vh"
			ps={6}
			pt={{ base: 4, lg: 2 }}
			pe={2}
		>
			<ScrollArea.Viewport>
				<ScrollArea.Content
					spaceY={4}
					pb={16}
				>
					<Profile
						hideFrom="lg"
						mt={{ base: 4, lg: 0 }}
					/>

					<SidebarRender
						title="Menu"
						data={SIDEBAR_MENU.menu}
						border="none"
					/>

					<SidebarRender
						title="Acara"
						data={SIDEBAR_MENU.forum}
						footerLink={{ href: '/events', field: 'Semua Acara' }}
					/>

					<SidebarRender
						title="Forum"
						data={SIDEBAR_MENU.forum}
						footerLink={{ href: '/forum', field: 'Semua Forum' }}
					/>

					<SidebarRender
						title="Lainya"
						data={SIDEBAR_MENU.qalmi}
					/>
				</ScrollArea.Content>
			</ScrollArea.Viewport>
		</ScrollArea.Root>
	);
};

export default Sidebar;
