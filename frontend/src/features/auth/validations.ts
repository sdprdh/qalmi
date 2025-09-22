import { z } from 'zod';

export const signupSchema = z
	.object({
		name: z
			.string({
				error: (issue) => (issue.input === undefined ? 'Nama harus diisi' : issue.message),
			})
			.min(3, { error: 'Nama minimal 3 karakter' })
			.max(100, { error: 'Nama maksimal 100 karakter' }),
		email: z
			.email({
				error: (issue) =>
					issue.input === undefined ? 'Email harus diisi' : 'Email tidak valid',
			})
			.max(100, { error: 'Email maksimal 100 karakter' }),
		password: z
			.string({
				error: (issue) => (issue.input === undefined ? 'Password harus diisi' : ''),
			})
			.min(6, { error: 'Password minimal 6 karakter' })
			.max(100, { error: 'Password maksimal 100 karakter' }),
	})
	.strict();
	
export type SignupSchema = z.infer<typeof signupSchema>;
