import ReplayIcon from '@mui/icons-material/Replay';
import { revalidatePath } from 'next/cache';
import { redirect, RedirectType } from 'next/navigation';
const ReloadButton = () => {
	async function handleSubmit() {
		'use server';

		revalidatePath('/');
		redirect('/');
	}
	return (
		<form action={handleSubmit}>
			<button
				aria-label="reload-products"
				type="submit">
				<ReplayIcon />
			</button>
		</form>
	);
};
export default ReloadButton;
