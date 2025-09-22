import { useState } from 'react';

const initialSeconds = Number(process.env.NEXT_PUBLIC_COUNTDOWN);

export const useCountdown = (seconds?: number) => {
	const [countdown, setCountdown] = useState(seconds ?? initialSeconds);

	// start, reset, isActive, format
	const start = () => {
		let currentSeconds = countdown;
		const interval = setInterval(() => {
			currentSeconds -= 1;
			setCountdown(currentSeconds);
			if (currentSeconds <= 0) {
				clearInterval(interval);
			}
		}, 1000);
	};

	const reset = () => {
		setCountdown(initialSeconds);
	};

	const isActive = countdown > 0;
	const format = () => {
		const minutes = Math.floor(countdown / 60);
		const seconds = countdown % 60;
		return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
	};

	return { countdown, start, reset, isActive, format };
};
