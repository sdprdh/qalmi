import { create } from 'zustand';

// start, reset, isActive, format
type CountdownState = {
	countdown: number;
	start: () => void;
	reset: () => void;
	isActive: boolean;
	format: () => string;
};

const initialSeconds = Number(process.env.NEXT_PUBLIC_COUNTDOWN) || 0;

export const useCountdownStore = create<CountdownState>((set, get) => ({
	countdown: initialSeconds,
	start: () => {
		let currentSeconds = get().countdown;
		const interval = setInterval(() => {
			currentSeconds -= 1;
			set({ countdown: currentSeconds });
			if (currentSeconds <= 0) {
				clearInterval(interval);
			}
		}, 1000);
	},
	reset: () => set({ countdown: initialSeconds }),
	isActive: get().countdown > 0,
	format: () => {
		const countdown = get().countdown;
		const minutes = Math.floor(countdown / 60);
		const seconds = countdown % 60;
		return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
	},
}));
