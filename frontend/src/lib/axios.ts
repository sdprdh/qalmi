import axios from 'axios';

const instance = axios.create({
	baseURL: `${process.env.NEXT_PUBLIC_BASE_API_URL}/api`,
	withCredentials: true,
});

export default instance;
