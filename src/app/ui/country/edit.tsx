'use client';
import { Nation } from '@/@types/nation';
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const EditButton = ({ nation }: { nation: Nation }) => {
	const { data: session, status } = useSession();
	const router = useRouter();
	const handleClickButton = () => {
		if (session?.user) {
			return router.push('/edit');
		} else {
			return alert('로그인후 게시글을 작성할 수 있어요.');
		}
	};
	return (
		<div className="p-2">
			<button onClick={handleClickButton}>
				<p className="text-nowrap font-medium text-md">글쓰기</p>
			</button>
		</div>
	);
};
export default EditButton;
