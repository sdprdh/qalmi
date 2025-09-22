import PostBody from '@/features/posts/components/post-user/PostBody';
import PostFooter from '@/features/posts/components/post-user/PostFooter';
import PostHeader from '@/features/posts/components/post-user/PostHeader';
import { Stack } from '@chakra-ui/react';

const PostUserItem = () => {
	return (
		<Stack>
			<PostHeader />
			<PostBody />
			<PostFooter />
		</Stack>
	);
};

export default PostUserItem;
