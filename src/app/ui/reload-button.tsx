import ReplayIcon from '@mui/icons-material/Replay';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
const ReloadButton = () => {
	async function handleSubmit() {
		'use server';
		revalidatePath('/');
		redirect('/');
	}
	return (
		<form action={handleSubmit}>
			<button type="submit">
				<ReplayIcon />
			</button>
		</form>
	);
};
export default ReloadButton;
