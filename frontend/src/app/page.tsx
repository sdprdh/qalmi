import PostUserItem from '@/features/posts/components/post-user';
import { Stack } from '@chakra-ui/react';

const Home = () => {
	return (
		<>
			{/* // posts */}
			<Stack as="section">
				<PostUserItem />
			</Stack>
		</>
	);
};

export default Home;
