import { Avatar, MenuContent, MenuItem, MenuRoot, MenuTrigger } from '@/components/ui';
import { defineStyle } from '@chakra-ui/react';
import { getImageProps } from 'next/image';

const ringCss = defineStyle({
	outlineWidth: '2px',
	outlineColor: 'teal.600',
	outlineOffset: '1px',
	outlineStyle: 'solid',
});

const ProfileAvatar = () => {
	const imageProps = getImageProps({
		src: 'https://bit.ly/sage-adebayo',
		alt: 'avatar',
		fill: true,
		priority: true,
	});

	return (
		<>
			<MenuRoot>
				<MenuTrigger focusRing="none">
					<Avatar
						size={{ base: '2xs', lg: 'xs' }}
						css={ringCss}
						cursor="pointer"
						name="Sandi Perdiansah"
						src={imageProps.props.src}
						alt={imageProps.props.alt}
					/>
				</MenuTrigger>
				<MenuContent>
					<MenuItem value="rename">Rename</MenuItem>
					<MenuItem value="export">Export</MenuItem>
					<MenuItem
						value="delete"
						color="fg.error"
						_hover={{ bg: 'bg.error', color: 'fg.error' }}
					>
						Delete...
					</MenuItem>
				</MenuContent>
			</MenuRoot>
		</>
	);
};

export default ProfileAvatar;
