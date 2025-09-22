import { NextRequest, NextResponse } from 'next/server';

const ROUTES = {
	AUTH: ['/auth'],
};

export const middleware = async (request: NextRequest) => {
	const pathname = request.nextUrl.pathname;

	return NextResponse.next();
};

export const config = {
	matcher: ['/auth/:path*'],
};
