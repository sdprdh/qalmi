const Page = async ({ params }: { params: Promise<{ slug: string }> }) => {
	const { slug } = await params;

	return <div>POST {slug}</div>;
};

export default Page;
