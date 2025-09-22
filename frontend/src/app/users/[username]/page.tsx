const Page = async ({ params }: { params: Promise<{ username: string }> }) => {
	const { username } = await params;
	return <div>USER {username}</div>;
};

export default Page;
