import ButtonToSignin from '@/components/ButtonToSignin';
import ProfileAvatar from '@/components/ProfileAvatar';
import { HStack, StackProps, Text } from '@chakra-ui/react';

const user = false;

const Profile = ({ ...props }: StackProps) => {
	return (
		<HStack {...props}>
			{user ? (
				<HStack
					ms={{ base: 2, lg: 0 }}
					gap={2}
				>
					<ProfileAvatar />{' '}
					<Text
						hideFrom="lg"
						textStyle="xs"
					>
						Profile
					</Text>
				</HStack>
			) : (
				<ButtonToSignin />
			)}
		</HStack>
	);
};

export default Profile;
